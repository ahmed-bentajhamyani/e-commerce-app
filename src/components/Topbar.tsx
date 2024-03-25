import { getCurrentUser, signOut } from "@/services/authService"
import { PersonIcon } from "@radix-ui/react-icons"
import { Link, useNavigate } from "react-router-dom"

function Topbar() {
    const navigate = useNavigate()
    return (
        <div className="top-bar w-full bg-black h-11 text-white text-right text-sm font-semibold flex justify-end pr-12 ">
            <div className=" h-full  w-40 text-center pt-3 uppercase"
            >
                {
                    getCurrentUser() ?
                        <span className="flex justify-between">
                            <PersonIcon />
                            <p>
                                {getCurrentUser()!.displayName}
                            </p>
                            <div className="cursor-pointer" onClick={() => { signOut(); navigate(0) }}>Sign Out</div>
                        </span>
                        : <Link to={"/login"}>Login</Link>
                }
            </div>
        </div>
    )

}

export default Topbar