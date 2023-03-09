import { FunctionComponent, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"


const NavItem:FunctionComponent<{setactiveItem:Function,activeItem:string,route:string,name:string}> = ({setactiveItem,activeItem,route,name})=>{
 
  return activeItem !== name ? (
    <Link href={route}>
      <a>
          <span className="mx-2 cursor-pointer hover:border-b-4 hover:text-green" onClick={()=>setactiveItem(name)}>{name}</span>
        </a>
    </Link>
  ):null    
}





const Navbar = () => {
  const {pathname} = useRouter()
  const [activeItem, setactiveItem] = useState('')
  useEffect( () =>{
    if(pathname === "/"){
      setactiveItem("About")
    }
    if(pathname === "/resume"){
      setactiveItem("Resume")
    }
    if(pathname === "/project"){
      setactiveItem("Project")
    }
  },[])
  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-green">{activeItem}</span>
      <div className="text-base font-normal md:text-xl">
      
      <NavItem  setactiveItem={setactiveItem} activeItem={activeItem} route="/" name="About"/>
      <NavItem  setactiveItem={setactiveItem} activeItem={activeItem} route="/resume" name="Resume"/>
      <NavItem  setactiveItem={setactiveItem} activeItem={activeItem} route="/project" name="Project"/>
      
      
      
      </div>
    </div>
  )
}

export default Navbar