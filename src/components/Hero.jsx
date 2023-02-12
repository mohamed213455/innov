import styles from "../style";
import { discount, rectangle } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Hello ! Big news from Innoverse</span>
           
          </p>
        </div>
        
        <div className="flex flex-row justify-between items-center w-full">
          
          <h1 className="flex-1 font-poppins font-Medium ss:text-[40px] text-[40px] text-white ss:leading-[70.8px] leading-[100px]" style={{lineHeight: "1.3"}}>
            Deploy your app quickly.{" "}
            <div className="text-gradient">Generate live preview.</div>{" "}
          </h1>
          
        </div>

    
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      
        <div className="d-flex justify-between ">
  <button style={{
    backgroundColor: "#5DADEC", 
    color: "white", 
    borderRadius: "8px", 
    border: "none", 
    padding: "10px 20px",
    marginTop: "20px"
  }}>Start deploying</button>

  <button style={{
    backgroundColor: "#757575", 
    color: "white", 
    borderRadius: "8px", 
    border: "1px solid darkgrey", 
    padding: "10px 20px",
    marginTop: "20px",
    marginLeft: 20
  }}>How it works</button>
</div>

      </div>
      

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={rectangle} alt="billing" className="w-[100%] h-[320px] relative z-[5]" />
           
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>


      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default Hero;
