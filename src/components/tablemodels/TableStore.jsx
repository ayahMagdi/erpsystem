import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/stateProvider'
import GlobalTableHead from '../globalComponents/GlobalTableHead'

const TableStore = ({filteredItems , isSearched ,checkSearch}) => {

 const {stores} = useStateValue()
 const [noItems ,setNoItems] = useState(false)

 const tableHead = ['كود المنتج' , 'اسم المنتج' , 'الوحدة' , 'سعر الداخل' , 'سعر الخارج' , 'الداخل' , 'الخارج' , 'المخزون' ,'الاجمالي']

 const calcStore = (q1 , q2) => {
   return q1 - q2
 }

 useEffect(() => {

    const checkItems = filteredItems?.length > 0 ? setNoItems(false) : setNoItems(true)

 }, [filteredItems])

  return (
    <div className={`my-5 mx-auto w-full border shadow overflow-y-auto`}>
        <table className="table-auto w-full text-center border" style={{borderCollapse: 'collapse'}}>
            <GlobalTableHead data={tableHead} />
            <tbody className={noItems && checkSearch > 0  ? 'hidden' : 'visible'}>
                {isSearched ? filteredItems?.map(e => (
                  <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                     <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.code}</td>
                     <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.name}</td>
                     <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.unit}</td>
                     <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.income}</td>
                     <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.outcome}</td>
                     <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.avlqty}</td>
                     <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.soldqty}</td>
                     <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{calcStore(e.avlqty , e.soldqty)}</td>
                     <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{calcStore(e.avlqty , e.soldqty) * e.income}</td>
                  </tr>
                ))
                : stores?.map(e => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.unit}</td>
                        <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.income}</td>
                        <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.outcome}</td>
                        <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.avlqty}</td>
                        <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{e.soldqty}</td>
                        <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{calcStore(e.avlqty , e.soldqty)}</td>
                        <td className="px-2 py-1 lg:px-6 lg:py-3 text-[6px] md:text-sm lg:text-base" style={{border: '1px solid #00000024'}}>{calcStore(e.avlqty , e.soldqty) * e.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TableStore