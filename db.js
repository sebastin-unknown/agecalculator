const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'database-1.cfukwwgkciam.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: '',
  database: 'devops'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

module.exports = db;




