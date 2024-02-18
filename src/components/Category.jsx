import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Category = ({icon ,title , url , handelBranch}) => {

  return (
   <Link to={url}>
      <div className='flex justify-center items-center bg-main rounded-md text-white' onClick={handelBranch}>
        <div className='text-center py-4 px-2 md:py-9 md:px-6'>
            <FontAwesomeIcon icon={icon} className='text-xs lg:text-lg' />
            <h3 className='text-xs lg:text-lg md:pt-2'>{title}</h3>
        </div>
      </div>
   </Link>
  )
}

export default Category