import React, { useEffect, useRef, useState } from "react";
import boot from "../../../public/Images/boot.jpeg";
import boott from "../../../public/Images/boott.jpeg";
import crame from "../../../public/Images/crame.jpeg";
import cramet from "../../../public/Images/cramet.jpeg";
import furniter from "../../../public/Images/furniter.jpeg";
import furnitert from "../../../public/Images/furnitert.jpeg";
import galess from "../../../public/Images/galess.jpeg";
import galesst from "../../../public/Images/galesst.jpeg";
import kids from "../../../public/Images/Kids.jpeg";
import kidst from "../../../public/Images/Kidst.jpeg";
import man from "../../../public/Images/man.jpeg";
import mant from "../../../public/Images/mant.jpeg";
import mobile from "../../../public/Images/mobile.jpeg";
import mobilet from "../../../public/Images/mobilet.jpeg";
import watch from "../../../public/Images/watch.jpeg";
import watcht from "../../../public/Images/watcht.jpeg";
import woman from "../../../public/Images/woman.jpeg";
import womant from "../../../public/Images/womant.jpeg";
import "aos/dist/aos.css";
import AOS from "aos";
import logo from "../../../public/Images/logo white.png";
import { IoIosArrowDown } from "react-icons/io"; 
import { CiGlobe } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CgMenu } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
const Demos = () => {
           const {i18n,t } = useTranslation();
const navige=useNavigate()
             const dropdownRef = useRef(null)
           const [open, setOpen] = useState(false);
           const [menuOpen, setMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 500, 
      once: true, 
      offset: 100, 
      easing: "ease-in-out",
    });
  }, []);
           const [activeLink, setActiveLink] = useState(''); // Default active link
  
 const handleOptionClick = (value) => {
                i18n.changeLanguage(value); 
                setOpen(false);
                    localStorage.setItem("lang", value); 
              };
               const handleClick = (label) => {
    setActiveLink(label); 
    navige("/")
  };
                       useEffect(() => {
                              if (i18n.language === 'ar') {
                                document.documentElement.setAttribute('dir', 'rtl');
                              } else {
                                document.documentElement.setAttribute('dir', 'ltr');
                              }
                            }, [i18n.language]);
  const products = [
    {
      id: 1,
      name: "Shoes",
      link: "http://shoes.wegostores.com/",
      image1: boott,
      image2: boot,
    },
    {
      id: 2,
      name: "Camera",
      link: "https://beauty.wegostores.com/",
      image1: cramet,
      image2: crame,
    },
    {
      id: 3,
      name: "Furniture",
      link: "https://furniture.wegostores.com/",
      image1: furnitert,
      image2: furniter,
    },
    {
      id: 4,
      name: "Glasses",
      link: "https://glasses.wegostores.com/",
      image1: galesst,
      image2: galess,
    },
    {
      id: 5,
      name: "Kids",
      link: "https://kidsc.wegostores.com/",
      image1: kidst,
      image2: kids,
    },
    {
      id: 6,
      name: "Men",
      link: "https://menc.wegostores.com/",
      image1: mant,
      image2: man,
    },
    {
      id: 7,
      name: "Mobile",
      link: "https://mobile.wegostores.com/",
      image1: mobilet,
      image2: mobile,
    },
    {
      id: 8,
      name: "Watches",
      link: "https://watches.wegostores.com/",
      image1: watcht,
      image2: watch,
    },
    {
      id: 9,
      name: "Women",
      link: "http://womenc.wegostores.com",
      image1: womant,
      image2: woman,
    },
  ];


     const handleClickOpen = () => {
                setOpen(!open);
              };
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
         const toggleMenu = () => {
           setMenuOpen(prevState => !prevState);
         };
  return (
<div className=" bg-mainColor text-secoundColor">
       <nav 
        className={`fixed w-full pl-3 pr-3  flex justify-between z-10 transition-all duration-300 ${
          isScrolled ? 'bg-mainColor' : 'bg-mainColor'
        }`}
      >
        <div className="flex items-start justify-center w-4/6 px-4 py-4 mt-4 text-xl font-semibold lg:w-1/4 lg:flex-row text-secoundColor ">
        <a href="/">
          <img
          data-aos="fade-right"
          src={logo}
          alt="wegoStore"
          className="max-w-full   sm:max-w-[150px] md:max-w-[150px] h-auto object-contain"
          />
          </a>
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
      
    <div className="px-4 py-10 mx-auto">
      <h2
        className="w-full mt-20 mb-10 text-2xl font-semibold text-center text-white sm:text-3xl"
        data-aos="fade-down"
      >
Demos      </h2>

      <div className="grid gap-10 sm:grid-cols-1 xl:grid-cols-2">
        {products.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={index * 100} 
            className="block overflow-hidden transition-all duration-300 transform group hover:scale-[1.02] rounded-2xl shadow-md hover:shadow-xl border-2 border-mainColor"
          >
            <div className="relative h-[300px] sm:h-[350px] lg:h-[400px]">
              <img
                src={item.image1}
                alt={item.name}
                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              <img
                src={item.image2}
                alt={item.name}
className="absolute w-auto h-full transition-opacity duration-500 transform -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 group-hover:opacity-100"
              />

        
            </div>

            <div className="relative py-3 text-center bg-white">
              <h3 className="text-sm font-semibold text-mainColor group-hover:underline group-hover:underline-offset-4">
                {item.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
        </div>

  );
};

export default Demos;
