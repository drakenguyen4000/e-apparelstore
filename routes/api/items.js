const express = require("express"),
  router = express.Router();

//Item Model
const Item = require("../../models/Item");

//Get Route
router.get("/", (req, res) => {
  Item.find()
    //-1 is sort by descending
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

//@route  POST api/items
//@desc   Create an Item
//@access Public
router.post("/", (req, res) => {
  //create new item object (to memory)
  const newItem = new Item({
    name: req.body.name,
  });
  //save new item to database
  //then take item, turn into json object and send back as response to frontend action (itemActions.js)
  newItem.save().then((item) => res.json(item));
});

//@route  DELETE api/items/:id
//@desc   Create an Item
//@access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    //then pass in the document as item parameter inside callback to remove the item/document
    //then use callback to respond by returning json object success true
    .then((item) => item.remove().then(() => res.json({ success: true })))
    //catch error by responding with status 404 and return json object success false
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
