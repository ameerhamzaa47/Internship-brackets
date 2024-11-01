import React, { useState } from "react";

function ResponsiveNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex flex-col md:flex-row justify-between bg-black text-white font-bold p-4">
                <h1 className="text-3xl mb-2">
                    <a href="">Photo Gallery</a>
                </h1>

                {/* Hamburger Icon for Small Devices */}
                <div className="md:hidden ml-auto relative bottom-7" onClick={toggleMenu}>
                    <div className="cursor-pointer">
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                </div>

                {/* Menu Items and Search Bar */}
                <div className={`flex-col md:flex md:flex-row ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex mt-2 flex-col my- md:flex-row">
                        <li><a className="mx-8 my-2 md:my-4" href="">Home</a></li>
                        <li><a className="mx-8 my-2 md:my-4" href="">About</a></li>
                        <li><a className="mx-8 my-2 md:my-4" href="">Contact</a></li>
                        <li><a className="mx-8 my-2 md:my-4" href="">Policy</a></li>
                        <li>
                            <select className="bg-black mx-8 outline-none">
                                <option value="">Facebook</option>
                                <option value="">Instagram</option>
                                <option value="">LinkedIn</option>
                                <option value="">Twitter</option>
                            </select>
                        </li>
                    </ul>

                    <div className="mx-4 my-4 md:my-0 flex items-center md:hidden lg:block">
                        <input type="search" className="rounded-lg h-10 px-4 py-2 bg-transparent" placeholder="Type Here..." />
                        <input type="submit" className="mx-2 cursor-pointer border-2 rounded-lg p-2 transition-all duration-700 hover:bg-white hover:text-black" />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default ResponsiveNavbar;