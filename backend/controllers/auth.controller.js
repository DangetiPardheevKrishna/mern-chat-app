import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "passwords dont match" });
    }

    const user = await User.findOne({ username });
    console.log(user);
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //Hashpassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    console.log(req.body);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    console.log(newUser);

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        // password: newUser.password,
        // confirmPassword: newUser.confirmPassword,
        profilePic: newUser.profilePic,
      });
      console.log(res.body);
    } else {
      res.status(400).json({ error: "user details are wrong" });
    }
  } catch (error) {
    console.log("Error in signup", error.message);
    res.status(500).json({ error: `Internal Server Error ${error}` });
  }
};

export const login = async (req, res) => {
  console.log("login user");
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password || ""
    );
    console.log(user._id);
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.send({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ error: `invalid response ${error}` });
  }
};

export const logout = async (req, res) => {
  console.log("logout user");
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ success: "logged out succesfully" });
  } catch (error) {
    console.log("error in logout controller", error.message);
    res.status(500).json({ error: `invalid response ${error}` });
  }
};
