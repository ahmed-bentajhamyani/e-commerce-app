import { useNavigate } from "react-router-dom"

function Logo(){

  const navigate = useNavigate();
    return (
        <div onClick={()=>{navigate("/")}} className="h-24 flex items-center justify-center cursor-pointer">
          <img className="h-9" src="/logo.png">
            </img>
        </div>
    )
    
    }
    
    export default Logo