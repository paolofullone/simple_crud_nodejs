const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'SuperTryunfo'
});

app.get('/', (_req, res) => {
    res.send('Hi There again!');
})

app.post('/create', (req, res) => {
    const { name, attr1, attr2, attr3 } = req.body;
    console.log(name, attr1, attr2, attr3);
    const sql = 'INSERT INTO characters (name, attr1, attr2, attr3) VALUES (?, ?, ?, ?)';
    const params = [name, attr1, attr2, attr3];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log(results);
            res.send(results);
        }
    });
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});