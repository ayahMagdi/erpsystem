import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import TablePrintDataProducts from '../tablemodels/TablePrintDataProducts'
import { useReactToPrint } from 'react-to-print';

const PrintData = ({handleClose ,show , data}) => {

    const printableRef = useRef();
    const handlePrintt = useReactToPrint({
      content: () => printableRef.current,
    });

  return (
    <div className='bg-popup fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-30'>
            <div className='bg-white p-5 md:p-8 rounded-lg w-11/12 md:w-7/12 relative'>
                <div onClick={handleClose} className="border-2 rounded-full flex justify-center items-center h-5 md:h-7 w-5 md:w-7 cursor-pointer border-white bg-zinc-950 text-white absolute -top-1 md:-top-3 -right-1 md:-right-3">
                  <FontAwesomeIcon icon={faClose} className='text-xs md:text-base' />
                </div>
                <div ref={printableRef} className=" md:px-6 pt-4">
                    <TablePrintDataProducts data={data} show={show} />
                </div>
                <button onClick={handlePrintt} className="mx-auto w-24 md:w-40 p-2 text-xs md:text-base md:p-3 block rounded-md bg-zinc-950 text-white">طباعة</button>
            </div>
    </div>
  )
}

export default PrintData