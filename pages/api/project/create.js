const Skill_Lang = require("../../../models/skill_lang");
const connectDB = require("../../../utils/connectDB")
export default async (req,res)=>{
    // await connectDB()
    // const project = await Skill_Lang.create(req.body)
    res.status(200).json({
        success:true,
        // project
    })
}