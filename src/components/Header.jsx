// import 'animate.css';
// import { Disclosure } from '@headlessui/react';
// import classNames from 'classnames';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';

// export default function Header() {
//     const isShadow = true;

//     return (
//         <>
//             {/* Desktop Header */}
//             <header className="hidden md:flex h-24 fixed top-0 left-0 right-0 z-10 bg-white body-font border rounded-lg">
//                 <div className="container mx-auto px-5 py-4 flex items-center justify-between">
//                     <a href="/" className="flex items-center text-gray-900">
//                         <img src="/Logo.png" alt="Logo" className="h-16 animate__animated animate__bounce animate__pulse animate__infinite" />
//                     </a>
//                     <nav className="md:flex md:items-center mr-32 md:space-x-8">
//                         <a href="/" className="text-base font-bold text-black hover:text-blue-700">HOME</a>
//                         <a href="/about" className="text-base font-bold text-black hover:text-blue-700">ABOUT US</a>
//                         <div className="relative group">
//                             <a href="/services" className="text-base font-bold text-black hover:text-blue-700">SERVICES</a>
//                             <div className="hidden group-hover:block absolute top-full w-64 bg-white border-2">
//                                 <a href="/web" className="block text-black font-bold text-sm py-2 px-4 hover:text-blue-700">Professional Website Design</a>
//                                 <a href="/software" className="block text-black font-bold text-sm py-2 px-4 hover:text-blue-700">Software Development</a>
//                                 <a href="/commerce" className="block text-black font-bold text-sm py-2 px-4 hover:text-blue-700">Ecommerce</a>
//                                 <a href="/digital" className="block text-black font-bold text-sm py-2 px-4 hover:text-blue-700">Digital Marketing</a>
//                                 <a href="/management" className="block text-black font-bold text-sm py-2 px-4 hover:text-blue-700">Business Process Management</a>
//                             </div>
//                         </div>
//                         <a href="/contact" className="text-base font-bold text-black hover:text-blue-700">CONTACT</a>
//                     </nav>
//                 </div>
//             </header>

//             {/* Mobile Header */}
//             <header className="md:hidden block text-white font-sans fixed w-screen z-50">
//                 <Disclosure as="nav" className={classNames(
//                     isShadow ? "shadow-lg" : "shadow-sm",
//                     "bg-gradient-to-r from-red-700 to-pink-500 sticky top-0 z-50 border-b"
//                 )}>
//                     {({ open }) => (
//                         <>
//                             <div className="uppercase max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//                                 <div className="relative flex items-center justify-between h-14">
//                                     <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
//                                         <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                                             <span className="sr-only">Open main menu</span>
//                                             {open ? (
//                                                 <XIcon className="block h-6 w-6" aria-hidden="true" />
//                                             ) : (
//                                                 <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                                             )}
//                                         </Disclosure.Button>
//                                     </div>
//                                     <div className="ml-10 lg:-ml-20 flex-1 flex items-center sm:items-stretch">
//                                         <div className="flex-shrink-0 flex items-center">
//                                             <a href="/" className="flex flex-row">
//                                                 <img src="/Logo.png" alt="Logo" className="h-10" />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <Disclosure.Panel className="lg:hidden bg-[#ec4f44]">
//                                 <div className="px-2 pt-2 pb-3 space-y-1">
//                                     <Disclosure.Button
//                                         key={'HOME'}
//                                         as="a"
//                                         href={'/'}
//                                         className={classNames(
//                                             'text-white hover:underline',
//                                             'block px-3 py-2 rounded-md text-base font-medium'
//                                         )}
//                                         aria-current={undefined}
//                                     >
//                                         HOME
//                                     </Disclosure.Button>
//                                     <Disclosure.Button
//                                         key={'ABOUT US'}
//                                         as="a"
//                                         href={'/about'}
//                                         className={classNames(
//                                             'text-white hover:underline',
//                                             'block px-3 py-2 rounded-md text-base font-medium'
//                                         )}
//                                         aria-current={undefined}
//                                     >
//                                         ABOUT US
//                                     </Disclosure.Button>
//                                     <Disclosure.Button
//                                         key={'SERVICES'}
//                                         as="a"
//                                         href={'/services'}
//                                         className={classNames(
//                                             'text-white hover:underline',
//                                             'block px-3 py-2 rounded-md text-base font-medium'
//                                         )}
//                                         aria-current={undefined}
//                                     >
//                                         SERVICES
//                                     </Disclosure.Button>
//                                     <Disclosure.Button
//                                         key={'CONTACT'}
//                                         as="a"
//                                         href={'/contact'}
//                                         className={classNames(
//                                             'text-white hover:underline',
//                                             'block px-3 py-2 rounded-md text-base font-medium'
//                                         )}
//                                         aria-current={undefined}
//                                     >
//                                         CONTACT
//                                     </Disclosure.Button>
//                                 </div>
//                             </Disclosure.Panel>
//                         </>
//                     )}
//                 </Disclosure>
//             </header>
//         </>
//     );
// }



import React, { useState } from 'react';



function Header() {
   
    const [showSubNav, setShowSubNav] = useState(false);
    let timer;

    const handleMouseEnter = () => {
        clearTimeout(timer);
        setShowSubNav(true);
    };

    const handleMouseLeave = () => {
        timer = setTimeout(() => {
            setShowSubNav(false);
        }, 200); // 200 milliseconds delay to handle mouse transitions
    };

    return (
        <>
        <div>
            <header className="bg-white border rounded-lg shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="flex items-center text-black">
                        <img src="logo.png" alt="Logo" className="h-16 animate_animated animatebounce animatepulse animate_infinite" />
                    </a>
                    <div className="relative group">
                        <div className="flex space-x-8">
                            <a href="/" className="text-black hover:text-blue-500 transition font-bold duration-300 ease-in-out">HOME</a>
                            <a href="/about" className="text-black hover:text-blue-500 transition font-bold duration-300 ease-in-out">ABOUT</a>
                            <a  href="/services"
                                className="text-black hover:text-blue-500 transition cursor-pointer font-bold duration-300 ease-in-out"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                SERVICES
                            </a>
                            <a href="/contact" className="text-black hover:text-blue-500 transition font-bold duration-300 ease-in-out">CONTACT</a>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={`bg-white border  w-full shadow-md transition-all text-black py-2 px-8 rounded-lg absolute ${showSubNav ? 'block' : 'hidden'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="container mx-auto">
                    <div className="flex space-x-10 ml-64   h-10 pt-2">
                        <a href="/web" className="hover:text-blue-500 cursor-pointer">Professional Website Design</a>
                        <a href="/software" className="hover:text-blue-500 cursor-pointer">Software Development</a>
                        <a href="/commerce" className="hover:text-blue-500 cursor-pointer">ECommerce</a>
                        <a href="/digital" className="hover:text-blue-500 cursor-pointer">Digital Marketing</a>
                        <a href="/management" className="hover:text-blue-500 cursor-pointer">Business Process Management</a>
                    </div>
                </div>
            </div>
        </div>

       
        </>
    );
}

export default Header;


