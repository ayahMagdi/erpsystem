import React from 'react'
import AltGlobalInput from '../globalComponents/AltGlobalInput'

const FormReduction = ({handleSubmit,codeText,codeval,nameval,nameText,dateval,handleChange,reductionval,checkTotal,checkValue}) => {
  return (
    <div>
        <form onSubmit={handleSubmit} id='my-form'>
            <div className={`grid grid-cols-2 gap-2 md:gap-6`}>
                <AltGlobalInput 
                   title={codeText}
                   disabled
                   name='code'
                   value={codeval}
                />
                <AltGlobalInput 
                   title={nameText}
                   disabled
                   name='name'
                   value={nameval}
                />
                <AltGlobalInput 
                   title='التاريخ'
                   name='supplierCode'
                   value={dateval}
                   handleChange={handleChange}
                   disabled
                />
                <AltGlobalInput 
                   title='قيمة التنزيل'
                   name='reduction'
                   value={reductionval}
                   handleChange={handleChange}
                   placeholder='1000'
                   firstErr={checkTotal}
                   secondErr={checkValue}
                   firstErrMsg='لا يمكن ان تكون قيمة التنزيل اكبر من باقي الحساب'
                   secondErrMsg='ادخل قيمة التنزيل'
                />
                {/* <div>
                    <label className='mb-2 block font-bold'>{codeText}</label>
                    <input
                        type='text'
                        className='w-full border p-3 rounded-lg border-gray-500 focus:outline-none'
                        name='code'
                        value={codeval}
                        disabled
                    />
                </div> */}
                {/* <div>
                    <label className='mb-2 block font-bold'>{nameText}</label>
                    <input
                        type='text'
                        className='w-full border p-3 rounded-lg border-gray-500 focus:outline-none'
                        name='name'
                        value={nameval}
                        disabled
                    />
                </div>  */}
                {/* <div>
                    <label className='mb-2 block font-bold'>التاريخ</label>
                    <input
                        type='text'
                        className='w-full border p-3 rounded-lg border-gray-500 focus:outline-none'
                        name='supplierCode'
                        onChange={handleChange}
                        value={dateval}
                    />
                </div> */}
                {/* <div>
                    <label className='mb-2 block font-bold'>قيمة التنزيل</label>
                    <input
                        type='text'
                        className={`w-full border p-3 rounded-lg focus:outline-none ${checkTotal || checkValue ? 'border-red-500' : 'border-gray-500'}`}
                        name='reduction'
                        placeholder='1000'
                        required
                        autoComplete='new-password'
                        value={reductionval}
                        onChange={handleChange}
                    />
                    {checkTotal && <p className="text-sm text-red-500 mt-2">لا يمكن ان تكون قيمة التنزيل اكبر من باقي الحساب</p>}
                    {checkValue && <p className="text-sm text-red-500 mt-2">ادخل قيمة التنزيل</p>}
                </div> */}
            </div>  
        </form>
    </div> 
  )
}

export default FormReduction