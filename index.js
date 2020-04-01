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

mongoose.connect(process.env.DC_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB'))

// app.get('/', (req, res) => {
//     res.send("we are home")
// });
const port = process.env.PORT || 5000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use('/api/User',signInRoutes);
app.use('/api/Player',playerRoutes);
app.listen(port, () => console.log('running'));