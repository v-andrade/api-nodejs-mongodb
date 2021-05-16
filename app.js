const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const port = process.env.PORT || 3000;


// Middlewares -> este middleware é essemcial para auth da api, e passa tudo por aqui antes de passar para pelo routes
app.use(express.json());//body-parser

// inport Routers
const usersRoute = require('./routers/users');
const clientRoute = require('./routers/clients');

app.use('/users', usersRoute);
app.use('/client', clientRoute);



// app.use('/posts', () => {
//     console.log("This is a middleware running");
// })


// ROUTES
app.get('/', (req, res) => {
    res.send("we are on home");
})

// connec to DB
const DB_CONNECTION_URI = process.env.DB_CONNECTION_URI;
mongoose.connect(DB_CONNECTION_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, () => {
        console.log("MongoDB database connection established successfully");
    }
);




// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});