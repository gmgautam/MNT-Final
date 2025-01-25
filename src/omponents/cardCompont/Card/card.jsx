/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import leftImage from "../.../../../../../public/images/01.png";
import Line from "../../../../public/images/Rectangle 2.1.png";
import RightArrow from "../../../../public/images/right-arrow.png";
const Card = ({ data }) => {
  console.log(data);
  const { subtittle, para, image, tittle, cardClass, imageNo } = data;
  return (
    <div className={`flex ${cardClass} flex-wrap justify-center xl:flex-nowrap xl:justify-normal  `}>
      <div className="tittle flex justify-center items-center xl:w-[60%] xl:p-[80px] h-[590px]  ">
        {/* here we go */}
        <div className="heaing relative xl:left-[60px] top-[-10px] h-[360px] flex flex-col justify-between flex-end  ">
          <div className="numbers absolute xl:left-[-95px] top-[-40px] w-[150px] lg:w-[175px]  ">
            <img
              src={imageNo}
              className="w-[100%] h-[100%] object-cover  "
              alt=""
            />
          </div>
          <div className="sub-heading    flex  items-center">
            <div>
              {" "}
              <img src={Line} className="w-[50px]" alt="" />
            </div>
            <span className="uppercase text-[#FBD784] font-[ClashDisplay-Medium] tracking-[3px]   md:ml-4 ">
              {subtittle}
            </span>
          </div>
          <div className="main-heading text-[30px] md:text-[60px]   font-[600] lg:leading-[60px] font-[chronical-display] text-white ">
            <h1>{tittle}</h1>
          </div>
          <div className="paraGraph text-[14px] lg:text-[18px] break-words text-justify xl:pt-[15px] text-white font-[ClashDisplay-Medium] ">
            <p>{para}</p>
          </div>
          <div className="scroll-down xl:pt-[15px] flex w-[120px] items-center mt-[20px] md:mt-[1px] text-[#FBD784] justify-between font-[ClashDisplay-Medium] ">
            <span>read more </span>{" "}
            <a href="#">
              <img src={RightArrow} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* the end */}
      <div
        className={`${
          cardClass
            ? "flex xl:flex-start w-[100%] xl:w-[50%]  xl:h-[540px] bg-blue-80 "
            : "image bg-blue-70 w-[100%] xl:h-[540px] xl:w-[50%] flex xl:justify-end"
        }`}
      >
        <img
          src={image}
          className={` w-[100%]  xl:w-[75%]   xl:h-[550px] object-cover `}
          alt=""
        />
      </div>
    </div>
  );
};
export default Card;

