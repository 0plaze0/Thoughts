# Thoughts

<div align='center'>

![Thoughts](projectPreview/logoWhite.png)

</div>

A blogging platform to share your insights and expertise with others.

![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Table of contents

- [Thougts](#thougts)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Features](#features)
    - [User Authentication](#user-authentication)
    - [Article Management](#article-management)
    - [Security](#security)
    - [Cross-Origin Resource Sharing (CORS)](#cross-origin-resource-sharing-cors)
    - [Testing](#testing)
  - [Built with](#built-with)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
    - [Test](#test)
  - [Contributing](#contributing)
  - [Getting Started](#getting-started)

## Overview

![Thoughts](<projectPreview/ThoughstPreview (1).png>)
![Thoughts](<projectPreview/ThoughstPreview (3).png>)
![Thoughts](<projectPreview/ThoughstPreview (2).png>)

<div>

[Demo Video](https://youtu.be/lQNTVGgi7wo)


#### Features

### User Authentication

- **User Registration**: Users can sign up for an account by providing basic information such as username, email, and password.
- **User Login**: Registered users can log in securely using their credentials.
- **JWT Authentication**: JSON Web Tokens (JWT) are used for secure authentication and authorization of users.

### Article Management

- **Create Articles**: Authenticated users can create new articles by providing title, content, and other relevant information.
- **Read Articles**: Users can view articles created by themselves and other users.
- **Update Articles**: Authors can edit and update their articles to keep them current and accurate.
- **Delete Articles**: Authors have the ability to delete their own articles if needed.

### Security

- **Password Hashing**: User passwords are securely hashed before storing them in the database to ensure confidentiality.
- **HTTPS**: Communication between the client and server is encrypted using HTTPS to prevent eavesdropping and man-in-the-middle attacks.

### Cross-Origin Resource Sharing (CORS)

- Cross-Origin Resource Sharing (CORS) is properly configured to allow restricted resources on a web page to be requested from another domain outside the domain from which the resource originated.

### Testing

- **Component Testing**: Components of the application are thoroughly tested to ensure their functionality and reliability.
- **Unit Testing**: Individual units of code are tested in isolation to validate their correctness.

</div>

<hr/>

## Built with

#### Frontend

- HTML5
- CSS
- Javascript
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/guide/)

#### Backend

- Node.js
- Express.js

#### Database

- Mongo DB

### Test

- Jest
- Vitest

> This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) message and [Model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) design pattern

<hr/>

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Getting Started

1. Clone the repository.
2. Install dependencies for both api and client: `npm install`

   ```
   //frontend
   VITE_BASE_API=(eg. http://localhost:5555/)

   //backend
   DB_URI=(eg. mongodb://127.0.0.1:27017/)
    SALT=(eg. 10)
    ACCESS_TOKEN_SECRET=(eg. secret)
   ```

3. Set up environment variables such as database connection string, JWT secret key, etc.
4. Start the server: `npm start`
5. Start the frontend development server: `npm start`
