import React from 'react'

const Button = ({children}) => {
    const cssClasses = textOnly ? 'text-button' : 'button'
  return (
    <button>{children}</button>
  )
}

export default Button