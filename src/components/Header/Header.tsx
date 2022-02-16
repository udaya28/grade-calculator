import React from 'react'
import './Header.styles.css'

function Header() {
    return (
        <div className="header flex flex-row  items-center justify-between p-5 ">
            <h1 className="primary text-xl font-semibold">LOGO</h1>
            <nav className="flex flex-row justify-evenly basis-1/2 ">
                <p className="text-secondary  hover:text-primary hover:underline font-semibold">SGPA</p>
                <p className="text-secondary  hover:text-primary hover:underline font-semibold">CGPA</p>
                <p className="text-secondary  hover:text-primary hover:underline font-semibold">ABOUT US</p>
                <p className="text-secondary  hover:text-primary hover:underline font-semibold">CONTACT US</p>
                <p className="text-secondary  hover:text-primary hover:underline font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </p>
                <p className="text-secondary  hover:text-primary hover:underline font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </p>
            </nav>
            {/* <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a className="text-white no-underline hover:text-white hover:no-underline" href="/">
                        <span className="text-2xl pl-2"><i className="em em-grinning">h</i> Brand McBrandface</span>
                    </a>
                </div>

                <div className="block lg:hidden">
                    <button type="button" id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-white no-underline" href="/">Active</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="./">link</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/">link</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/">link</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </div>
    )
}

export default Header
