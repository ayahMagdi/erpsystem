import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

const SignOut = ({logOut}) => {
    
  return (
    <div onClick={logOut}>
      <div className='flex cursor-pointer gap-3 px-[15px] py-[10px] 2xl:py-[6px] 2xl:px-6 font-bold items-center justify-center 2xl:justify-start'>
        <div>
          <FontAwesomeIcon 
            icon={faSignOut} 
            className='rotate-180 text-white text-xl font-light' 
          />
        </div>
        <h2 className='hidden 2xl:block'>تسجيل الخروج</h2>
      </div>
    </div>
  )
}

export default SignOut