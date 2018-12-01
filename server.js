let express = require('express');
let cors = require('cors');
let cookie =  require('cookie-parser');
let bodyParser = require('body-parser');

const app = express();

app.use('/', express.static('app'));

app.use(bodyParser.json());
app.use(cookie());

app.use(cors({
    origin: true,
    credentials: true
}));

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({body: req.body});
});

const port = process.env.PORT || 8002;

app.listen(port, () => {
    console.log(`App start on port ${port}`);
});
