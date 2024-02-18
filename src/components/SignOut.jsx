import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

const SignOut = ({logOut}) => {
    
  return (
    <div onClick={logOut}>
      <div className='flex cursor-pointer gap-3 py-[6px] px-6 font-bold items-center justify-start'>
        <div>
          <FontAwesomeIcon 
            icon={faSignOut} 
            className='rotate-180 text-white font-light text-xs 2xl:text-xl' 
          />
        </div>
        <h2 className='text-xs 2xl:text-base'>تسجيل الخروج</h2>
      </div>
    </div>
  )
}

export default SignOut