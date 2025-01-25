import instagram from "../../../../public/images/instagram.png";
import twitter from "../../../../public/images/twitter.png";
import follow from "../../../../public/images/Follow us.png";
import line from "../../../../public/images/Rectangle 2.1.png"
import  downArrow from "../../../../public/images/arrow_downward_24px.png"
import slideBar from "../../../../public/images/Slider.png"
import numberText from "../../../../public/images/Text.png"
const TitleOfMnt = () => {
  return (
    <div className="tittle w-[100%] flex items-center justify-between">
      <div className="follow ">
        <div className="  flex flex-col justify-between items-center h-[100px] md:h-[170px]   ">
          <span>
            <a href="#"><img src={follow} alt="" /></a>
          </span>{" "}
          <a href="#">
          <img src={instagram} alt="follow" /> 
          </a>
          <a href="#"><img src={twitter} alt="" /></a>
        </div>
      </div>
      <div className="heaing ml-[50px]  md:ml-[90px] w-[730px]  ">
        <div className="sub-heading h-[30px]  flex  items-center">
           <div> <img src={line} className="w-[30px] md:w-[50px]" alt="" /></div>
           <span className="uppercase text-[#FBD784] font-[ClashDisplay-Medium] ml-3 " >A Hiking guide</span>
        </div>
        <div className="main-heading md:text-[30px] lg:text-[60px]  tracking-[2px] font-[chronical-display] text-white ">
            <h1>
            Be Prepared For The Mountains And Beyond!
            </h1>
        </div>
        <div className="scroll-down flex w-[120px] justify-between text-white font-[ClashDisplay-Medium] ">
            <span>scroll Down </span> <a href="#"><img src={downArrow} alt=""/></a>
        </div>
      </div>
      <div className="scrollBar flex h-[100px] md:h-[170px] w-[50px]  justify-between ">
        <img src={numberText} alt=" number" />
        <img src={slideBar} alt=" slide bar" />
      </div>
    </div>
  );
};
export default TitleOfMnt;
