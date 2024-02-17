import { useState } from 'react'
import ConfirmSignout from '../components/ConfirmSignout'
import Goback from '../components/Goback'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import TableBalance from '../components/tablemodels/TableBalance'
import { useStateValue } from '../context/stateProvider'
import GlobalTitle from '../components/globalComponents/GlobalTitle'

const ClientBalance = ({search , searchItem ,getRecordReduction}) => {

    const {clientBalance} = useStateValue()
    const [logOut , setLogOut] = useState(false)

    const confirmLogOut = () => {setLogOut(() => true)}
  
    const cancelLogOut = () => {setLogOut(() => false)}

    const handleSearch = clientBalance?.filter(item =>
       search && item?.code.includes(search) 
     )

     const totalbalance = clientBalance.map((e) => parseInt(e.remaining)).reduce((a, b)=> a+b, 0);


  return (
   <div>
     <div className="block 2xl:flex justify-start items-start w-full gap-10">
       <div className="w-1/5">
          <Sidebar logOut={confirmLogOut} />
       </div>
       <div className="w-5/5 2xl:w-4/5 px-[10px] 2xl:pl-8 h-screen flex flex-col">
        <GlobalTitle title='رصيد العملاء' />
       <Search handleSearch={() => handleSearch} searchItem={searchItem} placeholder='ابحث بالكود' />
       <TableBalance 
          nameText='اسم العميل'
          codeText='كود العميل'
          supplierList={search && handleSearch.length === 0 ? [] : clientBalance} 
          isSearched={handleSearch.length && search.length} 
          filteredItems={handleSearch} 
          totalbalance={totalbalance}
          checkSearch={search?.length} 
          branch='clientsBills'
          url='/homepage/Accountstatements/clientbalance/clientreduction'
          getRecordReduction={getRecordReduction}
      />
       <div className='text-center mb-5'>
           <h3 className='text-xs md:text-base'>اجمالي باقي الحساب</h3>
           <div className='border w-full text-xs p-4 rounded-md border-main mt-3 font-bold md:text-lg'>{totalbalance}</div>
       </div>
      <Goback />
       </div>
       {logOut && <ConfirmSignout handleCancel={cancelLogOut} />}
     </div>
   </div>
  )
}

export default ClientBalance