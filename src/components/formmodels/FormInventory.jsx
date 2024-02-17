import Select from 'react-select'
import GlobalSelectbox from '../globalComponents/GlobalSelectbox'

const FormInventory = ({title,handleSubmit ,dateoptions ,startDateval,endDateval,totalVal,handleChangeStartDate ,handleChangeEndDate}) => {
  return (
    <div className='my-2'>
    <h2 className='text-center text-3xl font-bold text-main my-3'>{title}</h2>
        <form className='mt-5' onSubmit={handleSubmit} id='my-form'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-4'>
                <GlobalSelectbox 
                    title='تاريخ البداية'
                    name='startDate'
                    options={dateoptions}
                    isMaulti={false}
                    value={startDateval}
                    handleChange={handleChangeStartDate}
                    placeholder='اختر تاريخ البداية'
                />
                <GlobalSelectbox 
                    title='تاريخ النهاية'
                    name='endDate'
                    options={dateoptions}
                    isMaulti={false}
                    value={endDateval}
                    handleChange={handleChangeEndDate}
                    placeholder='اختر تاريخ النهاية'
                />
                {/* <div>
                    <label className='mb-2 block font-bold'>تاريخ البداية</label>
                    <Select
                        closeMenuOnSelect={true}
                        isClearable={true}
                        options={dateoptions}
                        name='startDate'
                        value={startDateval}
                        onChange={handleChangeStartDate}
                        placeholder='اختر تاريخ البداية'
                        styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'rgb(107, 114 ,128)',
                            padding: '0.3rem',
                            borderRadius: '14px',
                            }),
                        }}
                />
                </div> */}
                {/* <div>
                    <label className='mb-2 block font-bold'>تاريخ النهاية</label>
                    <Select
                        closeMenuOnSelect={true}
                        options={dateoptions}
                        isClearable={true}
                        name='endDate'
                        value={endDateval}
                        onChange={handleChangeEndDate}
                        placeholder='اختر تاريخ النهاية'
                        styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'rgb(107, 114 ,128)',
                            padding: '0.3rem',
                            borderRadius: '14px',
                            }),
                        }}
                />
                </div>  */}
                <div>
                    <label className='mb-2 block text-xs md:text-base font-bold'>اجمالي الدخل</label>
                    <input 
                       type='text'
                       disabled
                       value={totalVal}
                       className='border text-[6px] md:text-sm border-gray-500 2xl:p-1 rounded-xl w-full h-8 sm:h-10 2xl:h-12'
                    />
                </div> 
            </div>
        </form>
    </div>
  )
}

export default FormInventory