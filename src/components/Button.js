import React from 'react'

 const Button = (props) => {
  return (
    <div>
        <button className="bg-gray-300 rounded-md px-5 py-2 m-5">{props.name}</button>
    </div>
  )
}

export default Button