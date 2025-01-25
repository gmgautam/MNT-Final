/* eslint-disable react/no-unknown-property */
import logo from "../../public/images/Logo (1).png";
import "./footer.css";
const Footer = () => {
  return (
    <footer >
      <div className="footer-container mt-[-100px] h-[600px] md:h-[350px]  lg:pb-[40px]   flex flex-col lg:flex-row  lg:justify-between lg:items-end ">
        {/* logo start */}
        <div class=" flex flex-col xl:ml-[30px] justify-around text-center lg:text-start lg:text items-center lg:items-start lg:justify-between h-[180px] lg:h-[200px] lg:w-[50%]  ">
          <div className="md:w-5/5 lg:w-[300px]">
            <div class="flex justify-center lg:justify-normal mb-1 ">
              <img src={logo} alt="Logo" />
            </div>
            <p className="text-white  font-[ClashDisplay-Medium] mt-[30px]">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>
          <div className="copywrite text-[#858E92] font-[ClashDisplay-Medium]">
            <p>Copyright 2023 MNTN, GD World , Terms & Privacy</p>
          </div>
        </div>
        {/* Logo end */}
        {/* ---------------------------------------------------------------> */}
        {/* footerLinks */}
        <div className="links text-center md:text-start text-white h-[200px] mt-[30px] lg:w-[40%] flex flex-col md:flex-row justify-evenly lg:justify-between items-center md:items-start">
          <div className="More-blog min-w-[200px]">
            <h5 className="font-[ClashDisplay-Medium] text-[18px] text-[#FBD784] ">
              More on The Blog
            </h5>
            <ul>
              <li>
                <a href="#">About MNTN </a>
              </li>
              <li>
                <a href="#">Contributors & Writers </a>
              </li>
              <li>
                <a href="#">Write For Us </a>
              </li>
              <li>
                <a href="#">Contact Us </a>
              </li>
              <li>
                <a href="#">Privacy Policy </a>
              </li>
            </ul>
          </div>
          {/* --------------------------------------------------------------------- */}
          {/* 2nd Link Tab */}
          <div className="More-MTN mt-[30px] md:mt-[0px] min-w-[200px] ">
            <h5 className="text-[18px]  font-[ClashDisplay-Medium] text-[#FBD784] ">
              More on MNTN
            </h5>
            <ul>
              <li>
                <a href="#">The Team </a>
              </li>
              <li>
                <a href="#">Jobs </a>
              </li>
              <li>
                <a href="#">Press </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --------------------------------------------------------------------> */}
      </div>
    </footer>
  );
};

export default Footer;
