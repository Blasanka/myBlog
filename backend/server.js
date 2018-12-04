const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send('working') });

app.listen(process.env.PORT, ()=> {
    console.log(`app is running on port ${process.env.PORT}`);
});