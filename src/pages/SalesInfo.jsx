import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Goback from '../components/Goback'
import { faClipboardCheck, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import Search from '../components/Search'
import ConfirmSignout from '../components/ConfirmSignout'

const SalesInfo = ({searchItem , search}) => {

  const categorys = [
    {title: 'فواتير الخارج' , icon: faClipboardCheck , url: '/homepage/salesinfo/outwardbills' , branch: 'salesList'},
    {title: 'جرد الخارج' , icon: faMoneyBillWave , url: '/homepage/salesinfo/inventoryoutcome' , branch: 'salesInventory'},
  ]

  const [logOut , setLogOut] = useState(false)

  const confirmLogOut = () => {setLogOut(() => true)}

  const cancelLogOut = () => {setLogOut(() => false)}

  const handleSearch = categorys.filter(category => 
    search && category.title.includes(search)
  )

  const setBranch = (branch) => {
    localStorage.setItem('branch' , branch)
  }

  return (
    <div>
    <div className="block 2xl:flex justify-start items-start w-full gap-10">
        <div className="w-1/5">
          <Sidebar logOut={confirmLogOut} />
        </div>
        <div className="w-5/5 2xl:w-4/5 px-[10px] 2xl:pl-8 h-screen flex flex-col mt-5">
        <Search 
            handleSearch={() => handleSearch}  
            searchItem={searchItem} 
            placeholder='ابحث بالاسم'
        />
        <div className='bg-white grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-5 justify-between items-center mt-4 cursor-pointer'>
            {handleSearch.length && search.length ? handleSearch?.map((e , i) => (
                <Category icon={e.icon} title={e.title} url={e.url} key={i} handelBranch={() => setBranch(e.branch)} />
              ))
              :categorys?.map((e , i) => (
                <Category icon={e.icon} title={e.title} url={e.url} key={i} handelBranch={() => setBranch(e.branch)} />
              ))}
        </div>
        <Goback />
        </div>
        {logOut && <ConfirmSignout handleCancel={cancelLogOut} />}
    </div>
  </div>
  )
}

export default SalesInfo