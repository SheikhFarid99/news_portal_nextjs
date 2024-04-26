import React from 'react'
import Title from '../Title'
import SimpleDetailsNewCard from './items/SimpleDetailsNewCard'
const DetailsNewsRow = ({category,type}) => {
    return (
        <div className='w-full flex flex-col gap-[14px] pr-2'>
            <Title title={category} />
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                <SimpleDetailsNewCard type={type} />
            </div>
        </div>
    )
}

export default DetailsNewsRow