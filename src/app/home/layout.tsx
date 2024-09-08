import React from 'react'
import Menu from '../../components/template/Menu';
import Titulo from '../../components/template/title_home';


const LayoutHome = ({ children }) => {
  return (
    <div className='flex'>
      <Menu />
      <div className='bg-green-400 w-full'>
        {children}
      </div>
    </div>
  )
}

export default LayoutHome