const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:admin@cluster0.oggpp.mongodb.net/pulseraXD';

//options for queries
mongoose.set('strictQuery', false);
//make connection
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(db => console.log('MongoDB Connected'))
.catch(err => console.log(err));

//export for global use
module.exports = mongoose;
