import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookSkull, faDragon, faFire, faHandFist, faHandsHoldingCircle, faLeaf, faThunderstorm, faWater } from '@fortawesome/free-solid-svg-icons'
import { faEye, faStar} from '@fortawesome/free-regular-svg-icons'
import { faRockrms } from '@fortawesome/free-brands-svg-icons'

function PokemonFilter() {
    return (
        <div>
            <div className="flex flex-col gap-2 bg-[#515151] text-white rounded-lg p-5">
                {/* Crea un checkbox para cada tipo de Pokémon */}
                <label className="flex items-center gap-2  w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="grass" className="opacity-0 absolute" />
                    <FontAwesomeIcon icon={faLeaf} style={{color: "white",}}  className=" relative rounded-full bg-green-500 p-2 h-3 w-3"/>
                    Planta
                </label>
                <label className="flex items-center  gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="fire" className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faFire} style={{color: "white",}}  className=" relative rounded-full bg-red-700 p-2 h-3 w-3"/>
                    Fuego
                </label>
                <label className="flex items-center gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="water" className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faWater} style={{color: "white",}}  className=" relative rounded-full bg-blue-700 p-2 h-3 w-3"/>
                    Agua
                </label>
                <label className="flex items-center gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="electric" name='rayo' className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faThunderstorm} style={{color: "white",}}  className=" relative rounded-full bg-yellow-500 p-2 h-3 w-3"/>
                    Rayo
                </label>
                <label className="flex items-center gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="psychic" className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faEye} style={{color: "white",}}  className=" relative rounded-full bg-purple-700 p-2 h-3 w-3"/>
                    Psíquico
                </label>
                <label className="flex items-center gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="fighting" className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faHandFist} style={{color: "white",}}  className=" relative rounded-full bg-orange-700 p-2 h-3 w-3"/>
                    Lucha
                </label>
                <label className="flex items-center gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="dark" className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faBookSkull} style={{color: "white",}}  className=" relative rounded-full bg-blue-900 p-2 h-3 w-3"/>
                    Oscura
                </label>
                <label className="flex items-center gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="steel" className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faRockrms} style={{color: "white",}}  className=" relative rounded-full bg-gray-600 p-2 h-3 w-3"/>
                    Metálica
                </label>
                <label className="flex items-center gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="normal" className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faStar} style={{color: "white",}}  className=" relative rounded-full bg-gray-500 p-2 h-3 w-3"/>
                    Incolora
                </label>
                <label className="flex items-center gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="fairy" className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faHandsHoldingCircle} style={{color: "white",}}  className=" relative rounded-full bg-pink-600 p-2 h-3 w-3"/>
                    Hada
                </label>
                <label className="flex items-center gap-2 w-52 p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="dragon" className="opacity-0 absolute"/>
                    <FontAwesomeIcon icon={faDragon} style={{color: "white",}}  className=" relative rounded-full bg-yellow-700 p-2 h-3 w-3"/>
                    Dragón
                </label>
            </div>
        </div>
    )
}

export default PokemonFilter
