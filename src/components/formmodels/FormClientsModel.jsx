import GlobalInput from "../globalComponents/GlobalInput"

const FormClientsModel = ({handleSubmit ,title ,handleChange,checkPhone ,codeVal,nameExist ,nameVal ,phoneVal ,addressVal}) => {
  return (
    <div>
       <form onSubmit={handleSubmit} id='my-form'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <GlobalInput
                        title='كود العميل'
                        name='code'
                        value={codeVal}
                        placeholder='11223344556677'
                        handleChange={handleChange}
                        disabled
                   />
                      <GlobalInput 
                            title='اسم العميل'
                            name='name'
                            err={nameExist}
                            value={nameVal}
                            errMsg='هذا المورد موجود بالفعل'
                            placeholder='ايه مجدي'
                            handleChange={handleChange}
                            minLength='3'
                            maxLength='30'
                    />
                     <GlobalInput 
                            title='رقم الهاتف'
                            name='phone'
                            err={checkPhone}
                            value={phoneVal}
                            errMsg='رقم الهاف يبدأ ب (01)'
                            placeholder='01201201201'
                            handleChange={handleChange}
                            minLength='11'
                            maxLength='11'
                            pattern="^01\d{9}$"
                    />
                    <GlobalInput 
                            title='العنوان'
                            name='address'
                            value={addressVal}
                            placeholder='مصر محافظة الشرقية'
                            handleChange={handleChange}
                            minLength='3'
                            maxLength='30'
                    />
                {/* <div>
                    <label className='mb-4 block'>العنوان</label>
                    <input
                        type='text'
                        className='w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200'
                        name='address'
                        minLength='3'
                        maxLength='30'
                        autoComplete='new-password'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='مصر محافظة الشرقية'
                        onChange={handleChange}
                        value={addressVal}
                    />
                </div> */}
            </div>   
       </form>
    </div> 
  )
}

export default FormClientsModel