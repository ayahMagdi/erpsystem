import React from 'react'

const GlobalInput = ({title,name,placeholder,value,err,errMsg,handleChange,minLength,maxLength,disabled,pattern}) => {
  return (
    <div>
        <label className='mb-2 md:mb-4 block text-xs md:text-base'>{title}</label>
        <input
            type='text'
            className={`w-full border px-4 h-10 text-xs md:text-sm 2xl:text-base md:h-12 2xl:h-14 rounded-2xl shadow-md focus:outline-none border-gray-200 ${err && 'border-red-500'}`}
            name={name}
            required
            autoComplete='off'
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
            minLength={minLength}
            maxLength={maxLength}
            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
            onInput={F => F.target.setCustomValidity('')}
            disabled={disabled}
            pattern={pattern}
        />
        {err && <p className='text-red-500 mt-3'>{errMsg}</p>}
    </div>
  )
}

export default GlobalInput