import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const Buttons = ({urlAdd, title , branch , mr ,handlePrint}) => {

    const handleAdd = () => {
        localStorage.setItem('branch' , branch)
    }
    
  return (
    <div className='2xl:mt-0'>
        <div className={`flex justify-start gap-4 h-[45px] md:h-[75px] ${mr}`}>
            <Link to={`/homepage/${urlAdd}`} onClick={handleAdd}>
                <div className={`bg-main text-white rounded-md text-center h-full md:py-4 cursor-pointer leading-[1.3] w-20 md:w-24 lg:w-32 text-sm font-bold`}>
                    <FontAwesomeIcon icon={faSquarePlus} className='text-[8px] md:text-sm' />
                    <h3 className='text-[8px] md:text-[11px] lg:text-base mt-1'>{`اضافة ${title}`}</h3>
                </div>
            </Link>
            <div onClick={handlePrint}>
                <div className={`bg-white border-2 rounded-md text-center h-full md:py-4 cursor-pointer leading-[1.3] w-20 md:w-24 lg:w-32 text-sm font-bold border-main text-main`}>
                    <FontAwesomeIcon icon={faPrint} className='text-[8px] md:text-sm' />
                    <h3 className='text-[8px] md:text-[11px] lg:text-base mt-1'>طباعة</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buttons