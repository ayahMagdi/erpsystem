import React from 'react'
import AltGlobalInput from '../globalComponents/AltGlobalInput'

const FormExpenses = ({handleSubmit ,handleChange ,dateVal ,totalVal ,reasonVal}) => {
  return (
    <div>
        <form className='mt-10' onSubmit={handleSubmit} id='my-form'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
           <div>
                <div className='mb-3'>
                    <label className='mb-4 md:mb-2 block text-xs md:text-base font-bold'>التاريخ</label>
                    <input
                        type='date'
                        className='w-full border px-4 h-10 2xl:h-14 rounded-2xl shadow-sm focus:outline-none border-gray-500'
                        name='date'
                        onChange={handleChange}
                        placeholder='20/10/2020'
                        value={dateVal}
                    />
                </div> 
                <div>
                    <label className='mb-4 md:mb-2 block text-xs md:text-base font-bold'>قيمة المصروف</label>
                    <input
                        type='text'
                        className='w-full border px-4 h-10 2xl:h-14 rounded-2xl shadow-sm focus:outline-none border-gray-500'
                        name='total'
                        required
                        onChange={handleChange}
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='مثال (500)'
                        value={totalVal}
                        autoComplete='new-password'
                        maxLength='6'
                    />
                </div>
           </div>
           <div>
               <div>
                    <label className='mb-2 md:mb-2 block text-xs md:text-base font-bold'>سبب الصرف</label>
                    <textarea
                        className='w-full resize-none border p-4 h-20 md:h-32 2xl:h-40 rounded-2xl shadow-sm focus:outline-none border-gray-500'
                        name='reason'
                        onChange={handleChange}
                        placeholder='فاتورة الكهربا'
                        value={reasonVal}
                        autoComplete='new-password'
                    />
                </div>
           </div>
         </div> 
       </form>
   </div>
  )
}

export default FormExpenses