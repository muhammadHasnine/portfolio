const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({

    name:{
        type:String,
        require:[true,"Please enter project name"]
    },
    description:{
        type:String,
        require:[true,"Please enter project description"]
    },
    image_path:{
        type:String,
        require:[true,"Please enter project image_path"]
    },
    deployed_url:{
        type:String,
        require:[true,"Please enter project deployed_url"]
    },
    github_url:{
        type:String,
        require:[true,"Please enter project github_url"]
    },
    category:[
        {
        type:String,
        require:true
        }
    ],
    key_techs:[
        {
        type:String,
        require:true
        }
    ]
})

const Project = mongoose.models.Project || mongoose.model("Project",projectSchema)

module.exports = Project
