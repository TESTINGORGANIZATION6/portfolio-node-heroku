const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const signInRoutes = require('./routes/signin');
const playerRoutes = require('./routes/PlayerDetails');
const logRoutes = require('./routes/logs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const log = require('./Log/logConfig');
const cors = require('cors')
const app = express();
app.use(cors());
dotenv.config();

const passportSetup = require('./config/passport-setup');
const passport = require('passport');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('portfolio DB connected'));

const port = process.env.PORT || 4500;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));

app.use('/api/log', logRoutes);
app.use('/api/User', signInRoutes);
app.use('/api/Player', playerRoutes);
app.use('/api/Auth', require('./routes/auth-routes'));
app.listen(port, () => console.log('running'));