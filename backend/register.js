import express from "express";
import mongoose from "mongoose";
import userFormModel from "./models/userForm.js";
import cors from "cors"

const app = express();
app.use(express.json());
 app.use(cors())
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const mongoConnectionURL =
  "mongodb+srv://mohamedyac4853:q7IzsC0RGgvc1JGs@cluster0.somipau.mongodb.net/yachiproject?retryWrites=true&w=majority/";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
  
};
mongoose.connect(mongoConnectionURL).then(() => {
  console.log("db connected");
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});

app.post("/add", (req, res) => {
  console.log(req.body);
  const { name, phone, email, message } = req.body;
  console.log("Received data:", { name, email ,phone,message});
  const newUser =new  userFormModel({
    name : name,
    phone : phone,
    email : email,
    message :message

  })
  newUser.save()
  .then(savedData => {
    console.log("Data saved successfully. Document ID:", savedData._id);
  })
  .catch(err => {
    console.error("Error saving data:", err);
  });
  
  res.sendStatus(200).json({msg:"success"});
});

  
