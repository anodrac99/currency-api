//import express app
const { app } = require('./app')

//import db
const { db } = require('./utils/dataBase.util')

//authenticate in DB
db.authenticate()
    .then(() => console.log("DB authenticated"))
    .catch(error => console.log(error))


//sync DB
db.sync()
    .then(() => console.log("DB synced"))
    .catch(error => console.log(error))

app.listen(3000, () => {
    console.log('express app running');
})