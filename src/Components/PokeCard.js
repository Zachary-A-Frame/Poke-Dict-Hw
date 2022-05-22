import React from 'react'

const PokeCards = (props) => {
     return (
       <div className="mb-6 w-full px-4 lg:w-1/2 xl:w-1/3 float-left pt-6" >
         <a className={`flex items-center rounded-lg shadow-lg overflow-hidden ${props.color}`} href={props.pokeLink}>
           <img
             className="h-32 w-32 flex-shrink-0"
             src={props.picture}
             alt="destination.imageAlt"
           />
           <div className="px-6 py-4">
             <h2 className="text-lg font-semibold text-gray-800">
               {props.name}
             </h2>
             {/* <h3 className="text-lg font-semibold text-gray-800">
               {props.evolution}
             </h3> */}
             <p className="text-gray-800 font-semibold">Type: {props.type} </p>
             <div className="mt-4">
               <a
                 href="/"
                 className="text-gray-800 hover:text-indigo-400 font-semibold text-md"
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