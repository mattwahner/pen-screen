import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send("Hello World!");
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(8080, () => console.log('Running on localhost:8080'));