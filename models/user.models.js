const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters in length"],
    },
  });
  
  userSchema.pre("save", async function () {
    const user = this;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    this.password = hashedPassword;
  });
  
  const User = mongoose.model("User", userSchema);
  module.exports = { User };
  