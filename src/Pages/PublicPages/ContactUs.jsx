import { useTranslation } from "react-i18next";
import logo from "../../../public/Images/LogoImage.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactSection = ({id}) => {
  const {t} = useTranslation()
   useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,    
      });
    }, []);
    return (
      <section id={id} className="py-16 bg-mainColor text-secoundColor shadow-custom"    
           data-aos="fade-up">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-3xl font-bold text-center">
          {t("We are happy to answer your questions at any time.")}
        </h2>
    
        {/* Description Text */}
        <p className="text-center text-lg text-gray-200 w-[50%] mb-8">
          {t("Your opinion matters to us. Please feel free to reach out with any questions or concerns. We're committed to providing prompt responses.")}
        </p>
      </div>
    
      {/* Form and Image Container */}
      <div className="flex flex-col-reverse items-center justify-between max-w-6xl mx-auto lg:flex-row">
        {/* Left Section: Form */}
        <div className="w-full space-y-4 lg:w-1/2">
          <form className="p-8 space-y-6 rounded-lg shadow-md bg-mainColor">
            {/* Full Name */}
            <div className="flex flex-col">
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="p-3 bg-transparent border-b border-b-gray-300 focus:outline-none focus:ring-2"
                placeholder={t("Enter your full name")}
              />
            </div>
    
            {/* Email */}
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 bg-transparent border-b border-b-gray-300 focus:outline-none focus:ring-2"
                placeholder={t("Enter your email")}
              />
            </div>
    
            {/* Phone Number */}
            <div className="flex flex-col">
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-3 bg-transparent border-b border-b-gray-300 focus:outline-none focus:ring-2"
                placeholder={t("Enter your phone number")}
              />
            </div>
    
            {/* Description */}
            <div className="flex flex-col">
              <textarea
                id="description"
                name="description"
                className="p-3 bg-transparent border-b border-b-gray-300 focus:outline-none focus:ring-2"
                placeholder={t("Write your message or inquiry")}
                rows="4"
              ></textarea>
            </div>
    
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-lg bg-secoundColor text-mainColor focus:outline-none"
            >
              {t("Send")}
            </button>
          </form>
        </div>
    
        {/* Right Section: Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src={logo} // Replace with your image source
            alt="Contact Image"
            className="w-[400px] h-[400px] rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  
    
    );
  };
  
  export default ContactSection;
  