const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT } = require('./config.js');
const router = require('./routes/joyasRoutes.js');


const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
    return res.status(500).json({
        status: "error",
        message: err.message + "Ups..algo ocurrio :(",
    });
});

app.listen(PORT, () => {
    console.log(`Estamos Readyyyyy jejeje J.L. http://localhost:${PORT} `);
});