import Footer from "./Footer/Footer";
import CardList from "./omponents/cardCompont/CardList";
import Navbar from "./omponents/Navbar/navbar";
import HeroSection from "./omponents/Section/hero/Hero";
import heroBG from "../public/images/BG Content.png";
import "./App.css";
function App() {
  return (
    <div className="bg-[#0B1D26]">
      <div className="herosection">
        <HeroSection />
      </div>
      <div className="cardsection  flex flex-col items-center  bg-custom-gradient  w-full  ">
        <div className="upperImage relative lg:top-[-410px] xl:top-[-290px]     2xl:top-[-180px] ">
          <img src={heroBG} className="hidden lg:block xl:mt-[-160px] 2xl:mt-[150px] " alt="" />
        </div>
        <div className="Card w-[80%] relative top-[-450px] xl:top-[-410px]   ">
          <CardList />
        </div>
      </div>
      <div className="footerSection  px-[20px] md:px-[100px] mt-[-333px] ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
