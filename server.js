const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Mongoose Connection
mongoose.connect(
    'mongodb://localhost:27017/TestSession',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to MongoDB...');
        }
    }
);

app.use(
    session({
        secret: process.env.SESSION_SECRET || 'test_secret',
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);

app.use(routes);

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
});
