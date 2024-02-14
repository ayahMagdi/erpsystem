import React from 'react'

const GlobalTableHead = ({black,data}) => {
  return (
    <thead className={`${black === 'black' ? 'bg-black' : 'bg-main'} sticky top-0 text-white border-b`}>
        <tr className='border-b border-slate-300'>
            {data?.map(e => (
                <th scope="col" style={{border: '1px solid #00000024'}} className={`${black === 'black' ? 'p-2 lg:px-5 lg:py-2 text-xs lg:text-base' : 'p-2 lg:px-6 lg:py-3 text-xs lg:text-base'}`}>{e}</th>
            ))}
        </tr>
    </thead>
  )
}

export default GlobalTableHead