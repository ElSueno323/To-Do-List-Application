import {DataSource} from "typeorm";

const password ="123456";
const username = "postgres";
const database= "bluetrees";

/**
 * Asynchronously creates a new database and a corresponding tasks table.
 *
 * This function initializes a connection to a PostgreSQL database using
 * the specified connection parameters. It then creates a database named
 * `bluetrees` and defines a table called `tasks` with the specified columns
 * and data types.
 *
 * The `tasks` table includes the following columns:
 * - `id`: Serial primary key of type integer.
 * - `name`: Name of the task, a non-nullable string with a maximum length of 32.
 * - `description`: Optional task description with a maximum length of 255.
 * - `priority_level`: A decimal value representing the priority level of the task.
 * - `type`: Enumerated type indicating the status of the task, must be either 'completed' or 'pending'.
 * - `due_time`: A timestamp indicating the due time for the task.
 *
 * The function logs a success message upon successful creation of the database
 * and table. If an error occurs during the process, it logs an error message
 * and exits the process with a status code of 1.
 *
 * @async
 * @function createDataBase
 */
export const createDataBase = async () => {
    const connectionDb = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: username,
        password: password,
        synchronize: true,
        logging: true
    })
    try{
        await connectionDb.initialize();
        await connectionDb.query(`
            CREATE DATABASE bluetrees ;
        `);
        await connectionDb.query(`
            CREATE TABLE tasks(
                id SERIAL PRIMARY KEY,
                name VARCHAR(32) NOT NULL,
                description VARCHAR(255),
                priority_level DECIMAL(10, 2),
                type ENUM('completed', 'pending') NOT NULL,
                due_time TIMESTAMP
            );
        `)
        console.log("Database Created : OK");
    }catch (err){
        console.log("Error DB ",err);
        process.exit(1);
    }
}

/**
 * Initializes the application database connection using the specified parameters.
 * This asynchronous function connects to a PostgreSQL database using TypeORM's DataSource.
 * If the connection is successful, a confirmation message is logged to the console.
 * If the connection fails, an error message is logged and the process exits with a status code of 1.
 *
 * The database configuration includes:
 * - Database type: PostgreSQL
 * - Host: localhost
 * - Port: 5432
 * - Username: postgres
 * - Password: 123456
 * - Database name: postgres
 * - Entities: TypeORM will load entities from the `src/models/*.ts` path
 * - Synchronize: true, allowing automatic schema synchronization
 * - Logging: true, enabling query and error logging
 */
const startAppDataBase= async ()=> {
    const connection = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: username,
        password: password,
        database: database,
        entities: ['src/models/*.ts'],
        synchronize: true,
        logging: true,
    });
    try{
        await connection.initialize();
        console.log("Connected to database : OK ");

    }catch(err){
        console.log("Error DB ",err);
        process.exit(1);
    }

};

export default startAppDataBase;