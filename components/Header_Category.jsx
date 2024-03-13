'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'

const Header_Category = () => {

    const path = usePathname()

    const data = [
        {
            id: 1,
            name: 'Sports',

        },
        {
            id: 2,
            name: 'Travel',

        },
        {
            id: 3,
            name: 'Sports',

        },
        {
            id: 4,
            name: 'Sports',

        },
        {
            id: 5,
            name: 'Sports',

        }
    ]

    const [show, setShow] = useState(false)

    return (
        <div className='bg-[#c80000] text-white uppercase font-semibold relative'>
            <div className='px-8 flex justify-between items-center relative h-[48px]'>
                <div className='flex-wrap hidden lg:flex'>
                    <Link className={`px-6 font-medium py-[13px] ${path === '/' ? 'bg-[#00000026]' : ''}`} href={'/'} >Home</Link>
                    {
                        data.map((c, i) => <Link key={c.id} className={`px-6 font-medium py-[13px] ${path === c.name ? 'bg-[#00000026]' : ''}`} href={'/'} >{c.name}</Link>)
                    }
                </div>
                <div className='h-full w-[48px]'>
                    <div
                        onClick={() => {
                            setShow(!show)
                        }}
                        className={`text-xl ${show ? 'bg-[#00000026]' : ''} font-bold h-full w-full cursor-pointer justify-center flex items-center hover:bg-[#00000026]`}>
                        {
                            show ? <IoClose /> : <AiOutlineSearch />
                        }

                    </div>
                    <div className={`absolute lg:block transition-all text-slate-700 z-20 shadow-lg lg:right-[30px] top-[50px] w-full lg:w-auto left-0 ${show ? 'visible' : 'invisible'} `}>
                        <div className='p-3 bg-white'>
                            <div className='flex'>
                                <div className='w-[calc(100%-45px)] h-[40px]'>
                                    <input type="text" placeholder='search' className='h-full w-full p-2 border border-slate-300 outline-none bg-slate-100' />
                                </div>
                                <div className='w-[45px] hover:bg-red-700 cursor-pointer h-[40px] flex justify-center items-center bg-red-600 text-white text-xl'>
                                    <AiOutlineSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header_Category