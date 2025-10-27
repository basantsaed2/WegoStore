import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/Images/logo white.png";
import HomeSec from "../../../src/assets/Images/assets/img/HomeSec.svg";
import image from "../../../src/assets/Images/assets/img/imgHo.svg";
import pc from "../../../src/assets/Images/assets/img/pc.png";
import m1 from "../../../src/assets/Images/assets/img/1.jpg";
import m2 from "../../../src/assets/Images/assets/img/2.jpg";
import m3 from "../../../src/assets/Images/assets/img/3.jpg";
import m4 from "../../../src/assets/Images/assets/img/4.jpg";
import m6 from "../../../src/assets/Images/assets/img/6.jpg";
import m7 from "../../../src/assets/Images/assets/img/7.jpg";
import m8 from "../../../src/assets/Images/assets/img/8.jpg";
import m9 from "../../../src/assets/Images/assets/img/9.jpg";
import m10 from "../../../src/assets/Images/assets/img/10.jpg";
import m11 from "../../../src/assets/Images/assets/img/11.jpg";
import { FaPhoneAlt, FaBullseye, FaStar, FaHandshake, FaRocket } from "react-icons/fa";
import { Button } from "../../Components/Button";
import 'aos/dist/aos.css'; // AOS styles
import { Link, useNavigate } from "react-router-dom";
import homeImage from "../../../public/Images/homeImage.png";
import imageLanding from '../../assets/Images/assets/img/landing.png'
import { FiArrowRight } from "react-icons/fi";
import feature2 from '../../assets/Images/assets/img/features-icon-2.png'
import feature3 from '../../assets/Images/assets/img/features-icon-3.png'
import feature4 from '../../assets/Images/assets/img/features-icon-4.png'
import CustomerReviewsSlider from "./Rating";
import LearnMoreSection from "./LearnMore";
import ContactSection from "./ContactUs";
import Footer from "./Footer";
import Features from "./Features";
import Plan from "./Plan";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io"; 
import { IoNotifications } from "react-icons/io5";
import AOS from 'aos';

import FeaturesPage from "./OurFeatureData";
import { FaLightbulb, FaCheckCircle, FaHeadset } from 'react-icons/fa';
import { CgMenu } from 'react-icons/cg';
import { useTranslation } from "react-i18next";
const PublicPage = () => {
         const dropdownRef = useRef(null)
         const navigate = useNavigate()
         const {i18n,t } = useTranslation();
         const [activeLink, setActiveLink] = useState('Home'); // Default active link
         const [menuOpen, setMenuOpen] = useState(false);

         const toggleMenu = () => {
           setMenuOpen(prevState => !prevState);
         };
         const [open, setOpen] = useState(false);
      useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en"; // default
    if (savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  
         const handleOptionClick = (value) => {
                i18n.changeLanguage(value); 
                setOpen(false);
                    localStorage.setItem("lang", value); 

                
              };
              
                       useEffect(() => {
                              if (i18n.language === 'ar') {
                                document.documentElement.setAttribute('dir', 'rtl');
                              } else {
                                document.documentElement.setAttribute('dir', 'ltr');
                              }
                            }, [i18n.language]);
                
              const handleClickOpen = () => {
                setOpen(!open);
              };
       
         const handleClickOutside = (event) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                       setOpen(false);
                }
         };
         const handleNavigate =()=>{
          navigate('/signUp')

         }
         const handlecurd =()=>{
          navigate('/demos')

         }
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);
  
         useEffect(() => {
                document.addEventListener('mousedown', handleClickOutside);
                return () => {
                       document.removeEventListener('mousedown', handleClickOutside);
                };
         }, []);

  const handleClick = (label) => {
    setActiveLink(label); // Set the clicked link as active
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<div className=" bg-mainColor text-secoundColor">
  {/* Navigation Bar */}
  <nav 
  className={`fixed w-full pl-3 pr-3  flex justify-between z-10 transition-all duration-300 ${
    isScrolled ? 'bg-mainColor' : 'bg-mainColor'
  }`}
>
  <div className="flex items-start justify-center w-4/6 px-4 py-4 mt-4 text-xl font-semibold lg:w-1/4 lg:flex-row text-secoundColor ">
    <img
    data-aos="fade-right"
      src={logo}
      alt="wegoStore"
      className="max-w-full   sm:max-w-[150px] md:max-w-[150px] h-auto object-contain"
    />
    <div className="items-center justify-center w-4/12 gap-5 py-1 mr-3 text-xl font-medium transition-all duration-300 lg:flex text-secoundColor hover:cursor-pointer">
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center justify-between gap-1 text-2xl"
          onClick={handleClickOpen}
        >
          <CiGlobe className="text-2xl text-secoundColor" />
          <span className="flex items-center font-medium text-secoundColor">
            {t(i18n.language.toUpperCase())}
            <IoIosArrowDown
              className={`${open ? 'rotate-180' : 'rotate-0'} mt-1 ml-1 transition-all text-secoundColor duration-300`}
            />
          </span>
        </button>
        <div
          className={`${open ? 'block' : 'hidden'} absolute w-28 top-14 -left-3.5 bg-secoundColor rounded-xl border-2 overflow-hidden`}
        >
          <div
            className="flex items-center justify-center gap-1 py-1 text-xl font-medium transition-all duration-300 text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor"
            onClick={() => handleOptionClick('en')}
          >
            <CiGlobe /> EN
          </div>
          <div
            className="flex items-center justify-center gap-1 py-1 text-xl font-medium transition-all duration-300 text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor"
            onClick={() => handleOptionClick('ar')}
          >
            <CiGlobe /> AR
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Navbar Links */}
  <ul className="relative items-center justify-center hidden w-2/4 gap-3 py-4 space-x-8 lg:flex">
    <li className="relative" onClick={() => handleClick('Home')} data-aos="fade-down"  data-aos-delay="100">
      <a href="#section1" className="text-2xl transition-colors hover:text-red-500">{t("Home")}</a>
      <span className={`absolute bottom-[-10px] left-0 h-[3px] bg-white transition-all duration-300 ${
        activeLink === 'Home' ? 'w-[70%]' : 'w-0'
      }`}></span>
    </li>
    <li className="relative" onClick={() => handleClick('About Us')} data-aos="fade-down"  data-aos-delay="300">
      <a href="#section2" className="text-2xl transition-colors">{t("About Us")}</a>
      <span className={`absolute bottom-[-10px] left-0 h-[3px] bg-white transition-all duration-300 ${
        activeLink === 'About Us' ? 'w-[70%]' : 'w-0'
      }`}></span>
    </li>
    <li className="relative" onClick={() => handleClick('Our features')} data-aos="fade-down"  data-aos-delay="500">
      <a href="#features" className="text-2xl transition-colors">{t("Our Features")}</a>
      <span className={`absolute bottom-[-10px] left-0 h-[3px] bg-white transition-all duration-300 ${
        activeLink === 'Our features' ? 'w-[70%]' : 'w-0'
      }`}></span>
    </li>
    <li className="relative" onClick={() => handleClick('Plan')} data-aos="fade-down"  data-aos-delay="700">
      <a href="#plan" className="text-2xl transition-colors">{t("Plan")}</a>
      <span className={`absolute bottom-[-10px] left-0 h-[3px] bg-white transition-all duration-300 ${
        activeLink === 'Plan' ? 'w-[70%]' : 'w-0'
      }`}></span>
    </li>
    <li className="relative" onClick={() => handleClick('Contact Us')} data-aos="fade-down"  data-aos-delay="900">
      <a href="#contactUs" className="text-2xl transition-colors">{t("Contact Us")}</a>
      <span className={`absolute bottom-[-10px] left-0 h-[3px] bg-white transition-all duration-300 ${
        activeLink === 'Contact Us' ? 'w-[70%]' : 'w-0'
      }`}></span>
    </li>
  </ul>

  {/* Login/SignUp buttons on Desktop */}
  <div className="items-center hidden gap-4 py-4 lg:flex"     data-aos="fade-left"
>
    <Link to="/login">
      <button className="flex items-center justify-center w-32 h-12 text-xl font-medium text-white border rounded-xl hover:bg-secoundColor hover:text-mainColor">
        {t("Login")}
      </button>
    </Link>
    <Link to="/signUp">
      <button className="flex items-center justify-center w-32 h-12 text-xl font-medium border bg-secoundColor text-mainColor rounded-xl hover:bg-mainColor hover:text-white">
        {t("SignUp")}
      </button>
    </Link>
  </div>

  {/* Hamburger Menu for Small Screens */}
  <div className="flex items-center justify-center px-4 lg:hidden">
    <button onClick={toggleMenu}>
      <CgMenu className="text-3xl text-secoundColor" />
    </button>
  </div>
</nav>

{/* Mobile Menu */}
{menuOpen && (
  <div className="lg:hidden sticky top-20 left-0 w-full max-w-[90%] mx-auto z-50 bg-mainColor text-secoundColor py-6 rounded-lg shadow-lg" data-aos="fade-up">
    <div className="flex justify-end px-4">
      <button
        onClick={toggleMenu}
        className="flex flex-col items-center justify-center px-3 py-1 text-xl font-bold transition-all duration-300 bg-red-500 rounded-full text-secoundColor hover:bg-red-600"
      >
        X
      </button>
    </div>
    <ul className="flex flex-col items-start mx-5 mt-4 space-y-6">
      <li onClick={() => handleClick('Home')} data-aos="fade-right"  data-aos-delay="200">
        <a href="#section1" className="text-xl transition-colors duration-300 hover:text-red-500">{t("Home")}</a>
      </li>
      <li onClick={() => handleClick('About Us')} data-aos="fade-right"  data-aos-delay="400">
        <a href="#section2" className="text-xl transition-colors duration-300 hover:text-red-500">{t("About Us")}</a>
      </li>
      <li onClick={() => handleClick('Our features')} data-aos="fade-right"  data-aos-delay="600">
        <a href="#features" className="text-xl transition-colors duration-300 hover:text-red-500">{t("Our Features")}</a>
      </li>
      <li onClick={() => handleClick('Plan')} data-aos="fade-right"  data-aos-delay="800">
        <a href="#plan" className="text-xl transition-colors duration-300 hover:text-red-500">{t("Plan")}</a>
      </li>
      <li onClick={() => handleClick('Contact Us')} data-aos="fade-right"  data-aos-delay="1000">
        <a href="#contactUs" className="text-xl transition-colors duration-300 hover:text-red-500">{t("Contact Us")}</a>
      </li>
    </ul>

    {/* Login / Sign Up Buttons inside Mobile Menu */}
    <div className="flex flex-col items-start w-4/6 gap-5 py-2 mx-5 lg:w-1/4">
      <Link to="/login">
        <button className="flex items-center justify-center w-32 h-12 text-xl font-medium border rounded-xl hover:bg-secoundColor hover:text-mainColor">
          {t("Login")}
        </button>
      </Link>
      <Link to="/signUp">
        <button className="flex items-center justify-center w-32 h-12 text-xl font-medium border bg-secoundColor text-mainColor rounded-xl hover:bg-mainColor hover:text-white">
          {t("SignUp")}
        </button>
      </Link>
    </div>
  </div>
)}



<section 
  id="section1"
  dir={i18n.language === "ar" ? "rtl" : "ltr"}
  className={`flex flex-col-reverse items-center h-screen pt-10 bg-mainColor text-secoundColor w-full
    ${i18n.language === "ar" ? "lg:flex-row" : "lg:flex-row"}`}
>
  {/* LEFT / TEXT BLOCK */}
  <div
    className={`w-[90%] flex flex-col p-4 
      ${i18n.language === "ar" ? "items-end text-right" : "items-start text-left"}`} 
      data-aos="flip-left"
  >
    {/* Heading */}
    <h1 className="mb-4 text-2xl font-semibold sm:text-3xl lg:text-6xl text-secoundColor">
      {t("Design Your Perfect Website in One Click!")}
    </h1>

    {/* Paragraph */}
    <p className="mt-4 mb-6 font-normal text-2sm sm:text-base lg:text-lg text-secoundColor lg:mb-8 sm:mt-6">
      {t(
        "Enjoy a fast and easy process to create a stunning website that reflects your identity, with our flexible packages ensuring you a unique experience in no time. Choose what suits you and start your digital journey with confidence!"
      )}
    </p>

    {/* Buttons */}
    <div className={`flex flex-wrap items-center gap-4 w-full  ${i18n.language === "ar" ? "flex-row-reverse justify-end" : ""}`}>
      {/* Button 1 */}
      <button
        onClick={() => handlecurd()}
        className="flex items-center px-4 py-2 text-sm font-medium transition-colors duration-300 border sm:text-lg sm:py-3 sm:px-6 lg:px-8 lg:py-4 border-secoundColor rounded-xl bg-secoundColor text-mainColor hover:bg-blue-200 hover:text-mainColor"
      >
        {t("Explore Demo")}
        <span
          className={`flex items-center justify-center w-6 h-6 transition-transform transform rounded-full sm:w-8 sm:h-8 bg-mainColor text-secoundColor
            ${i18n.language === "ar" ? "ml-0 mr-3 rotate-180" : "ml-3 mr-0"}`}
        >
          <FiArrowRight size={18} />
        </span>
      </button>

      {/* Button 2 */}
      <button
        onClick={() => handleNavigate()}
        className="flex items-center px-4 py-2 text-sm font-medium transition-colors duration-300 border-2 sm:text-lg sm:py-3 sm:px-6 lg:px-8 lg:py-4 rounded-xl border-mainColor bg-secoundColor text-mainColor hover:bg-blue-200 hover:text-mainColor"
      >
        {t("Start Now")}
        <span
          className={`flex items-center justify-center w-6 h-6 transition-transform transform rounded-full sm:w-8 sm:h-8 bg-mainColor text-secoundColor
            ${i18n.language === "ar" ? "ml-0 mr-3 rotate-180" : "ml-3 mr-0"}`}
        >
          <FiArrowRight size={18} />
        </span>
      </button>
    </div>
  </div>

  {/* IMAGE BLOCK */}
  <div data-aos="flip-right"
    className={`relative flex items-end w-full h-full mt-5 lg:mt-5
      ${i18n.language === "ar" ? "lg:justify-start" : "lg:justify-end"}`}
  >
    <img
      src={HomeSec}
      alt="Home"
      className={`w-full h-full px-2 mt-14 sm:mt-6 rounded-lg absolute bottom-[-50px] lg:bottom-[-130px]
        ${i18n.language === "ar" ? "left-0" : "right-0"} object-cover`}
    />
  </div>
</section>





{/* Section 2 */}
<section id="section2"  className="flex flex-col items-start justify-start w-full h-auto px-4 text-3xl text-mainColor">
  <div className="w-full ">
    <div className="flex flex-col items-center justify-around w-full gap-3 py-10 bg-white lg:flex-row">
      <div className="flex flex-col items-center gap-3 text-center"  data-aos="flip-up"  data-aos-delay="100">
        <h3 className="text-xl font-semibold text-mainColor">{t("Active Subscriptions")}</h3>
        <span className="text-3xl font-bold text-mainColor">{t("100+")}</span>
      </div>
      <div className="flex flex-col items-center gap-3 text-center" data-aos="flip-up"  data-aos-delay="300">
        <h3 className="text-xl font-semibold text-mainColor">{t("New Orders Count")}</h3>
        <span className="text-3xl font-bold text-mainColor">{t("200+")}</span>
      </div>
      <div className="flex flex-col items-center gap-3 text-center" data-aos="flip-up"  data-aos-delay="500">
        <h3 className="text-xl font-semibold text-mainColor">{t("Websites Created")}</h3>
        <span className="text-3xl font-bold text-mainColor">{t("50+")}</span>
      </div>
    </div>

    <div className="flex flex-col items-start justify-between w-full px-10 py-10 mt-10 bg-mainColor lg:flex-row">
      <div className="flex flex-col items-start w-full gap-6 md:w-1/2">
        <h1 className="text-3xl font-bold text-white" data-aos="zoom-in">
          {t("Let's shape the digital future, together")}
        </h1>
        <ul className="space-y-5 text-lg list-none text-secoundColor">
          <li className="text-xl" data-aos="zoom-in-right" data-aos-delay="50" >{t("Customer-Centric: We prioritize understanding and meeting our clients' unique needs.")}</li>
          <li className="text-xl"  data-aos="zoom-in-right" data-aos-delay="150">{t("Tailored Solutions: We design custom software solutions to exceed client expectations.")}</li>
          <li className="text-xl"  data-aos="zoom-in-right" data-aos-delay="250">{t("Comprehensive Approach: We offer more than just technology products to help clients grow.")}</li>
          <li className="text-xl"  data-aos="zoom-in-right" data-aos-delay="350">{t("Strong Partnerships: We collaborate closely with clients to build their digital presence and increase efficiency.")}</li>
        </ul>
      </div>

      <div className="w-full md:w-1/2 h-[350px] lg:h-[400px] flex justify-center md:justify-end ">
        <img src={image} alt="Digital Future" className="object-cover w-full h-full rounded-lg " />
      </div>
    </div>
  </div>
</section>
{/* section photo screen */}

<section className="p-5 bg-secoundColor" data-aos="fade-up"
     >
  {/* Header Section */}
  <div className="mb-8 text-center mt-7">
    <h1 className="text-3xl font-bold text-mainColor">{t("Explore Our Demo Site!")}</h1>
    <p className="mt-4 text-mainColor">
      {t("Take A Closer Look At Our Site Experience! Explore How Our Programming Services Meet Your Needs.")}
    </p>
  </div>

  {/* Flexbox Section for Images */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {/* Column 1 */}
    <div className="space-y-4">
    <div className="h-[200px] border-4 border-mainColor rounded-lg">
        <img
          src={m1}
          alt="Column 1 Top Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
      <div className="h-[350px] border-4 border-mainColor rounded-lg">
        <img
          src={m2}
          alt="Column 1 Bottom Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
    </div>

    {/* Column 2 */}
    <div className="space-y-4">
      <div className="h-[150px] border-4 border-mainColor rounded-lg">
        <img
          src={m3}
          alt="Column 2 Top Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
      <div className="h-[400px]  border-4 border-mainColor rounded-lg">
        <img
          src={m4}
          alt="Column 2 Bottom Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
    </div>

    {/* Column 3 */}
    <div className="space-y-4">
      <div className="h-[275px] border-4 border-mainColor rounded-lg">
        <img
          src={m6}
          alt="Column 3 Top Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
      <div className="h-[275px] border-4 border-mainColor rounded-lg">
        <img
          src={m7}
          alt="Column 3 Bottom Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
    </div>

    {/* Column 4 */}
    <div className="space-y-4">
      <div className="h-[200px] border-4 border-mainColor rounded-lg">
        <img
          src={m8}
          alt="Column 4 Top Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
      <div className="h-[350px] border-4 border-mainColor rounded-lg">
        <img
          src={m9}
          alt="Column 4 Bottom Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
    </div>

    {/* Column 5 */}
    <div className="space-y-4">
      <div className="h-[350px] border-4 border-mainColor rounded-lg">
        <img
          src={m10}
          alt="Column 5 Top Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
      <div className="h-[200px] border-4 border-mainColor rounded-lg">
        <img
          src={m11}
          alt="Column 5 Bottom Image"
          className="object-cover w-full h-full shadow-md"
        />
      </div>
    </div>
  </div>
  <button
        onClick={() => handleNavigate()}
        className="flex items-center w-full px-4 py-2 text-sm font-medium transition-colors duration-300 border sm:text-lg sm:py-3 sm:px-6 lg:px-8 lg:py-4 border-mainColor mt-7 rounded-xl bg-mainColor text-secoundColor hover:bg-blue-200 hover:text-mainColor sm:w-auto"
      >
        {t("Start Explore")}
        <span className="flex items-center justify-center w-6 h-6 ml-3 mr-3 transition-transform transform rounded-full sm:w-8 sm:h-8 bg-secoundColor text-mainColor group-hover:translate-x-2">
          <FiArrowRight size={18} />
        </span>
      </button>
</section>

   {/*section  */}

   <section className="px-6 py-16 mx-auto bg-mainColor">
  {/* Main Heading */}
  <h2 className="mb-4 text-4xl font-bold text-center text-secoundColor">
    {t("Together, We Build the Future")}
  </h2>
  {/* Subheading */}
  <h3 className="mb-12 text-2xl font-semibold text-center text-gray-300">
    {t("of Digital Innovation")}
  </h3>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-secoundColor lg:grid-cols-3">
    {/* Card 1 */}
    <div className="flex flex-col items-center p-6 text-center border-b-2 rounded-lg shadow-md">
      <div className="mb-4 text-4xl text-secoundColor">
        <FaPhoneAlt />
      </div>
      <div className="w-12 mb-4"></div>
      <h3 className="mb-2 text-xl font-bold">{t("Customer-Centric")}</h3>
      <p className="text-gray-200">
        {t("We focus on understanding and exceeding client needs.")}
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center p-6 text-center border-b-2 rounded-lg shadow-md">
      <div className="mb-4 text-4xl text-secoundColor">
        <FaBullseye />
      </div>
      <div className="w-12 mb-4"></div>
      <h3 className="mb-2 text-xl font-bold">{t("Tailored Solutions")}</h3>
      <p className="text-gray-200">
        {t("Custom software to align perfectly with your goals.")}
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center p-6 text-center border-b-2 rounded-lg shadow-md">
      <div className="mb-4 text-4xl text-secoundColor">
        <FaLightbulb />
      </div>
      <div className="w-12 mb-4"></div>
      <h3 className="mb-2 text-xl font-bold">{t("Innovative Technologies")}</h3>
      <p className="text-gray-100">
        {t(
          "Empowering businesses with cutting-edge solutions to stay ahead in a digital-first world."
        )}
      </p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center p-6 text-center border-b-2 rounded-lg shadow-md">
      <div className="mb-4 text-4xl text-secoundColor">
        <FaStar />
      </div>
      <div className="w-12 mb-4"></div>
      <h3 className="mb-2 text-xl font-bold">{t("Comprehensive Approach")}</h3>
      <p className="text-gray-100">
        {t("Beyond technology, we drive business growth.")}
      </p>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-center p-6 text-center border-b-2 rounded-lg shadow-md">
      <div className="mb-4 text-4xl text-secoundColor">
        <FaHandshake />
      </div>
      <div className="w-12 mb-4"></div>
      <h3 className="mb-2 text-xl font-bold">{t("Strong Partnerships")}</h3>
      <p className="text-gray-100">
        {t("Working closely to maximize efficiency and impact.")}
      </p>
    </div>

    {/* Card 6 */}
    <div className="flex flex-col items-center p-6 text-center border-b-2 rounded-lg shadow-md">
      <div className="mb-4 text-4xl text-secoundColor">
        <FaRocket />
      </div>
      <div className="w-12 mb-4"></div>
      <h3 className="mb-2 text-xl font-bold">{t("Your Vision, Our Mission")}</h3>
      <p className="text-gray-100">
        {t(
          "Turning your ideas into impactful digital experiences with precision and expertise."
        )}
      </p>
    </div>
  </div>
</section>

 {/* Plan 4 */}
 <Plan id='plan'/>

{/* section video */}

<section className="flex flex-col items-center max-w-screen-xl px-6 py-12 mx-auto space-y-6">
  {/* Heading */}
  <h2 className="text-3xl font-bold text-center text-primary">
    {t("Learn About Our Site in Minutes")}
  </h2>

  {/* Paragraph */}
  <p className="max-w-2xl text-lg text-center text-secondary">
    {t(
      "A short video explaining how you can benefit from our programming services. Enjoy a quick tour of our site's features."
    )}
  </p>

  {/* Video */}
  <div className="w-full max-w-4xl aspect-video">
    <iframe
      src="https://www.youtube.com/embed/example-video-id?autoplay=1" // Replace with your video URL and enable autoplay
      title="Site Tour Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-lg shadow-md"
    ></iframe>
  </div>
</section>


{/* Features 6 */}

<Features id={'features'}/>
{/* section CustomerReviewsSlider  */}
<CustomerReviewsSlider/>
{/* section LearnMoreSection */}
<LearnMoreSection/>

{/* section Contact us  */}
<ContactSection id={'contactUs'}/>
<Footer/>
      {/* Sections 3 */}

      
      {/* <section  className="py-20 border-b bg-mainColor text-secoundColor"> */}
      {/* <div className="mb-16 text-center">
        <h2 className="text-4xl font-semibold">{t("What Makes Us Different?")}</h2>
        <p className="mt-4 text-xl">{t("Technology experts, committed to providing you the best.")}</p>
      </div> */}

      {/* <div className="flex flex-wrap justify-center gap-10"> */}
       
        {/* <div className="flex flex-col items-center justify-center w-64 p-6 rounded-lg shadow-lg bg-secoundColor text-mainColor md:w-80">
          <FaLightbulb className="mb-6 text-7xl text-mainColor" />
          <p className="text-lg font-medium text-center">{t("We bring your digital visions to life.")} </p>
        </div> */}

      
        {/* <div className="flex flex-col items-center justify-center w-64 p-6 rounded-lg shadow-lg bg-secoundColor text-mainColor md:w-80">
          <FaCheckCircle className="mb-6 text-7xl text-mainColor" />
          <p className="text-lg font-medium text-center">{t("Our software is built to the highest standards.")}</p>
        </div> */}

      
        {/* <div className="flex flex-col items-center justify-center w-64 p-6 rounded-lg shadow-lg bg-secoundColor text-mainColor md:w-80">
          <FaHeadset className="mb-6 text-7xl text-mainColor" />
          <p className="text-lg font-medium text-center">{t("Our support team is available around the clock.")}</p>
        </div> */}
      {/* </div>
    </section> */}


  



 






 
 






    </div>
  );
};

export default PublicPage;
