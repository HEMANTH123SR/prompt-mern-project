const express = require("express");

// all the functions comming from controller prompt file 
const {
  getAllThePrompts,
  getPromtsBYId,
  postPromts,
  updateThePrompts,
  deleteThePrompts,
} = require("../controller/prompt");


const router =express.Router();

// get all
router.get("/",getAllThePrompts);

//get single by id
router.get("/:id",getPromtsBYId);

//post
router.post("/",postPromts);

//update by id
router.patch("/:id",updateThePrompts);

//delete by id
router.delete("/:id",deleteThePrompts);

module.exports={
    router
}
