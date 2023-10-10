import React from 'react';

export const Card=({title,description,img})=>{
  return(
    <>
    
<div class="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg w-full h-48 rounded-b-xl" src={img} alt="" />
    </a>
    <div class="p-5">
        
            <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">{title}</h5>
       
        <p class="mb-3 font-normal  dark:text-gray-400">{description}</p>
         
    </div>
</div>

    </>
  )
}
