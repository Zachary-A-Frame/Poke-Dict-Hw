import React from 'react'

const PokeCards = (props) => {
     return (
       <div className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
         <a className={`flex items-center rounded-lg shadow-lg overflow-hidden ${props.color}`} href={props.pokeLink}>
           <img
             className="h-32 w-32 flex-shrink-0"
             src={props.picture}
             alt="destination.imageAlt"
           />
           <div className="px-6 py-4">
             <h3 className="text-lg font-semibold text-gray-800">
               {props.evolution}
             </h3>
             <p className="text-gray-600">Type: {props.type} </p>
             <div className="mt-4">
               <a
                 href="/"
                 className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
               >
                 Entry Number: {props.entryNum}
               </a>
             </div>
           </div>
         </a>
       </div>
     );
}

export default PokeCards