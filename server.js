/* 
    Keri Russin
    Web Development B.S.
    WDV353 | Server-Side Languages | C202204
*/

const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res, next) => {
    res.json({
        message: 'Using - GET',
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        },
    });
});

app.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        message: 'Using - GET',
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id,
        },
    });
});

// post, patch, delete
app.post('/', (req, res, next) => {
    res.json({
        message: 'Using - POST',
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        },
    });
});

app.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        message: 'Using - PATCH',
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id,
        },
    });
});

app.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        message: 'Using - DELETE',
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id,
        },
    });
});


// middleware modules for error handling
// * * use this in all of your server.js files
app.use((req, res, next) => {
    const error = new Error('NOT FOUND!!!');
    error.status = 404;
    next(error);
    });    
    
    // middleware to send error nicely
    app.use((error, req, res, next) => {
        res.status(error.status || 500).json({
            error: {
                message: error.message, 
                status: error.status,
                method: req.method
            }
        });
    })


app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))