/* eslint-disable react/jsx-key */
import logo from "../../../public/images/Logo (1).png"
import user from "../../../public/images/cart.png"
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar=()=>{
const navbarOption=["Equipment","About us","Blog"]

    return(
        <header>
            <nav className="flex justify-between  items-center  h-[50px]  font-[ClashDisplay-Medium] text-white ">
                <div className="logo  flex justify-between md:justify-normal items-center  w-[140px]   ">
                  <div> <RxHamburgerMenu className=" md:hidden text-[20px] " /></div> <img src={logo} alt=" logo" /></div>
                <div className="navlink">
                    <ul className="flex  max-w-[300px]  justify-between ">
                        {navbarOption.map((option)=>(
                            <li className="p-4 hidden md:block " >{option}</li>
                        ))}
                    </ul>
                </div>
                <div className="Acount flex">
                    <span><img src={user} alt="user" className="mr-2" /></span> <span>Acount</span>
                </div>
            </nav>
        </header>
    )
}
export default Navbar