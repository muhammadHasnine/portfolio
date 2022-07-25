import { FunctionComponent } from "react"
import { Category } from "../type"



export const Navitem:FunctionComponent<{value:Category | "all";handleFilterCategory:Function;active:string}> = ({value,handleFilterCategory,active}) => {
    let className = "cursor-pointer hover:text-[rgb(57,234,110)] capitalize "
    if(active===value){
       className += "text-[#39ea6e]"
    }
  return (
    <li className={className} onClick={()=>handleFilterCategory(value)}>{value}</li>
  )
}




const Project_Navbar:FunctionComponent<{
    handleFilterCategory:Function;
    active:string
}> = (props) => {
  return (
    <div className="list-none flex  space-x-3 ">
        <Navitem value="all"{...props}/>
        <Navitem value="react"{...props}/>
        <Navitem value="mongo"{...props}/>
        <Navitem value="django"{...props}/>
        <Navitem value="express"{...props}/>
        <Navitem value="node"{...props}/>
    </div>
  )
}

export default Project_Navbar