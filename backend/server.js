const express = require('express');
const mongoose=require('mongoose')
const {router} = require('./routes/prompt')
const port=5001;
require('dotenv').config()

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(
        `method:${req.method} 
         url:${req.url}       
    `)
    next()
})

app.use('/api/prompt', router)

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT || port, () => {
      console.log(
        `db connected server listening at port ${process.env.PORT || port}`
      );
    })
  )
  .catch((err) => console.log(err));
