import { useState, FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="px-6">
            <nav className="flex flex-col md:flex-row justify-between text-black font-bold p-4">

<ul>
    <li><NavLink className={'text-3xl text-blue-600'} to='/'>React Router</NavLink></li>
</ul>

{/* Hamburger Icon for Small Devices */}
<div className="md:hidden ml-auto relative bottom-7" onClick={toggleMenu}>
    <div className="cursor-pointer">
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
    </div>
</div>

{/* Menu Items and Search Bar */}
<div className={`flex-col md:flex md:flex-row ${isOpen ? 'block' : 'hidden'} md:block`}>
    <ul className="flex mt-2 flex-col my- md:flex-row text-blue-600">
        <li><NavLink className="mx-8 my-2 md:my-4 hover:text-blue-400" to={'/about'}>About</NavLink></li>
        <li><NavLink className="mx-8 my-2 md:my-4 hover:text-blue-400" to={'/contact'}>Contact</NavLink></li>
        <li><NavLink className="mx-8 my-2 md:my-4 hover:text-blue-400" to={''}>Policy</NavLink></li>
    </ul>
</div>
</nav>
            </header>
        </>
    );
}

export default Header;

