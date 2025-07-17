const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const postRoutes = require('./routes/postRoutes')
require('dotenv').config();

const PORT = 7000;


const app = express();
app.use(cors());
app.use(express.json());

app.use('/',postRoutes);

app.listen(PORT, () => {
    console.log(`🚀Server running http://localhost:${PORT}`);
    
});
