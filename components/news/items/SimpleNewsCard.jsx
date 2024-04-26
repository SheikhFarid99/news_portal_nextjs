import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SimpleNewsCard = ({ item, type }) => {
    return (
        <div className='group relative'>
            <div className='overflow-hidden'>
                <div className={`${type ? 'h-[270px] sm:h-[470px]' : 'h-[228px]'} w-full group-hover:scale-[1.1] transition-all duration-[1s]`}>
                    <Image className='' layout='fill' src={'https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696951679/news/btbfqrvjqhso6n842reb.jpg'} alt='images' />
                </div>
            </div>
            <Link className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300' href={'#'}></Link>
            <div className='left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2'>
                <div className='px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]'>Travel</div>
                <h2 className='text-xl'>ABET accreditation reaffirms UTSA’s</h2>
                <div className='flex gap-x-2 text-sm font-normal'>
                    <span>October 6, 2023</span>
                    <span>Anamul Islam</span>
                </div>
            </div>
        </div>
    )
}

export default SimpleNewsCard