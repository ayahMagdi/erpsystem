import { useMemo, useState } from "react"
import Navbar from "../components/Navbar"
import TableSupplierbills from "../components/tablemodels/TableSupplierbills"
import { useStateValue } from "../context/stateProvider"
import isEqual from 'lodash/isEqual';
import Goback from "../components/Goback";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import ConfirmSignout from "../components/ConfirmSignout";
import GlobalTitle from "../components/globalComponents/GlobalTitle";

const SupplierBills = ({searchItem , search}) => {

  const {inwardBills} = useStateValue()
  const [logOut , setLogOut] = useState(false)

  const confirmLogOut = () => {setLogOut(() => true)}

  const cancelLogOut = () => {setLogOut(() => false)}

  const uniqueDataInvoice = useMemo(() => {
    const unique = [];

  inwardBills.forEach(item => {
    let exists = false;
    
    unique.forEach(u => {
      if(isEqual(u.invoice, item.invoice)) {
        exists = true;
      }
    });

    if(!exists) {
      unique.push(item);
    }
  });

  return unique;
 }, [inwardBills]);


  const handleSearch = uniqueDataInvoice.filter(item => 
    search && item?.supplierName.includes(search) || item?.invoice.toString().includes(search.toString())
  )

  return (
    <div>
      <div className="block 2xl:flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar logOut={confirmLogOut} />
          </div>
          <div className="w-5/5 2xl:w-4/5 px-[10px] 2xl:pl-8 h-screen flex flex-col">
             <GlobalTitle title='فواتير الموردين' />
            <Search handleSearch={() => handleSearch} searchItem={searchItem} placeholder='ابحث بالاسم او الكود' />
            <TableSupplierbills 
                isSearched={handleSearch.length && search.length} 
                filteredItems={handleSearch} 
                bills={uniqueDataInvoice} 
                name='اسم المورد'
                checkInvoice={false}
                allbills={inwardBills}
            />
            <Goback />
          </div>
          {logOut && <ConfirmSignout handleCancel={cancelLogOut} />}
      </div>
    </div>
  )
}

export default SupplierBills