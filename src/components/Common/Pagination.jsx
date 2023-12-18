import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from './Search'
import React from 'react'

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div className='flex text-white items-center bg-black justify-between p-3 px-5 max-w-full-[60px] rounded-2xl'>
            <h1 className=' font-bold text-3xl'>Pokemones</h1>
            <Search />
            <div className='flex gap-6'>
                <button onClick={onLeftClick}><FontAwesomeIcon icon={faChevronLeft} style={{color: "white",}} /></button>
                <div>{page} de {totalPages}</div>
                <button onClick={onRightClick}><FontAwesomeIcon icon={faChevronRight} style={{color: "#white",}} /></button>
            </div>
        </div>
    )
}

export default Pagination
