const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();



app.get('/home', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 3000`);
});

