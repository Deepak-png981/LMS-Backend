# Backend Endpoints Documentation

This document provides an overview of the backend endpoints for the LMS (Learning Management System) application.

## Base URL

All endpoints are relative to the base URL: `http://your-domain.com`

## Authentication

Authentication is required for certain endpoints. You need to include the appropriate authentication token in the request headers.

## User Endpoints

### Register User

- Method: POST
- URL: /users/register
- Description: Registers a new user.
- Request Body:
  - `email` (string, required): Email of the user.
  - `password` (string, required): Password of the user.

### Login User

- Method: POST
- URL: /users/login
- Description: Logs in an existing user.
- Request Body:
  - `email` (string, required): Email of the user.
  - `password` (string, required): Password of the user.

### Logout User

- Method: POST
- URL: /users/logout
- Description: Logs out the current user.

### Get Current User

- Method: GET
- URL: /users/me
- Description: Retrieves information about the currently authenticated user.

### Update User

- Method: PATCH
- URL: /users/me
- Description: Updates information about the currently authenticated user.
- Request Body: Fields to be updated.

### Delete User

- Method: DELETE
- URL: /users/me
- Description: Deletes the currently authenticated user account.
# Backend Endpoints Documentation

This document provides an overview of the backend endpoints for the LMS (Learning Management System) application.

## Base URL

All endpoints are relative to the base URL: `http://your-domain.com`

## Authentication

Authentication is required for certain endpoints. You need to include the appropriate authentication token in the request headers.

## User Endpoints

### Register User

- Method: POST
- URL: /users/register
- Description: Registers a new user.
- Request Body:
  - `email` (string, required): Email of the user.
  - `password` (string, required): Password of the user.

### Login User

- Method: POST
- URL: /users/login
- Description: Logs in an existing user.
- Request Body:
  - `email` (string, required): Email of the user.
  - `password` (string, required): Password of the user.

### Logout User

- Method: POST
- URL: /users/logout
- Description: Logs out the current user.

### Get Current User

- Method: GET
- URL: /users/me
- Description: Retrieves information about the currently authenticated user.

### Update User

- Method: PATCH
- URL: /users/me
- Description: Updates information about the currently authenticated user.
- Request Body: Fields to be updated.

### Delete User

- Method: DELETE
- URL: /users/me
- Description: Deletes the currently authenticated user account.

## Course Endpoints

### Create Course

- Method: POST
- URL: /courses
- Description: Creates a new course.
- Authentication Required: Yes
- Request Body: 
  - Specify course details.

### Get One Course

- Method: GET
- URL: /courses/:courseId
- Description: Retrieves details of a specific course.
- Authentication Required: Yes

### Get All Courses

- Method: GET
- URL: /courses/:filter?
- Description: Retrieves all courses optionally filtered by a parameter.
- Authentication Required: Yes

### Update Course

- Method: PUT
- URL: /courses/:courseId
- Description: Updates information about a specific course.
- Authentication Required: Yes
- Request Body: Fields to be updated.

### Delete Course

- Method: DELETE
- URL: /courses/:courseId
- Description: Deletes a specific course.
- Authentication Required: Yes

### End Course

- Method: POST
- URL: /courses/:courseId/end-course
- Description: Marks a course as ended.
- Authentication Required: Yes

### Enroll to Course

- Method: POST
- URL: /courses/:courseId/enroll
- Description: Enrolls the current user to a course.
- Authentication Required: Yes

### Un-enroll from Course

- Method: POST
- URL: /courses/:courseId/un-enroll
- Description: Un-enrolls the current user from a course.
- Authentication Required: Yes

## Assignment Endpoints

### Create Assignment

- Method: POST
- URL: /assignment/:courseId/CreateAssignment
- Description: Creates a new assignment for a specific course.
- Authentication Required: Yes
- Request Body: Assignment details.

### Get All Assignments

- Method: GET
- URL: /assignment/:courseId/gettingAllAssignment
- Description: Retrieves all assignments for a specific course.
- Authentication Required: Yes

### Get Assignment

- Method: GET
- URL: /assignment/:courseId/getAssignment/:assigmentId
- Description: Retrieves details of a specific assignment.
- Authentication Required: Yes

### Edit Status for Assignment

- Method: PATCH
- URL: /assignment/:courseId/editStatus/:assigmentId
- Description: Updates status of a specific assignment.
- Authentication Required: Yes

### Show Assignment

- Method: PATCH
- URL: /assignment/:courseId/showAssignment/:assigmentId
- Description: Marks an assignment as shown.
- Authentication Required: Yes

### Edit Date for Assignment

- Method: PATCH
- URL: /assignment/:courseId/editDate/:assigmentId
- Description: Updates due date of a specific assignment.
- Authentication Required: Yes

### Delete Assignment

- Method: DELETE
- URL: /assignment/:courseId/deleteAssignment/:assigmentId
- Description: Deletes a specific assignment.
- Authentication Required: Yes

## Module Item Endpoints

### Create Module Item

- Method: POST
- URL: /courses/:courseId/modules/:moduleId/module-item
- Description: Creates a new module item for a specific course module.
- Authentication Required: Yes
- Request Body: Module item details.

### Update Module Item

- Method: PUT
- URL: /courses/:courseId/modules/:moduleId/module-item/:id
- Description: Updates information about a specific module item.
- Authentication Required: Yes
- Request Body: Fields to be updated.

### Delete Module Item

- Method: DELETE
- URL: /courses/:courseId/modules/:moduleId/module-item/:id
- Description: Deletes a specific module item.
- Authentication Required: Yes

## Lecture Endpoints

### Get All Videos

- Method: GET
- URL: /lectures
- Description: Retrieves all videos.
- Authentication Required: No

### Get All Comments for a Video

- Method: GET
- URL: /lectures/:moduleItemId/comments
- Description: Retrieves all comments for a specific video.
- Authentication Required: No

### Create Comment for a Video

- Method: POST
- URL: /lectures/:moduleItemId/comments
- Description: Creates a new comment for a specific video.
- Authentication Required: Yes
- Request Body: Comment details.

### Delete Comment for a Video

- Method: DELETE
- URL: /lectures/:moduleItemId/comments/:commentId
- Description: Deletes a specific comment for a video.
- Authentication Required: Yes
