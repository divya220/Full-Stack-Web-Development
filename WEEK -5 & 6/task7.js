dotenv.config({
    path: path.join(__dirname, '../config/.env.' + environment)
});
    // Access environment variables
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};
console.log('Database Configuration:', dbConfig);