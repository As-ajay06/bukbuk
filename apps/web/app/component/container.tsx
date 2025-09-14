
import React from 'react'



export default function Container({ children , className } : {
    children : React.ReactNode,
    className?: string
} ) {
  return (
    <div
    className='w-5xl mx-auto px-1 pt-3 h-screen flex items-center justify-center'
    >{children}</div>
  )
}
