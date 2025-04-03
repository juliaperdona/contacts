import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});



console.log('HOST:', process.env.DB_HOST);
console.log('USER:', process.env.DB_USER);
console.log('DB_PASSWORD Existe?:', process.env.DB_PASSWORD ? 'SIM' : 'NÃO');
console.log('DATABASE:', process.env.DB_NAME);
console.log('PORT:', process.env.DB_PORT);

export default pool;
