
const ModelBtns = ({handlecancel , title , cancelTitle , margin ,handleRegistration ,form ,bigOne}) => {
  return (
    <div className={`flex justify-center gap-2 md:gap-6 ${margin}`}>
        <button 
              className={`bg-main text-white rounded-3xl cursor-pointer w-24 py-2 ${bigOne === 'bigOne' ? 'text-sm md:w-60 md:py-3 md:text-lg' : 'text-xs md:text-base md:w-40' }`}
              form={form} type="submit"
              onClick={handleRegistration}
        >
           {title}
        </button>
        <button 
          className={`border-2 border-red-500 rounded-3xl cursor-pointer bg-white text-red-500 w-24 py-2 ${bigOne === 'bigOne' ? 'text-sm md:w-60 md:py-3 md:text-lg' : 'text-xs md:text-base md:w-40' }`}
          onClick={handlecancel}
        >
            {cancelTitle}
        </button>
   </div>
  )
}

export default ModelBtns