import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required for creating a user !"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
        "Invalid Email address.",
      ],
      unique: [true, "Email already exits"],
    },
    name: {
      type: String,
      required: [true, "Name is required for creating a new account "],
    },
    password: {
      type: String,
      required: [true, "Password is required for creating a new account "],
      minlenght: [6, "Password should be content more than 6 charecter"],
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

//password hasse
//ye password ko hase kar dega usser ka real password dalne per

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();

    
  }
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  return next();
});

userSchema.method.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("user", userSchema);
export default userModel;
