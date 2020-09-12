const express = require("express");
const charactersModel = require("../helpers/charactersModel");

const router = express.Router();

router.get("/", (req, res) => {
  charactersModel
    .get(req.id)
    .then((e) => {
      res.status(200).json(e);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving characters" });
    });
});
router.get("/:id", (req, res) => {
  charactersModel
    .get(req.params.id)
    .then((e) => {
      res.status(200).json(e);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving characters" });
    });
});
router.post("/", (req, res) => {
  const characterInfo = req.body;
  charactersModel
    .insert(characterInfo)
    .then((character) => {
      res
        .status(201)
        .json([{ message: "A new character was created!" }, character]);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error, error: "There was an error creating a new character" });
    });
});
router.put("/:id", (req, res) => {
  const characterInfoChanges = req.body;
  const { id } = req.params;
  charactersModel
    .update(id, characterInfoChanges)
    .then((character) => {
      if (character) {
        res
          .status(200)
          .json([{ message: "The character has been updated" }, character]);
      } else {
        res.status(404).json({ message: "The character could not be found" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "There was an error updating the character" });
    });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  charactersModel.remove(id).then((character) => {
    if (character > 0) {
      res
        .status(200)
        .json([{ message: "Character has been deleted" }, character]);
    }
  });
});
module.exports = router;
