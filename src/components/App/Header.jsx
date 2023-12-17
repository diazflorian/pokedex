import React from 'react'
function Header() {
    return (
        <div>
            <div className='bg-black p-5 flex items-center justify-center fixed w-full'>
                <img src="logo.png" alt="Logo de pokedex" className='h-10'/>
            </div>
        </div>
    )
}

export default Header;