import mongoose from "mongoose";

const userFormSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    
  },
  { collection: "userForm" }
);

const userFormModel  = mongoose.model('userFormModel', userFormSchema);
export default userFormModel;






