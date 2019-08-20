const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

let sequelize = require('./models').sequelize;
let Customer = require('./models').Customer;

const app = express();
sequelize.sync();

app.use('/image', express.static('./upload'));

const port = process.env.PORT || 5000;

const data = fs.readFileSync('./config/config.json');
const conf = JSON.parse(data);

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: conf.development.host,
  user: conf.development.username,
  password: conf.development.password,
  port: conf.development.port,
  database: conf.development.database,
});
connection.connect();

const multer = require('multer');
const upload = multer({ dest: './upload' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  connection.query(
    "SELECT * FROM customers WHERE deletedAt IS NULL",
    (err, rows, fields) => {
      if (err) console.log(err);
      res.send(rows);
    }
  );
});

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO customers VALUES (null, ?, ?, ?, ?, ?, ?, ?, null)';
  let image = '/image/' + req.file.filename;
  let userName = req.body.userName;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let createdAt = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  let updatedAt = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  let params = [image, userName, birthday, gender, job, createdAt, updatedAt];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.delete('/api/customers/:id', (req, res) => {
  let sql = 'UPDATE customers SET deletedAt = ? WHERE id = ?';
  const deletedAt = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  const id = req.params.id;
  let params = [deletedAt, id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
