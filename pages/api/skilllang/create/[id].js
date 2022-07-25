const Skill_Lang = require("../../../../models/skill_lang");
const connectDB = require("../../../../utils/connectDB");
export default async (req, res) => {
//   const updateData = {
//     skill: req.body.skill,
//     language: req.body.language,
//   };
    const {id} = req.qurey
  await connectDB();
  const skill_lang = await Skill_Lang.findById(id)

    skill_lang.skill = req.body.skill;
    skill_lang.language = req.body.language;
    await skill_lang.save()

//   findByIdAndUpdate(
//     req.params.id,
//     updateData,
//     {
//       new: true,
//       runValidators: true,
//       useFindAndModify: false,
//     }
//   );
  res.status(200).json({
    success: true,
    skill_lang,
  });
};
