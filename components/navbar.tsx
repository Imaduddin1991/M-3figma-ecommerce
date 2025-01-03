import React from 'react';

const Navbar = () => {
    return (
        <nav className="relative top-0 left-0 right-0 w-full bg-white flex items-center justify-between px-4 md:px-8 lg:w-[1440px] mx-auto h-[100px]">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-2">
                <div
                    className="w-[50px] h-[32px] bg-no-repeat bg-center bg-contain"
                    style={{ backgroundImage: "url('Meubel House_Logos-01.svg')" }}
                ></div>
                <span className="text-[24px] md:text-[28px] lg:text-[34px] font-bold leading-[41px] text-black font-poppins">
                    Furniro
                </span>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-20">
                <a href="/" className="font-medium text-base md:text-lg font-poppins leading-6 text-black hover:text-gray-600">
                    Home
                </a>
                <a href="/shop" className="font-medium text-base md:text-lg font-poppins leading-6 text-black hover:text-gray-600">
                    Shop
                </a>
                <a href="/blog" className="font-medium text-base md:text-lg font-poppins leading-6 text-black hover:text-gray-600">
                    Blog
                </a>
                <a href="/contact" className="font-medium text-base md:text-lg font-poppins leading-6 text-black hover:text-gray-600">
                    Contact
                </a>
            </div>

            {/* Right Navigation Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
                <a href="/Account" className="hover:text-gray-600" title="Account">
                    <img src="/account.svg" alt="Account" className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]" />
                </a>
                <a href="/Search" className="hover:text-gray-600" title="Search">
                    <img src="/search.svg" alt="Search" className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]" />
                </a>
                <a href="#" className="hover:text-gray-600" title="Wishlist">
                    <img src="/heart.svg" alt="Wishlist" className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]" />
                </a>
                <a href="#" className="hover:text-gray-600" title="Cart">
                    <img src="/cart.svg" alt="Cart" className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
