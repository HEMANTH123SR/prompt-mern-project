const express=require('express');

const port=5000;

const app=express();

app.use(express.json())

app.get('/',(req,res)=>{
res.status(200).json({
    status:"suucces"
})
})

app.post('/',(req,res)=>{
res.status(200).json({
  status: "suucces",
});
})

app.get('/:id',(req,res)=>{
res.status(200).json({
  status: "suucces",
});
})

app.patch('/:id',(req,res)=>{
res.status(200).json({
  status: "suucces",
});
})

app.delete('/:id',(req,res)=>{
res.status(200).json({
  status: "suucces",
});
})


app.listen(port,()=>{
    console.log("server started listening reuest at port 5000")
})