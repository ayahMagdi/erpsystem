import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Sales from '../components/handleinvoices/Sales';
import ConfirmSignout from '../components/ConfirmSignout';
import GlobalTitle from '../components/globalComponents/GlobalTitle';

const SalesPage = () => {

  const [logOut , setLogOut] = useState(false)

  const confirmLogOut = () => {setLogOut(() => true)}

  const cancelLogOut = () => {setLogOut(() => false)}

  return (
    <div>
      <div className="block 2xl:flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar logOut={confirmLogOut} />
          </div>
          <div className="w-5/5 2xl:w-4/5 px-[10px] 2xl:pl-8 h-screen flex flex-col">
            <GlobalTitle title='فاتورة المبيعات' />
            <Sales />
          </div>
          {logOut && <ConfirmSignout handleCancel={cancelLogOut} />}
      </div>
   </div>
  )
}

export default SalesPage