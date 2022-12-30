
const express = require('express');
const userRouter = require('./routers/userRouter');
const subsRouter = require('./routers/subsRouter');
const utilRouter = require('./routers/utilRouter');
const cors = require('cors');

const app = express();

const port = 5000;

app.use(cors({origin : ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5500']}));
app.use(express.json());
app.use('/user', userRouter);
app.use('/subs', subsRouter);
app.use('/util', utilRouter);
app.use(express.static('./static/resources'));

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/home', (req, res) => {
    res.send('response from home');
});

app.get('/add', (req, res) => {
    res.send('response from add')
});

app.get('/update', (req, res) => {
    res.send('response from update')
});



app.listen(port, () => {console.log('server started')})