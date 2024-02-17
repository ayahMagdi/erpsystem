import Select from 'react-select'
import GlobalSelectbox from '../globalComponents/GlobalSelectbox'

const FormFilter = (
    {invoicesoptions,dateoptions,handleChangeInvoices,name,nameplaceholder,handleChangeDates,handleChangeSuppliers,handleChangeItems,supplieroptions,itemoptions,handleSubmit, itemname,suppliername,invoiceval,dateval}
) => {

  return (
    <div>
      <form onSubmit={handleSubmit} id='my-form'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-4'>
              <GlobalSelectbox 
                 title='رقم الفاتورة'
                 name='invoice'
                 options={invoicesoptions}
                 isMaulti
                 value={invoiceval}
                 handleChange={handleChangeInvoices}
                 placeholder='اختر رقم الفاتورة'
              />
              <GlobalSelectbox 
                 title='التاريخ'
                 name='date'
                 options={dateoptions}
                 isMaulti
                 value={dateval}
                 handleChange={handleChangeDates}
                 placeholder='اختر التاريخ'
              />
              <GlobalSelectbox 
                 title={name}
                 name='suppliername'
                 options={supplieroptions}
                 value={suppliername}
                 handleChange={handleChangeSuppliers}
                 placeholder={nameplaceholder}
                 isMaulti
              />
              <GlobalSelectbox 
                 title='اسم المنتج'
                 name='itemname'
                 options={itemoptions}
                 isMaulti
                 value={itemname}
                 handleChange={handleChangeItems}
                 placeholder='اختر اسم المنتج'
              />
              {/* <div>
                  <label className='mb-2 block font-bold'>رقم الفاتورة</label>
                  <Select
                      closeMenuOnSelect={true}
                      isMulti
                      options={invoicesoptions}
                      name='invoice'
                      value={invoiceval}
                      onChange={handleChangeInvoices}
                      placeholder='اختر رقم الفاتورة'
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
                  <label className='mb-2 block font-bold'>التاريخ</label>
                  <Select
                      closeMenuOnSelect={true}
                      isMulti
                      options={dateoptions}
                      name='date'
                      value={dateval}
                      onChange={handleChangeDates}
                      placeholder='اختر التاريخ'
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
                  <label className='mb-2 block font-bold'>{name}</label>
                  <Select
                      closeMenuOnSelect={true}
                      isMulti
                      options={supplieroptions}
                      name='suppliername'
                      value={suppliername}
                      onChange={handleChangeSuppliers}
                      placeholder={nameplaceholder}
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
                  <label className='mb-2 block font-bold'>اسم المنتج</label>
                  <Select
                      closeMenuOnSelect={true}
                      isMulti
                      options={itemoptions}
                      name='itemname'
                      value={itemname}
                      onChange={handleChangeItems}
                      placeholder='اختر اسم المنتج'
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

export default FormFilter