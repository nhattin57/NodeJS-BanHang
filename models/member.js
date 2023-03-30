import mongoose from "mongoose"
const memberSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
  
  // Create a mongoose model for the members collection
  const Member = mongoose.model("members", memberSchema);
  
  // Export the member model for use in other parts of the application
  //module.exports = Member;
  export default Member;