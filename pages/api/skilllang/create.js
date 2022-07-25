const  = require("../../../models/projectModel")
const connectDB = require("../../../utils/connectDB")
export default async (req,res)=>{
    await connectDB()
    const project = await Project.create(req.body)
    res.status(200).json({
        success:true,
        project
    })
}