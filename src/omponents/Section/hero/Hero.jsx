import Navbar from "../../Navbar/navbar"
import TitleOfMnt from "../Tittle/Tittle"
import bgImage from "../../../../public/images/BG Hero.png"
import "./hero.css"
const HeroSection=()=>{
    return(
        <div className="hero-Bg  lg:h-[1200px] xl:h-[1500px] 2xl:h-[1600px] ">
          <img src={bgImage} alt="" className="absolute h-[100%] w-[100%] object-cover  " />
          <div className=" navBar px-[20px] md:px-[100px] relative pt-7">
            <Navbar/>
          </div>
          <div className="Headding relative top-[30px]  flex justify-center items-center  md:h-[500px]  px-[20px] md:px-[100px] ">
            <TitleOfMnt/>
          </div>
        </div>
    )
}
export default HeroSection