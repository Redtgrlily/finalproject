const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({

    firstname:{
    type: String,
    required: true
    },
    lastname: {
    type: String,
    required: true
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    username:{
      type: String,
      required: true
      },
    password:{
      type: String,
      required: true
      }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", userSchema);

module.exports = User;
