import React, { useState ,useEffect} from "react";
import {HomeIcon,ProfileIcon,StoreIcon,SubscriptionIcon,DomainIcon,ExtraIcon,PaymentIcon,TutorialIcon} from "../Icons/AllIcons";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
import { Link, useNavigate } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";

const MenuSide = () => {

       const auth = useAuth();
       const navigate = useNavigate();
       const savedState = JSON.parse(localStorage.getItem('sidebarUserState')) || {};

       const [isActiveHome, setIsActiveHome] =  useState(savedState.isActiveHome ?? true);
       const [isActiveProfile, setIsActiveProfile] =  useState(savedState.isActiveProfile ?? false);
       const [isActiveStore, setIsActiveStore] =  useState(savedState.isActiveStore ?? false);
       const [isActiveSubscription, setIsActiveSubscription] =  useState(savedState.isActiveSubscription ?? false);
       const [isActiveDomain, setIsActiveDomain] =  useState(savedState.isActiveDomain ?? false);
       const [isActiveExtra, setIsActiveExtra] =  useState(savedState.isActiveExtra ?? false);
       const [isActivePayment, setIsActivePayment] =  useState(savedState.isActivePayment ?? false);
       const [isActiveTutorial, setIsActiveTutorial] =  useState(savedState.isActiveTutorial ?? false);
   
    //    const handleLogout = () => {
    //           auth.logout();
    //           // navigate("/", { replace: true });
    //    }

       useEffect(() => {
              const sidebarUserState = {
                     isActiveHome,isActiveProfile,isActiveStore,isActiveSubscription,
                     isActiveDomain,isActiveExtra,isActivePayment,isActiveTutorial
              };
              localStorage.setItem('sidebarUserState', JSON.stringify(sidebarUserState));
       }, [isActiveHome,isActiveProfile,isActiveStore,isActiveSubscription,
           isActiveDomain,isActiveExtra,isActivePayment,isActiveTutorial
       ]);

       const handleClickHome = () => {
              setIsActiveHome(true);
              setIsActiveProfile(false)
              setIsActiveStore(false)
              setIsActiveSubscription(false)
              setIsActiveDomain(false)
              setIsActiveExtra(false)
              setIsActivePayment(false)
              setIsActiveTutorial(false)

       };
       const handleClickProfile = () => {
              setIsActiveHome(false);
              setIsActiveProfile(true)
              setIsActiveStore(false)
              setIsActiveSubscription(false)
              setIsActiveDomain(false)
              setIsActiveExtra(false)
              setIsActivePayment(false)
              setIsActiveTutorial(false)
       };
       const handleClickStore =() =>{
              setIsActiveHome(false);
              setIsActiveProfile(false)
              setIsActiveStore(true)
              setIsActiveSubscription(false)
              setIsActiveDomain(false)
              setIsActiveExtra(false)
              setIsActivePayment(false)
              setIsActiveTutorial(false)
       }
       const handleClickSubscription =() =>{
              setIsActiveHome(false);
              setIsActiveProfile(false)
              setIsActiveStore(false)
              setIsActiveSubscription(true)
              setIsActiveDomain(false)
              setIsActiveExtra(false)
              setIsActivePayment(false)
              setIsActiveTutorial(false)
       }
       const handleClickDomain =() =>{
              setIsActiveHome(false);
              setIsActiveProfile(false)
              setIsActiveStore(false)
              setIsActiveSubscription(false)
              setIsActiveDomain(true)
              setIsActiveExtra(false)
              setIsActivePayment(false)
              setIsActiveTutorial(false)
       }
       const handleClickExtra =() =>{
              setIsActiveHome(false);
              setIsActiveProfile(false)
              setIsActiveStore(false)
              setIsActiveSubscription(false)
              setIsActiveDomain(false)
              setIsActiveExtra(true)
              setIsActivePayment(false)
              setIsActiveTutorial(false)
       }
       const handleClickPayment =() =>{
              setIsActiveHome(false);
              setIsActiveProfile(false)
              setIsActiveStore(false)
              setIsActiveSubscription(false)
              setIsActiveDomain(false)
              setIsActiveExtra(false)
              setIsActivePayment(true)
              setIsActiveTutorial(false)
       }
       const handleClickTutorial =() =>{
              setIsActiveHome(false);
              setIsActiveProfile(false)
              setIsActiveStore(false)
              setIsActiveSubscription(false)
              setIsActiveDomain(false)
              setIsActiveExtra(false)
              setIsActivePayment(false)
              setIsActiveTutorial(true)
       }
       return (
              <>
                     <div className="w-full h-full mt-3 flex justify-center mb-10">
                            <div className="MenuSide w-5/6 flex flex-col items-center gap-y-4">                      
                                   <Link to="/dashboard_user" onClick={handleClickHome} className={`${isActiveHome ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                          <HomeIcon isActive={isActiveHome} />
                                          <span className={`${isActiveHome ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Home</span>
                                   </Link>
                                   <Link to="profile" onClick={handleClickProfile} className={`${isActiveProfile ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                          <ProfileIcon isActive={isActiveProfile} />
                                          <span className={`${isActiveProfile ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Profile</span>
                                   </Link>
                                   <Link to="store" onClick={handleClickStore} className={`${isActiveStore ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                          <StoreIcon isActive={isActiveStore} />
                                          <span className={`${isActiveStore ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Store</span>
                                   </Link>
                                   <Link to="subscription" onClick={handleClickSubscription} className={`${isActiveSubscription ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                          <SubscriptionIcon isActive={isActiveSubscription} />
                                          <span className={`${isActiveSubscription ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Subscriptions</span>
                                   </Link>                      
                                   <Link to="domain" onClick={handleClickDomain} className={`${isActiveDomain ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                          <DomainIcon isActive={isActiveDomain} />
                                          <span className={`${isActiveDomain ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Domain</span>
                                   </Link>
                                   <Link to="extra" onClick={handleClickExtra} className={`${isActiveExtra ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                          <ExtraIcon isActive={isActiveExtra} />
                                          <span className={`${isActiveExtra ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Extras</span>
                                   </Link>
                                   <Link to="payment_history" onClick={handleClickPayment} className={`${isActivePayment ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                          <PaymentIcon isActive={isActivePayment} />
                                          <span className={`${isActivePayment ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Payment History</span>
                                   </Link>
                                   <Link to="tutorial" onClick={handleClickTutorial} className={`${isActiveTutorial ? 'active' : ''} w-full flex items-center justify-start px-0 py-2 gap-x-5`}>
                                          <TutorialIcon isActive={isActiveTutorial} />
                                          <span className={`${isActiveTutorial ? "text-mainColor" : "text-secoundColor"} text-xl font-medium`}>Tutorial</span>
                                   </Link>
                                             
                            </div>
                     </div>
              </>
       );
};

export default MenuSide;
