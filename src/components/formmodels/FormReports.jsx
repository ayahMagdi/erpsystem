import Select from 'react-select'
import GlobalSelectbox from '../globalComponents/GlobalSelectbox'

const FormReports = ({handleSubmit , codeoptions ,codeval ,handleChangeCodes ,nameoptions ,nameval ,handleChangeNames ,actionoptions ,actionval ,handleChangeActions}) => {
  return (
    <div>
    <form onSubmit={handleSubmit} id='my-form'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-4'>
            <GlobalSelectbox 
              title='كود الصنف'
              options={codeoptions}
              name='code'
              placeholder='اختر كود الصنف'
              handleChange={handleChangeCodes}
              value={codeval}
            />
            <GlobalSelectbox 
              title='اسم الصنف'
              options={nameoptions}
              name='name'
              placeholder='اختر اسم الصنف'
              handleChange={handleChangeNames}
              value={nameval}
            />
            <GlobalSelectbox 
              title='نوع الحركة'
              options={actionoptions}
              name='itemname'
              placeholder='اختر نوع الحركة'
              handleChange={handleChangeActions}
              value={actionval}
            />
            {/* <div>
                <label className='mb-2 block font-bold'>كود الصنف</label>
                <Select
                    closeMenuOnSelect={true}
                    // isMulti
                    options={codeoptions}
                    isClearable
                    name='code'
                    value={codeval}
                    onChange={handleChangeCodes}
                    placeholder='اختر كود الصنف'
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
                <label className='mb-2 block font-bold'>اسم الصنف</label>
                <Select
                    closeMenuOnSelect={true}
                    isClearable
                    options={nameoptions}
                    name='name'
                    value={nameval}
                    onChange={handleChangeNames}
                    placeholder='اختر اسم الصنف'
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
            {/* <div>
                <label className='mb-2 block font-bold'>نوع الحركة</label>
                <Select
                    closeMenuOnSelect={true}
                    options={actionoptions}
                    name='itemname'
                    isClearable
                    value={actionval}
                    onChange={handleChangeActions}
                    placeholder='اختر نوع الحركة'
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
        </div>
    </form>
  </div> 
  )
}

export default FormReports