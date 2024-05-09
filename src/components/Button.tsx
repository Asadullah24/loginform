import React from 'react'

function Button({text}:{text:string}) {
  return (
    <div>
        <button className='border-2 rounded-full border-red-500 text-white text-lg px-9 py-4 hover:border-blue-500 bg-black '>{text}</button>
    </div>
  )
}

export default Button