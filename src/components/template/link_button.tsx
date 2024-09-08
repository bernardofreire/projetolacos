import React from 'react'
import Link from 'next/link'

const link_button = (props: any) => {
    return (
        <div>
            <li>
                <Link href="/home/cadastrarpessoa/dadosbasicos" className="hover:text-purple-800 transition-all flex items-center space-x-2 ">
                    <svg className='w-5' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d={props.svg} stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className='text-sm'>{props.texto}</span>

                </Link>
            </li>
        </div>
    )
}

export default link_button

