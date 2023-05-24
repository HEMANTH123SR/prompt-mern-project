const mongoose=require('mongoose')
const promptDB=require('../model/prompt')


 const getAllThePrompts=async(req,res)=>{
    try{
 const prompts=await promptDB.find().sort({createdAt:-1})
res.status(200).json(
    {
status:"success",
data:prompts
    }
)
    }catch( err ){
        res.status(400).json({
            status:"unsuccess",
            err
        })
    }
}

 const getPromtsBYId=async(req,res)=>{
    try{
    const {id}=req.params;
    console.log(id)
if(mongoose.Types.ObjectId.isValid(id)){
    const prompt=await promptDB.findById(id)
    res.status(200).json({
        status:"success",
        data:prompt
    })
   
}
else{
    res.status(400).json({
        status:"unsuccess",
        data:"sorry something went wrong"
    })
}
    }catch( err ){
        res.status(400).json({
            status:"unsuccess",
            data:err
        })
    }
}

 const postPromts=async(req,res)=>{
try{
    const { name, title, prompt, rating, additionalUrl 
    
    } = req.body;
const createPrompt=await promptDB.create(
    {
name,
title,
prompt,
rating,
additionalUrl
    }
)
res.status(201).json({
    status:"success",
    data:createPrompt
})
}catch(err){
       res.status(400).json({
         status: "unsuccess",
         data: err,
       }); 
}
}

 const deleteThePrompt = async (req, res) => {
   try {
     const { id } = req.params;
     if (!mongoose.Types.ObjectId.isValid(id)) {
      return  res.status(404).json({
        status:"success",
      data: "no such workout",
    });
     }

const prompt=await promptDB.findByIdAndDelete({_id:id})

if(!prompt){
    res.status(400).json(
        {
            status:"unsccess",
            data:"there is no such data"
        }
    )
}
res.status(204);
   } catch (err) {
        res.status(400).json({
          status: "unsccess",
          data: err,
        });
   }
 };

 const updateThePrompts = async(req, res) => {
try{
const {id}=req.params;
 const { name, title, prompt, rating, additionalUrl } = req.body;

if(!mongoose.Types.ObjectId.isValid(id)){
       res.status(400).json({
         status: "unsccess",
         data: "there is no such data",
       });
}
const updatePrompt = await promptDB.findByIdAndUpdate(
  { _id: id },
  { name, title, prompt, rating, additionalUrl }
);
if(!updatePrompt){
   
      res.status(400).json({
        status: "unsccess",
        data: "there is no such data",
      });
    
}else{
    res.status(200).json({
        status:"success",
        data:updatePrompt
    })
}
}catch(err){
   res.status(400).json({
     status: "unsccess",
     data: err,
   });
}
 };


module.exports={
    getAllThePrompts,
    getPromtsBYId,
    postPromts,
    updateThePrompts,
    deleteThePrompt
}