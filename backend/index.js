const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3333;

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(require('./routes'));

app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});