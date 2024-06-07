export interface DatabaseConfig {
    host: string;
    port: number;
    name: string;
    user: string;
    password: string;
}

export default () => ({
    postgres: {
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        name: process.env.POSTGRES_NAME,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD
    },
    mongodb: {
        host: process.env.MONGODB_HOST,
        port: parseInt(process.env.MONGODB_PORT),
        name: process.env.MONGODB_NAME,
        user: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD
    }
});
