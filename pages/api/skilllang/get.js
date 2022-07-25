const Skill_Lang = require("../../../models/skill_lang")
const connectDB = require("../../../utils/connectDB")
export default async (req,res)=>{
    await connectDB()
    const skill_lang = await Skill_Lang.find()
    res.status(200).json({
        success:true,
        skill_lang
    })
}