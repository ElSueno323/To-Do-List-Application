import {DataSource} from "typeorm";
import InitService from "./services/init.services";

export var services: InitService;

const password ="123456";
const username = "postgres";
const database= "bluetrees";

/**
 * Initializes the database by checking its existence, creating it if it does not exist,
 * and setting up the necessary tables and types.
 */
export const initializeDataBase = async () => {
    const connectionDb = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: username,
        password: password,
        entities: ["src/models/*.ts"],
        synchronize: true,
        logging: true
    })
    try{
        await connectionDb.initialize();
        const result = await connectionDb
            .query("SELECT 1 FROM pg_database WHERE datname = 'bluetrees'");

        if (result.length === 0) {
            await connectionDb.query(`CREATE DATABASE bluetrees;`);
            console.log("Database 'bluetrees' created successfully.");

            await connectionDb.query(`
                CREATE TYPE task_status AS ENUM ('completed', 'pending');
                CREATE TABLE task (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(32) NOT NULL,
                    description VARCHAR(255),
                    priority_level DECIMAL(10, 2),
                    status task_status NOT NULL,
                    due_time TIMESTAMP
                );
            `);
            console.log("Table 'task' created successfully.");
        } else {
            console.log("Database 'bluetrees' already exists.");
        }
        console.log("Database : OK");

        await startDataBase();
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
const startDataBase= async ()=> {
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

        services = new InitService(connection);
        console.log("Initialize Service == DB : OK ");

    }catch(err){
        console.log("Error DB : ",err);
        process.exit(1);
    }

};
