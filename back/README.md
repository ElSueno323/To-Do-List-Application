# Task Manager - Backend

This is the backend for the Task Manager application. The backend provides a REST API to manage tasks, including operations to create, read, update, and delete tasks.

---

##  Features

- **CRUD Operations**: Support for creating, reading, updating, and deleting tasks.
- **Task Model**: Tasks have a title, description, and status (pending/completed).
- **PostgreSQL Integration**: Uses PostgreSQL for persistent task storage.
- **Input Validation**: Uses Zod for validating incoming task data.
- **API Endpoints**:
    - `GET /tasks`: Fetch all tasks.
    - `GET /tasks/:id`: Fetch a task by ID.
    - `POST /tasks`: Create a new task.
    - `PATCH /tasks/:id`: Mark a task as complete.
    - `DELETE /tasks/:id`: Delete a task by ID.

---

##  Project Structure

The project is structured as follows:

    src/ 
    ├── controllers/ # Controllers for handling request logic 
    ├── models/ # Task model and database setup  
    ├── routes/ # Express route definitions 
    ├── services/ # Logic for interacting with the database  
    ├── validators/ # Zod validation schemas for input validation  
    └── app.ts # Express app setup and middleware

---

##  Prerequisites

Before running the backend, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for package management
- [PostgreSQL](https://www.postgresql.org/) for the database

---

## ️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ElSueno323/To-Do-List-Application
cd back
```

 Configuration
You will need to configure the backend to connect to your PostgreSQL database. Create a .env file in the root directory and define the following environment variables:

```

type: "postgres",
host: "localhost",
port: 5432,
const password ="123456";
const username = "postgres";
const database= "bluetrees";
PORT=3000
```

These variables are used to connect to the PostgreSQL database and set the port for the server.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```
 The API will be available at http://localhost:3000.
### Database
```
You need to have 

 A user with username "postgres" 
 and a password ="123456"
 
```

## Technologies Used
1. Node.js: JavaScript runtime for building the backend.
2. Express: Web framework for building REST APIs.
3. PostgreSQL: Relational database for storing tasks.
4. Zod: Type-safe schema validation for incoming data.
5. TypeOrm


## API Endpoints

1. **GET /tasks** : Describes the endpoint that retrieves all tasks. It does not require any parameters and returns all tasks as a JSON array.
2. **GET /tasks/:id** :Allows retrieving a specific task using its ID. It returns a single task in JSON format. 
3. **POST /tasks** : Allows creating a new task. The request body must include a title, description, and status. The task is created and returned with its ID.
4. **PATCH /tasks/:id** : Allows marking the status of an existing task . The request body must include the updated status.
5. **DELETE /tasks/:id** : Allows deleting a task using its ID. A confirmation message is returned once the task is deleted.
