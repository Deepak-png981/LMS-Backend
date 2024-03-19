const User = require('../../models/user')
const jwt = require('jsonwebtoken')


const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        user.code = Date.now()
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json({ user, token })
    } catch (e) {
        console.log("error in create user  : ", e);
        res.status(400).send(e)
    }
}

const forgetPassword = async (req, res) => {
    const email = req.body.email
    const user = User.find({ email: email })
    try {
        if (!user) {
            throw new Error('Please Register First ')
        }
        res.status(200).send('Check your Email')
    } catch (e) {
        res.status(404).send('email not founded')
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
        console.log(e)
    }
}

const logout = async (req, res) => {
    try {
        let token
        const authorization = req.get('authorization')
        if (authorization && authorization.startsWith('Bearer')) {
            token = authorization.substring(7)
        }
        const decoded = jwt.decode(token)
        const user = await User.findOne({ _id: decoded._id })

        if (!user) res.status(400).send('token is corrupted')

        const alreadyInvalidated = await User.find({ invalidatedTokens: token })

        if (alreadyInvalidated.length === 0) user.invalidatedTokens.push(token)

        user.invalidatedTokens = user.invalidatedTokens.filter((token) => {
            const { exp } = jwt.decode(token)
            if (Date.now() >= exp * 1000) return false
            else return true
        })

        await user.save()

        res.send('You Logged out')
    } catch (e) {
        res.status(500).send({ error: e.message || e.toString() })
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.user._id
        const usr = req.body
        const userOld = await User.findById(id).exec()
        const user = await User.findByIdAndUpdate(id, usr, { new: true }).exec()
        const token = await user.generateAuthToken()

        if (user.email !== userOld.email || !(user.isEmailRegistered)) {

            console.log("can't change the email for now")
            return res.status(401).json({ message: 'Email cannot be changed' });
        } else {
            console.log("email is not changed or already registered")
        }

        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
}

const deleteUser = async (req, res) => {
    try {
        await req.user.remove()
        res.status(200).send('Deleted thanks')
    } catch (e) {
        res.status(500).send('invalid Email')
    }
}

const me = async (req, res) => {
    try {
        // Retrieve user with enrollments populated
        const userWithEnrollments = await User.findById(req.user._id).populate('enrollments');
        res.send(userWithEnrollments);
    } catch (e) {
        console.log("Error:", e);
        res.status(500).send('Internal Server Error');
    }
}



module.exports = {
    createUser,
    forgetPassword,
    login,
    updateUser,
    logout,
    deleteUser,
    me
}
