const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const signInRoutes=require('./routes/signin');
const playerRoutes=require('./routes/PlayerDetails');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
var cors = require('cors')
const app = express();
app.use(cors());
dotenv.config();

const passportSetup = require('./config/passport-setup');
const passport = require('passport');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB'));

const port = process.env.PORT || 4500;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use('/api/User',signInRoutes);
app.use('/api/Player',playerRoutes);
app.use('/api/Auth', require('./routes/auth-routes'));
app.listen(port, () => console.log('running'));