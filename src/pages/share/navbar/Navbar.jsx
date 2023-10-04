import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    const navlink = <>
        <li ><Link className=' text-lg bg-transparent text-white hover:text-[#FB8E26]'>HOME</Link></li>
        <li ><Link className='mx-4 text-lg bg-transparent text-white hover:text-[#FB8E26]'>ABOUT US</Link></li>
        <li ><Link className='mx-4 text-lg bg-transparent text-white hover:text-[#FB8E26]'>SERVICES</Link></li>
        <li ><Link className=' text-lg bg-transparent text-white hover:text-[#FB8E26]'>CONTACT US</Link></li>
    </>
    return (
        <div className=' absolute z-10 w-full bg-transparent'>
            <div className='container mx-auto px-10'>
                <div className="navbar py-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              {navlink}
                            </ul>
                        </div>
                        <Link><img src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navlink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                    <button className='bg-[#FB8E26] text-white px-8 transition-all py-3 rounded-3xl hover:bg-[#021F41] text-lg 
                    '>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;