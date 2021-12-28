const express = require("express");

class CommentRouter{
    constructor(CommentService){
        this.CommentService = CommentService;
    }
    router() {
        let router = express.Router();
        // bind the different methods (if not using arrow function, should bind the method to the class)
        // e.g., router.get("/", this.get.bind(this));
        router.get("/", this.get.bind(this));
        router.post("/", this.post.bind(this));
        router.put("/:id", this.put.bind(this));
        router.delete("/:id", this.delete.bind(this));
        return router;
      }
    post(req, res) {
        console.log("CommentRouter: POST Method");
        console.log("Comment: " + req.body.note);
        console.log("User: " + req.auth.user);
        return this.CommentService
            // call the add method here
            .add(req.body.note, req.authuser)
            .then(() => {
              // list the notes of the user
             this.CommentService.list(user)
             .then((notes) => {
              // make the notes into json format
              let jcomments = JSON.stringify(this.comments)
              res.send(jcomments)
            })
            .catch((err) => {res.status(500).json(err);
            });
          });
      }
    put(req, res) {
        let id = req.params.id;
        let comment = req.body.comment;
        let account = req.auth.user;
        //return this.noteService;
        return this.CommentService
            // The noteService fires the update command, this will update our note (and our JSON file)
            .update(id, comment, account)
            // Then we fire list note from the same noteService which returns the array of notes for that user.
            .then(() => this.CommentService.list(account))
            // Then we respond to the request with all of our notes in the JSON format back to our clients browser.
            .then((comments)=> res.json(comments))
            // Catch error if need be
            .catch((err) => res.status(500).json(err));
      }
      delete(req, res) {
        return this.CommentService
            // first remove the note
            .remove(req.params.id, req.auth.user)
            // list it out
            .then(this.CommentService.list(req.auth.user))
            // format it into json
            .then((comments) => res.json(comments))
            .catch((err) => res.status(500).json(err))
      }
}

module.exports = CommentRouter;