const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/node-example',{useUnifiedTopology:true,useNewUrlParser:true})
.then(result => {console.log('db connection')})
.catch(err => {console.log('db not connection' + err)})
