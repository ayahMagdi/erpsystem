
const SuccessMsg = ({title}) => {

  return (
      <div 
          className='z-30 transition-all fixed top-0 left-2/4 -translate-x-2/4 w-3/4 md:w-1/4 p-2 md:p-4 border border-green-400 rounded-lg bg-green-50 m-4 shadow-md text-gray-700'>
           <span className='text-xs md:text-lg'>{title}</span>
       </div>
  )
}

export default SuccessMsg