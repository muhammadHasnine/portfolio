const Project = require("../../../models/projectModel")
const connectDB = require("../../../utils/connectDB")
export default async (req,res)=>{
    await connectDB()
    const project = await Project.find()
    res.status(200).json({
        success:true,
        project
    })
}