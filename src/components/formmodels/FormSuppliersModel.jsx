import GlobalInput from "../globalComponents/GlobalInput"

const FormSuppliersModel = ({handleSubmit ,handleChange ,codeVal ,nameVal ,phoneVal,nameExist ,checkPhone}) => {
     
    return (
        <div>
            <form onSubmit={handleSubmit} id='my-form'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <GlobalInput
                        title='كود المورد'
                        name='code'
                        value={codeVal}
                        placeholder='11223344556677'
                        handleChange={handleChange}
                        disabled
                   />
                    {/* <div>
                        <label className='mb-4 block'>كود المورد</label>
                        <input
                            type='text'
                            className='w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200'
                            name='code'
                            disabled
                            onChange={handleChange}
                            placeholder='مثال (123456789112288)'
                            value={codeVal}
                        />
                    </div> */}
                     <GlobalInput 
                            title='اسم المورد'
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
                    {/* <div>
                        <label className='mb-4 block'>اسم المورد</label>
                        <input
                            type='text'
                            className={`w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none border-gray-200 ${nameExist && 'border-red-500'}`}
                            name='name'
                            minLength='3'
                            maxLength='20'
                            required
                            autoComplete='new-password'
                            onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                            onInput={F => F.target.setCustomValidity('')}
                            onChange={handleChange}
                            placeholder='مثال (محمد احمد)'
                            value={nameVal}
                        />
                        {nameExist && <p className='text-red-500 mt-3'>هذا المورد موجود بالفعل</p>}
                    </div>  */}
                    {/* <div>
                        <label className='mb-4 block'>رقم الهاتف</label>
                        <input
                            type='text'
                            minLength="11" 
                            maxLength="11"
                            pattern="^01\d{9}$"
                            className={`w-full border px-4 h-14 rounded-2xl shadow-md focus:outline-none ${checkPhone ? 'border-red-500' : 'border-gray-200 '}`}
                            name='phone'
                            autoComplete='new-password'
                            placeholder='01123456789'
                            onChange={handleChange}
                            value={phoneVal}
                        />
                        {checkPhone && <p className='text-red-500 mt-3'> رقم الهاتف يبدأ ب (01) </p>}
                    </div> */}
                </div>   
            </form>
        </div>
  )
}

export default FormSuppliersModel