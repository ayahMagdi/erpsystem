import Barcode from 'react-barcode';
import Select from 'react-select';
import GlobalInput from '../globalComponents/GlobalInput';

const FormItemsModel = ({handleSubmit,defaultVal,options,isDisabled,handleChange,handleSelectChange,codeExist,nameExist,invalidPrice ,codeVal ,barcodeVal ,nameVal ,unitVal ,incomeVal ,outcomeVal}) => {

  return (
    <div>
        <form onSubmit={handleSubmit} id='my-form'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <GlobalInput
                    title='كود المنتج'
                    name='code'
                    err={codeExist}
                    value={codeVal}
                    errMsg='هذا الكود مستخدم من قبل'
                    placeholder='78988775544'
                    handleChange={handleChange}
                />
                {/* <div>
                    <label className='mb-2 md:mb-4 block text-xs md:text-base'>كود المنتج</label>
                    <input
                        type='text'
                        className={`w-full border px-4 h-10 text-xs md:text-sm 2xl:text-base md:h-12 2xl:h-14 rounded-2xl shadow-md focus:outline-none border-gray-200 ${codeExist && 'border-red-500'}`}
                        name='code'
                        required
                        autoComplete='new-password'
                        onChange={handleChange}
                        placeholder='مثال (123456789112288)'
                        value={codeVal}
                    />
                    {codeExist && <p className='text-red-500 mt-3'>هذا الكود مستخدم من قبل</p>}
                </div> */}
                <div>
                    <label className='mb-2 md:mb-4 block text-xs md:text-base'>الباركود</label>
                    <div className='w-full border px-4 h-10 text-xs md:text-sm 2xl:text-base md:h-12 2xl:h-14 rounded-2xl shadow-md border-gray-200'>
                    {codeVal ? (
                        <Barcode value={codeVal} displayValue={false} height={35} />
                    ) : (
                        <p></p>
                    )}
                    </div>
                </div>
                <GlobalInput 
                    title='اسم المنتج'
                    name='name'
                    err={nameExist}
                    value={nameVal}
                    errMsg='هذا الاسم مستخدم من قبل'
                    placeholder='ايه مجدي'
                    handleChange={handleChange}
                    minLength='3'
                    maxLength='30'
                />
                {/* <div>
                    <label className='mb-2 md:mb-4 block text-xs md:text-base'>اسم المنتج</label>
                    <input
                        type='text'
                        className={`w-full border px-4 h-10 text-xs md:text-sm 2xl:text-base md:h-12 2xl:h-14 rounded-2xl shadow-md focus:outline-none border-gray-200 ${nameExist && 'border-red-500'}`}
                        name='name'
                        required
                        minLength='3'
                        maxLength='30'
                        autoComplete='new-password'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        onChange={handleChange}
                        placeholder='مثال (اسم المنتج)'
                        value={nameVal}
                    />
                    {nameExist && <p className='text-red-500 mt-3'>هذا المنتج موجود بالفعل</p>}
                </div>  */}
                <div>
                    <label className='mb-2 md:mb-4 block text-xs md:text-base'>الوحدة</label>
                    <Select 
                        name="unit" 
                        closeMenuOnSelect={true}
                        value={unitVal} 
                        isClearable={true}
                        isDisabled={isDisabled}
                        onChange={handleSelectChange}
                        options={options}
                        getOptionValue={(option) => option.value}
                        placeholder={defaultVal}
                        className='w-full rounded-2xl shadow-md'
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: 'rgb(229 231 235)',
                                borderRadius: '1rem',
                                height: '2.5rem',
                                padding: '0 1rem',
                                '@media (min-width: 640px)': {
                                height: '3rem',
                                fontSize: '0.75rem',
                                },
                                '@media (min-width: 1536px)': {
                                height: '3.5rem',
                                fontSize: '1rem',
                                },
                            }),
                            }}
                            theme={theme => ({
                            ...theme,
                            colors: {
                                ...theme.colors,
                                neutral50: '#a9a9a9',
                            },
                        })}
                    />
                </div> 
                <GlobalInput 
                    title='سعر الداخل'
                    name='income'
                    value={incomeVal}
                    placeholder='5000'
                    handleChange={handleChange}
                    maxLength='6'
                />
                <GlobalInput 
                    title='سعر الخارج'
                    name='outcome'
                    err={invalidPrice}
                    value={outcomeVal}
                    errMsg='يجب ان يكون سعر الخارج اكبر من سعر الداخل'
                    placeholder='5100'
                    handleChange={handleChange}
                    maxLength='6'
                /> 
                {/* <div>
                    <label className='mb-2 md:mb-4 block text-xs md:text-base'>سعر الداخل</label>
                    <input
                        type='text'
                        className={`w-full border px-4 h-10 text-xs md:text-sm 2xl:text-base md:h-12 2xl:h-14 rounded-2xl shadow-md focus:outline-none border-gray-200`}
                        name='income'
                        required
                        autoComplete='new-password'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='5000'
                        onChange={handleChange}
                        value={incomeVal}
                        maxLength='6'
                    />
                </div> */}
                {/* <div>
                    <label className='mb-2 md:mb-4 block text-xs md:text-base'>سعر الخارج</label>
                    <input
                        type='text'
                        className={`w-full border px-4 h-10 text-xs md:text-sm 2xl:text-base md:h-12 2xl:h-14 rounded-2xl shadow-md focus:outline-none border-gray-200 ${invalidPrice && 'border-red-500'}`}
                        name='outcome'
                        required
                        autoComplete='new-password'
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='6000'
                        onChange={handleChange}
                        value={outcomeVal}
                        maxLength='6'
                    />
                    {invalidPrice && <p className='text-red-500 mt-3'>يجب ان يكون سعر الخارج اكبر من سعر الداخل</p>}
                </div> */}
            </div>   
        </form>
    </div>
  )
}

export default FormItemsModel