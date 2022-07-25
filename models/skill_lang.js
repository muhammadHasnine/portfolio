const mongoose = require("mongoose");

const skillLanguageSchema = new mongoose.Schema({
  tools:[
    {
        name:{
            type:String,
            required:true
        },
        level:{
            type:String,
            required:true
        }
    }
],
language:[
  {
      name:{
          type:String,
          required:true
      },
      level:{
          type:String,
          required:true
      }
  }
],
});
const Skill_LangData = mongoose.models.Skill_LangData || mongoose.model("Skill_LangData",skillLanguageSchema)

module.exports = Skill_LangData