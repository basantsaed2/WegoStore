import React from "react";
import StoreLogo from '../../../public/Images/logo white.png'
import MenuSideUser from "../../Components/UserComponents/MenuSideUser";
const SidebarUser =({ isOpen }) => {
       return (
              <>
                <aside
                className={`fixed scrollSec w-4/12 lg:w-2/12 xl:w-2/12 sm:w-8/12 left-0 overflow-y-auto z-10 h-screen flex flex-col items-center bg-mainColor gap-y-3 transition-transform transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`} // Sidebar always visible on large screens
                >
                <div className="w-full lg:mt-0 sm:mt-6 flex text-white items-center justify-center border-b-2 py-6 px-4 text-xl font-semibold">
                  <img src={StoreLogo} alt="wegoStore"/>
                </div>
                <MenuSideUser />
                </aside>      
              </>
       );
};

export default SidebarUser;
