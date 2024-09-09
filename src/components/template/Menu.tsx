import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className=' w-72 h-screen'>
      <div className='flex flex-col pt-8 space-y-36 h-2/3 w-full '>
        <div className='flex flex-col justify-center items-center space-y-20'>
          <div>
            <Image
              src="/images/logo.svg"
              alt="Picture of the author"
              width={180}
              height={180}
              draggable={false}
            />
          </div>
          <div className='flex flex-col  justify-center items-center'>
            <span className='text-gray-500 text-xs'>Bem vindo,</span>
            <span className='text-sm'>Taylor Swift</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='space-y-4'>
            {/* Controle */}
            <div>
              <span>Controle</span>
              <Image
                src="/images/vetor_menu.png"
                alt="Picture of the author"
                width={200}
                height={200}
                draggable={false}
              />
              <nav >
                <ul className="space-y-4">
                  <li>
                    <Link href="/home/cadastrarusuario" className="hover:text-purple-800 transition-all flex items-center space-x-2 ">
                      <svg className='w-5' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span className='text-sm'>Cadastrar Usuario</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Funcionalidades */}
            <div>
              <span>Funcionalidades</span>
              <Image
                src="/images/vetor_menu.png"
                alt="Picture of the author"
                width={200}
                height={200}
                draggable={false}
              />
              <nav >
                <ul className="space-y-4">
                  <li>
                    <Link href="/home/cadastrarpessoa/dadosbasicos" className="hover:text-purple-800 transition-all flex items-center space-x-2 ">
                      <svg className='w-5' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span className='text-sm'>Cadastrar Pessoa</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home/visualizarpessoas" className="hover:text-purple-800 transition-all flex items-center space-x-2 ">
                      <svg className='w-5' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span className='text-sm'>Visualizar Pessoas</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home/registraratividade" className="hover:text-purple-800 transition-all flex items-center space-x-2 ">
                      <svg className='w-5' data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      <span className='text-sm'>Registrar Atividade</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu