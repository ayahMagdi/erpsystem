import { useState } from "react"
import ConfirmSignout from "../components/ConfirmSignout"
import Sidebar from "../components/Sidebar"
import AddClient from "../components/handleclients/AddClient"
import GlobalTitle from "../components/globalComponents/GlobalTitle"

const AddClientPage = ({isAdded}) => {

  const [logOut , setLogOut] = useState(false)

  const confirmLogOut = () => {setLogOut(() => true)}

  const cancelLogOut = () => {setLogOut(() => false)}

  return (
    <div className="block 2xl:flex justify-start items-start w-full gap-10">
      <div className="w-1/5">
         <Sidebar logOut={confirmLogOut} />
      </div>
      <div className="w-5/5 2xl:w-4/5 px-[10px] 2xl:pl-8 h-screen">
         <GlobalTitle title='اضافة عميل جديد' />
         <AddClient isAdded={isAdded} />
      </div>
      {logOut && <ConfirmSignout handleCancel={cancelLogOut} />}
    </div>
  )
}

export default AddClientPage