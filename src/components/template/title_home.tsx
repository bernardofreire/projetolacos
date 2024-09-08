import React from 'react'

const title_home = (props: any) => {
    return (
        <div className='bg-gray-700 h-1/6 pt-24 pl-20'>
            <span className='text-3xl font-semibold'>{props.titulo}</span>
        </div>
    )
}

export default title_home