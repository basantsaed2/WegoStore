import React from "react";
import MenuSide from "./MenuSide.jsx";
const SidebarAdmin =({ isOpen }) => {
       return (
              <>                                 
                <aside
                className={`fixed scrollSec w-4/12 lg:w-2/12 xl:w-2/12 sm:w-8/12 left-0 overflow-y-auto z-10 h-screen flex flex-col items-center bg-mainColor gap-y-3 transition-transform transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`}
                >
                <div className="w-full lg:mt-0 sm:mt-6 flex text-white items-center justify-center border-b-2 py-6 px-4 text-xl font-semibold">
                    <h1>Transit Station Car Parking</h1>
                </div>
                <MenuSide />
                </aside>          
              </>
       );
};

export default SidebarAdmin;
