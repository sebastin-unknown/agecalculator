const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const db = require('./db');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));




app.get('/', (req, res) => {
  res.render('index');
});



app.post('/calculate-age', (req, res) => {
  console.log("before")  
  const data = {
    year : req.body.birthYear ,
    month : req.body.birthMonth ,
    Date : req.body.birthDay,
    input : req.body.date1

  }
  console.log(data.input)

  db.query(`INSERT INTO dateofbirth (YEAR, MONTH ,DATE ,INPUT) VALUES (${data.year}, ${data.month}, ${data.Date}, ${data.input});`, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    res.send(`User created successfully!`);
  });
  

  res.render('result', {data});
});


app.listen(3020, () => {
  console.log('Server started on port 3020');
});