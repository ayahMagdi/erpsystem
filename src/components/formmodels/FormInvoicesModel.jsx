import { useEffect, useRef } from "react"
import AltGlobalInput from "../globalComponents/AltGlobalInput"

const FormInvoicesModel = (
     {handleSubmit,returns,purchasErr,existingReturn,emptyPurchas, edit,handleChange,supplierErr,itemErr,qtyErr,codeExist,emptyCode,nameText,codeText,qtyZero,errorText,avlQty,purchasVal,existing,dateVal,supplierCodeVal,supplierNameVal,itemCodeVal,itemNameVal,unitVal,qtyVal,priceVal,totalVal}
 ) => {

    const userRef = useRef()

    useEffect(() => {
        userRef.current.focus()
      } , [])

  return (
    <div>
        <form className='mt-5' onSubmit={handleSubmit} id='my-form'>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 ${supplierErr || itemErr || codeExist || qtyErr ? 'mb-1' : 'mb-4'}`}>
                <AltGlobalInput 
                    title='رقم الفاتورة'
                    name='purchas'
                    value={purchasVal}
                    firstErr={purchasErr}
                    placeholder='112233'
                    handleChange={handleChange}
                    disabled={!returns || existingReturn}
                    firstErrMsg='رقم الفاورة غلط'
                    reference={returns ? userRef : null} 
                />
                <AltGlobalInput 
                    title='التاريخ'
                    name='date'
                    value={dateVal}
                    placeholder='30/3/2024'
                    handleChange={handleChange}
                    disabled
                />
                 <AltGlobalInput 
                    title={codeText}
                    name='supplierCode'
                    value={supplierCodeVal}
                    firstErr={supplierErr}
                    placeholder='112233'
                    handleChange={handleChange}
                    disabled={edit || existing || returns}
                    firstErrMsg={errorText}
                    reference={returns ? null : userRef}
                />
                 <AltGlobalInput 
                    title={nameText}
                    name='supplierName'
                    value={supplierNameVal}
                    placeholder='ايه مجدي'
                    handleChange={handleChange}
                    disabled
                />
                {/* <div>
                    <label className='mb-2 block font-bold'>رقم الفاتورة</label>
                    <input
                        type='text'
                        className={`w-full border p-2 rounded-lg focus:border-2 focus:outline-none ${purchasErr ? 'border-red-500 focus:empty:border-red-500' : 'border-gray-500 focus:empty:border-main'}`}
                        name='purchas'
                        placeholder='مثال (123456789)'
                        value={purchasVal}
                        onChange={handleChange}
                        disabled={!returns || existingReturn}
                        ref={returns ? userRef : null} 
                        autoComplete="off"
                    />
                    {purchasErr && <p className="text-sm text-red-500 m-0">رقم الفاتورة غلط</p>}
                </div>
                <div>
                    <label className='mb-2 block font-bold'>التاريخ</label>
                    <input
                        type='text'
                        className='w-full border p-2 rounded-lg border-gray-500 focus:outline-none'
                        name='date'
                        placeholder='20/3/2023'
                        value={dateVal}
                        onChange={handleChange}
                        disabled
                    />
                </div>  */}
                {/* <div>
                    <label className='mb-2 block font-bold'>{codeText}</label>
                    <input
                        type='text'
                        className={`w-full border p-2 rounded-lg focus:border-2 focus:outline-none ${supplierErr ? 'border-red-500 focus:empty:border-red-500' : 'border-gray-500 focus:empty:border-main'}`}
                        name='supplierCode'
                        ref={returns ? null : userRef} 
                        required
                        autoComplete="off"
                        disabled={edit || existing || returns}
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='مثال (123456789123)'
                        onChange={handleChange}
                        value={supplierCodeVal}
                    />
                    {supplierErr && <p className="text-sm text-red-500 m-0">{errorText}</p>}
                </div> */}
                {/* <div>
                    <label className='mb-2 block font-bold'>{nameText}</label>
                    <input
                        type='text'
                        className='w-full border p-2 rounded-lg border-gray-500 focus:outline-none'
                        name='supplierName'
                        placeholder='مثال (محمد احمد)'
                        value={supplierNameVal}
                        onChange={handleChange}
                        disabled
                    />
                </div> */}

            </div>  
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-6'>
               <AltGlobalInput 
                    title='كود المنتج'
                    name='itemCode'
                    value={itemCodeVal}
                    firstErr={itemErr}
                    secondErr={codeExist}
                    placeholder='112233'
                    handleChange={handleChange}
                    disabled={edit || emptyPurchas ? true : false}
                    firstErrMsg='كود المنتج غر صحيح'
                    secondErrMsg='المنتج موجود بالفعل'
                />
               <AltGlobalInput 
                    title='اسم المنتج'
                    name='itemName'
                    value={itemNameVal}
                    placeholder='شامبو'
                    handleChange={handleChange}
                    disabled
                />
               <AltGlobalInput 
                    title='الوحدة'
                    name='unit'
                    value={unitVal}
                    placeholder='قطع'
                    handleChange={handleChange}
                    disabled
                />
                 <AltGlobalInput 
                    title='الكمية'
                    name='qty'
                    value={qtyVal}
                    firstErr={qtyErr}
                    secondErr={qtyZero}
                    placeholder='50'
                    handleChange={handleChange}
                    disabled={emptyCode}
                    edit={edit}
                    firstErrMsg={`الكمية التوفرة في المخزن ${avlQty}`}
                    secondErrMsg='ادخل كمية صحيحة'
                />
                <AltGlobalInput 
                    title='السعر'
                    name='price'
                    value={priceVal}
                    placeholder='200'
                    handleChange={handleChange}
                    disabled
                />
                <AltGlobalInput 
                    title='الاجمالي'
                    name='total'
                    value={totalVal}
                    placeholder='10000'
                    handleChange={handleChange}
                    disabled
                />
                {/* <div>
                    <label className='mb-2 block font-bold'>كود المنتج</label>
                    <input
                        type='text'
                        className={`w-full border p-2 rounded-lg focus:outline-none ${itemErr || codeExist ? 'border-red-500 focus:empty:border-red-500' : 'border-gray-500 focus:empty:border-main'}`}
                        name='itemCode'
                        required
                        autoComplete="off"
                        disabled={edit || emptyPurchas ? true : false}
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        onChange={handleChange}
                        placeholder='مثال (123456789)'
                        value={itemCodeVal}
                    />
                    {itemErr && <p className="text-sm text-red-500 m-0">كود المنتج غير صحيح</p>}
                    {codeExist && <p className="text-sm text-red-500 m-0">المنتج موجود بالفعل</p>}
                </div> */}
                {/* <div>
                    <label className='mb-2 block font-bold'>اسم المنتج</label>
                    <input
                        type='text'
                        className='w-full border p-2 rounded-lg border-gray-500 focus:outline-none'
                        name='itemName'
                        disabled
                        onChange={handleChange}
                        placeholder='مثال (لابتوب)'
                        value={itemNameVal}
                    />
                </div>  */}
                {/* <div>
                    <label className='mb-2 block font-bold'>الوحدة</label>
                    <input
                        type='text'
                        className='w-full border p-2 rounded-lg border-gray-500 focus:outline-none'
                        name='unit'
                        disabled
                        placeholder='مثال (قطع)'
                        onChange={handleChange}
                        value={unitVal}
                    />
                </div> */}
                {/* <div>
                    <label className='mb-2 block font-bold'>الكمية</label>
                    <input
                        type='text'
                        className={`w-full border p-2 rounded-lg focus:outline-none  ${edit && 'border-2 border-main'} ${qtyErr || qtyZero ? 'border-red-500 focus:empty:border-red-500' : 'border-gray-500 focus:empty:border-main'}`}
                        name='qty'
                        required
                        disabled={emptyCode}
                        autoComplete="off"
                        onInvalid={F => F.target.setCustomValidity('يرجي ملء هذا الحقل')} 
                        onInput={F => F.target.setCustomValidity('')}
                        placeholder='مثال (50)'
                        onChange={handleChange}
                        value={qtyVal}
                    />
                    {qtyErr && <p className="text-sm text-red-500 m-0">{`الكمية التوفرة في المخزن ${avlQty}`}</p>}
                    {qtyZero && <p className="text-sm text-red-500 m-0">ادخل كمية صحيحة</p>}
                </div> */}
                {/* <div>
                    <label className='mb-2 block font-bold'>السعر</label>
                    <input
                        type='text'
                        className='w-full border p-2 rounded-lg border-gray-500 focus:outline-none'
                        name='price'
                        disabled
                        placeholder='2000'
                        onChange={handleChange}
                        value={priceVal}
                    />
                </div> */}
                {/* <div>
                    <label className='mb-2 block font-bold'>الاجمالي</label>
                    <input
                        type='text'
                        className='w-full border p-2 rounded-lg border-gray-500 focus:outline-none'
                        name='total'
                        disabled
                        placeholder='5000'
                        onChange={handleChange}
                        value={totalVal}
                    />
                </div> */}
            </div>  
        </form>
    </div> 
  )
}

export default FormInvoicesModel