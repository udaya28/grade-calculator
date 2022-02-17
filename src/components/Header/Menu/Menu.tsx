import React from 'react'

interface Props {
    toggleMenu: () => void
}

function Menu({ toggleMenu }: Props) {
    return (
        <div className="block md:hidden mr-3">
            <button
                type="button"
                id="nav-toggle"
                className="flex items-center px-3 py-2 border border-primary rounded text-primary  font-semibold"
                onClick={() => toggleMenu()}
            >
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
    )
}

export default Menu
