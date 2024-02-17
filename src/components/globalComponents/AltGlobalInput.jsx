import React from 'react'

const AltGlobalInput = ({title,type,name,disabled,handleChange,placeholder,value,firstErr,firstErrMsg,reference,secondErr,secondErrMsg,edit}) => {
  return (
    <div>
        <label className='mb-2 block text-xs md:text-base font-bold'>{title}</label>
        <input
            type={type || 'text'}
            className={`w-full border p-1 text-xs md:text-base md:p-2 rounded-lg focus:border-2 focus:outline-none ${edit && 'border-2 border-main'} ${firstErr || secondErr ? 'border-red-500 focus:empty:border-red-500' : 'border-gray-500 focus:empty:border-main'}`}
            name={name}
            required
            autoComplete="off"
            disabled={disabled}
            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
            onInput={F => F.target.setCustomValidity('')}
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
            ref={reference || null}
        />
        {firstErr && <p className="text-sm text-red-500 m-0">{firstErrMsg}</p>}
        {secondErr && <p className="text-sm text-red-500 m-0">{secondErrMsg}</p>}
    </div>
  )
}

export default AltGlobalInput