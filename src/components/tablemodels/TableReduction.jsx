import GlobalTableHead from "../globalComponents/GlobalTableHead"

const TableReduction = ({listReduction}) => {

    const tableHead=['كود المورد','اسم المورد','التاريخ','قيمة التنزيل']

  return (
    <div className={`my-5 mx-auto w-full border shadow overflow-y-auto`}>
        <table className="table-auto w-full text-center border h-fit" style={{borderCollapse: 'collapse'}}>
            <GlobalTableHead data={tableHead} />
            <tbody>
                {listReduction?.map((e , i) => (
                    <tr className='border-b border-slate-300 even:bg-tablerow' key={i}>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.name}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.code}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.date}</td>
                        <td className="px-2 py-1 2xl:px-6 2xl:py-3 text-[6px] md:text-sm 2xl:text-base" style={{border: '1px solid #00000024'}}>{e.reduction}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TableReduction