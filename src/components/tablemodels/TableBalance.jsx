import { faPlusMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalTableHead from '../globalComponents/GlobalTableHead'

const TableBalance = ({supplierList ,checkSearch,codeText,branch ,nameText ,filteredItems ,url , isSearched ,totalbalance ,getRecordReduction}) => {

    const [noItems ,setNoItems] = useState(false)
    const navigate = useNavigate();
   
    useEffect(() => {
   
       const checkItems = filteredItems?.length > 0 ? setNoItems(false) : setNoItems(true)
   
    }, [filteredItems])

    const handleReduction = (e) => {
        getRecordReduction(e)
        navigate(`${url}/${e.code}`)
        localStorage.setItem('branch' , branch)
    }

    const tableHead=[codeText,nameText,'اجمالي الفواتير','اجمالي التنزيل','باقي الحساب','تنزيل الحساب']

  return (
        <div className={`my-5 mx-auto w-full border shadow overflow-y-auto`}>
            <table className="table-auto w-full text-center border" style={{borderCollapse: 'collapse'}}>
                <GlobalTableHead data={tableHead} />
                <tbody className={noItems && checkSearch?.length > 0 ? 'hidden' : 'visible' }>
                    {isSearched ? filteredItems?.map(e => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.total}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.reduction}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.remaining}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 cursor-pointer" style={{border: '1px solid #00000024'}} onClick={() =>handleReduction(e)}>
                            <FontAwesomeIcon icon={faPlusMinus} className='text-[6px] md:text-sm 2xl:text-base' />
                        </td>
                    </tr>
                    ))
                    : supplierList?.map(e => (
                        <tr className='border-b border-slate-300 even:bg-tablerow' key={e.code}>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.total}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.reduction}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.remaining}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 cursor-pointer" style={{border: '1px solid #00000024'}} onClick={() =>handleReduction(e)}>
                            <FontAwesomeIcon icon={faPlusMinus} className='text-[6px] md:text-sm 2xl:text-base' />
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default TableBalance