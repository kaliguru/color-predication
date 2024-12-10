const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '217.21.94.204',
    user: 'u826595499_damal',
    password: 'Nn@5480rock',
    database: 'u826595499_damal'
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;