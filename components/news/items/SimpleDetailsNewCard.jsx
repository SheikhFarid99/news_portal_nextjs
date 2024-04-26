import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SimpleDetailsNewCard = ({ type }) => {
    return (
        <div className='bg-white shadow'>
            <div className='group relative overflow-hidden'>
                <div className={`w-full ${type==='details-news'?'h-[300px]':'h-[250px]'} group-hover:scale-[1.1] transition-all duration-[1s]`}>
                    <Image className='' layout='fill' src={'https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696951679/news/btbfqrvjqhso6n842reb.jpg'} alt='images' />
                </div>
                <Link className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300' href={'#'}></Link>
                <div className='left-5 absolute bottom-4 flex justify-start items-start gap-x-2 text-white font-semibold gap-y-2'>
                    <div className='px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]'>Travel</div>
                    <div className='px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]'>Travel</div>
                </div>
            </div>
            <div className='p-5'>
                <Link className='text-[15px] font-semibold text-[#333333] hover:text-[#c80000]' href='#'>ABET accreditation reaffirms UTSA’s</Link>
                <div className='flex gap-x-2 text-xs font-normal text-slate-600'>
                    <span>October 6, 2023</span>
                    <span>Anamul Islam</span>
                </div>
               {
                type === 'details-news' &&  <p className='text-sm text-slate-600 pt-3'>Sparkling centuries from Kusal Mendis and Sadeera Samarawickrama helped Sri Lanka post 344/9 in Hyderabad on Tuesday (October 10). Mendis set a record enroute his stunning ton as he brought up three figures off just 65 balls - the fastest by a Sri Lankan in World Cups. He found support at the start from opener Pathum N</p>
               }
            </div>
        </div>
    )
}

export default SimpleDetailsNewCard