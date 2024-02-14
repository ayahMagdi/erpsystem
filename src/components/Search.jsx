import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

const Search = ({handleSearch , searchItem,placeholder}) => {

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
     searchItem(searchTerm)
  },[searchTerm])

  return (
      <div className='relative w-7/12 sm:w-5/12 md:w-3/12'>
        <div>
          <input
            className='w-full p-2 sm:p-3 md:p-4 text-xs sm:text-sm lg:text-base border border-main rounded-3xl focus:outline-none'
            type='search'
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div
            onClick={handleSearch}
            className='absolute cursor-pointer left-0 w-14 sm:w-16 md:w-20 top-0 bg-main h-full text-sm sm:text-md md:text-lg rounded-e-3xl bg-gradient-to-bl from-main to-[rgb(51_159_247)] text-white flex justify-center items-center'
          >
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
  )
}

export default Search