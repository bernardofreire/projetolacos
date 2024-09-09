import React from 'react'

const title_home = (props: any) => {
    return (
        <div className='bg-gray-700 w-full h-1/6 pt-24 pl-20 pb-28'>
            <span className='text-3xl font-semibold pr-12 bg-red-500'>{props.titulo}</span>
            <span className=' font-extralight'>{props.etapa}</span>
        </div>
    )
}

export default title_home