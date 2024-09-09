import React from 'react'
import Menu from '../../components/template/Menu';


const LayoutHome = ({ children }) => {
  return (
    <div className='flex'>
      <Menu />
      <div className=' w-full h-full'>
        {children}
      </div>
    </div>
  )
}

export default LayoutHome