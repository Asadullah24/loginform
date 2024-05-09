import React from 'react'

function Input({type,placeholder}:{type:string,placeholder?:string}) {
  return (
    <div>
        <input type={type} placeholder={placeholder} className='w-64 h-14 border-2 border-blue-500 bg-black text-center text-lg text-white rounded-full hover:border-red-600 ' />
    </div>
  )
}

export default Input