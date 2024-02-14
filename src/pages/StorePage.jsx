import { useState } from 'react';
import ConfirmSignout from '../components/ConfirmSignout';
import Goback from '../components/Goback';
import Navbar from '../components/Navbar'
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';
import SignOut from '../components/SignOut';
import TableStore from '../components/tablemodels/TableStore';
import { useStateValue } from '../context/stateProvider';

const StorePage = ({search , searchItem}) => {

  const {stores} = useStateValue()
  const [logOut , setLogOut] = useState(false)

  const confirmLogOut = () => {setLogOut(() => true)}

  const cancelLogOut = () => {setLogOut(() => false)}

  const handleSearch = stores.filter(item => 
    search && item.code.includes(search)
  )
  return (
    <div className='max-h-screen'>
      <div className="block 2xl:flex justify-start items-start w-full gap-10 relative">
        <div className="w-1/5">
           <Sidebar logOut={confirmLogOut} />
        </div>
        <div className="w-5/5 pl-[10px] 2xl:pl-8 h-screen flex flex-col mr-[55px] 2xl:mr-0 2xl:w-4/5">
           <h2 className='text-center text-xl sm:text-2xl md:text-4xl font-bold my-6 text-main'>قائمة الاصناف</h2>
          <Search handleSearch={handleSearch} searchItem={searchItem} placeholder='ابحث بالكود' />
          <TableStore isSearched={handleSearch.length && search.length} filteredItems={handleSearch} checkSearch={search.length}  />
          <Goback />
        </div>
        {logOut && <ConfirmSignout handleCancel={cancelLogOut} />}
      </div>
    </div>
    
  )
}

export default StorePage