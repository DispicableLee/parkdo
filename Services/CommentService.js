const fs = require("fs");
const {default: knex} = require("knex");
const knexConfig = require("./knexfile").development;
class CommentService {
    constructor(knex){
        this.knex = knex;
    }
    //list out ratings from users
    list(account){
        return this.knex.select("*").from("account")
        .innerJoin("comments", "account.id", "comments.account.id")
        .where("account.username", account)
    }
    //add rating from users
    add(comment, account){
        return this.knex.select("*").from("account")
        .where("username", account)
        .then((data)=>
        this.knex.insert({comment_content: comment})
        .into("comments")
        .where("User_id", data[0].id)
        )
    }
    //update comment from user
    update(index, comment, account){
        return this.knex.select("*").from("account")
        .where("username", account)
        .then((data)=>{
            let newc = data[0].comment_content;
            newc[index] = comment;
            return this.knex.update("comment_content", newc)
            .where("account_id", data[0].id)
        })
    }
    //remove rating from user
    remove(index, account){
        return this.knex.select("*").from("account")
        .where("username", account)
        .then((data)=>{
            this.knex.delete("")
            .from("comments")
            .where("comment.id", id)
            .andwhere("account_id", data[0].id);
        })
    }
}

module.exports = CommentService;