const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//to connect db
const {mongoose} = require('./database');
//config
const app = express();
const port = 3000;

app.set('port', process.env.port);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//origin from everywhere
app.use(cors({origin: '*'}));

//routes for collections
app.use('/api/tabladatos', require('./routes/collection.datos'));
app.use('/api/usuarios', require('./routes/collection.usuarios'));

//route for test only
app.get('/', (req, res) => res.send('It is working!'));
app.listen(port, () => console.log(`App listening on port ${port}!`));