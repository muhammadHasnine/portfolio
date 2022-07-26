import {AiFillGithub} from "react-icons/ai"
import {SiTelegram} from "react-icons/si"
import {FaFacebook} from "react-icons/fa"
import {GiTie} from "react-icons/gi"
import {GoLocation} from "react-icons/go"
import {useTheme} from "next-themes"
import Image from "next/image"
import { useState } from "react"
const Sidebar = () => {
  const {theme,setTheme} = useTheme()
  const [toggle, settoggle] = useState(true)
  const changeTheme = () =>{
    setTheme(theme === "light" ? "dark" : "light")
    settoggle(!toggle)
  }
   return (
    <div>
        <Image className="w-32 h-32 mx-auto border rounded-full" src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.6435-9/42854483_420188615051858_5493392883891306496_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Qpwe76E9kDYAX9wbbNB&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT-vXB7cRsPYg5y35-NW_-aYlUS0Ns0uMc5F3PrbdzcIeQ&oe=62F40FF2" alt="user avater" width='128' height='128' layout="intrinsic" quality='100'/>
        <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan overflow-x"><span className="text-green">Muhammad </span>Hasnine</h3>
        <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-black-200 rounded-full">Web Developer</p>
         <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-black-200 rounded-full" href="/assets/resume.pdf" download="resume.pdf"  ><GiTie className="w-6 h-6"/> <span>Download Resume</span>
         </a>
        {/* Social icons */}
       <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
       <a href="https://www.facebook.com/HabinZu/" aria-label="Facebook"><FaFacebook className="h-8 cursor-pointer w-7"/></a>
        <a href="https://t.me/hasninesheak" aria-label="Telegram"><SiTelegram className="h-8 cursor-pointer w-7"/></a>
        <a href="https://github.com/muhammadHasnine" aria-label="Github"><AiFillGithub className="w-8 h-8 cursor-pointer"/></a>
       </div>

        {/* Contacts  */}
        <div className="py-4 my-5 bg-gray-200 dark:bg-black-200 overflow-auto" style={{marginLeft:"-1rem",marginRight:"-1rem"}}>
            <div className="flex items-center justify-center ">
                <GoLocation className="mr-2"/>
            <span>Khulna,Bangladesh</span>
            </div>
            <p className="my-2">mdhasninesheak@gmail.com</p>
            <p className="my-2">+8801819038885</p>
        </div>
        <button className="w-8/12 text-white px-5 py-2 rounded-full bg-gradient-to-r from-green to-blue-500 " onClick={()=>window.open('mailto:mdhasninesheak@gmail.com')}>Email me</button>
        <button className="w-8/12 text-white px-5 py-2 my-4 rounded-full bg-gradient-to-r from-green to-blue-500 " onClick={changeTheme}>{toggle ? "Light UI":"Dark UI"}</button>

    </div>
  )
}

export default Sidebar