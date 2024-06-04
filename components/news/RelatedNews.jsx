import React from 'react'
import Title from '../Title'
import SimpleDetailsNewCard from './items/SimpleDetailsNewCard'

const RelatedNews = ({ news,type }) => {
    return (
        <div className='w-full pb-8 mt-5'>
            <div className='flex flex-col w-full gap-y-[14px]'>
                <Title title="Related news" />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3'>
                    {
                        news.length > 0 && news.map((item, i) => {
                            if (i < 4) {
                                return <SimpleDetailsNewCard news={item} type={type} item={item} key={i} height={230} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RelatedNews