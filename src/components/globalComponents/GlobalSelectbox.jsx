import Select from 'react-select'

const GlobalSelectbox = ({title,options,handleChange,placeholder,value,name,isMaulti}) => {
  return (
    <div>
        <label className='mb-2 block text-xs md:text-base font-bold'>{title}</label>
        <Select
            closeMenuOnSelect={true}
            isClearable={true}
            isMulti={isMaulti}
            options={options}
            name={name}
            value={value}
            onChange={handleChange}
            className='text-[6px] md:text-sm '
            placeholder={placeholder}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: 'rgb(107, 114 ,128)',
                    borderRadius: '1rem',
                    height: '2rem',
                    // padding: '0.3rem',
                    '@media (min-width: 640px)': {
                    height: '2.5rem',
                    // fontSize: '0.7rem',
                    },
                    '@media (min-width: 1536px)': {
                    height: '3rem',
                    padding: '0.3rem'
                    // fontSize: '1rem',
                    },
                }),
            }}
        />
   </div>
  )
}

export default GlobalSelectbox