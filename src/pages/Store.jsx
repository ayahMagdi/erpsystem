import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Goback from '../components/Goback'
import { faEdit, faStore } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'

const Store = ({searchItem , search}) => {

    const [categorys , setCategorys] = useState([
      {icon: faEdit , title: 'اضافة منتج' ,url: '/homepage/storepage/allproducts' },
      {icon: faStore , title: 'قائمة الاصناف' ,url: '/homepage/storepage/store' }
    ])

    const handleSearch = categorys.filter(category => 
      category.title.includes(search)
    )

  return (
    <div>
      <div className="flex justify-start items-start w-full gap-10">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 pl-8 mt-5">
          <Search handleSearch={() => handleSearch}  searchItem={searchItem} />
          <div className='bg-white grid grid-cols-5 gap-5 justify-between items-center mt-4 cursor-pointer'>
              {handleSearch.length && search.length ? handleSearch?.map((e , i) => (
                  <Category icon={e.icon} title={e.title} url={e.url} key={i} />
                ))
                :categorys?.map((e , i) => (
                  <Category icon={e.icon} title={e.title} url={e.url} key={i} />
                ))}
          </div>
          <Goback />
          </div>
      </div>
    </div>
  )
}

export default Store