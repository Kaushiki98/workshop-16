const express = require('express');
const dbConfig =  {
  url: 'mongodb://localhost:27017/easy-notes'
}
const app = express();

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(require('./routes'));

app.get('/', (req, res) => {
    res.json({"message": "Welcome"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});