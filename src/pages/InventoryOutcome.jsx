import React, { useEffect, useMemo, useState } from 'react'
import { useStateValue } from '../context/stateProvider';
import TableInwardbills from '../components/tablemodels/TableInwardbills';
import FormInventory from '../components/formmodels/FormInventory';
import moment from 'moment';
import isEqual from 'lodash/isEqual';
import Sidebar from '../components/Sidebar';
import ConfirmSignout from '../components/ConfirmSignout';
import Goback from '../components/Goback';
import GlobalTitle from '../components/globalComponents/GlobalTitle';

const InventoryOutcome = () => {

    const {outwardBills} = useStateValue()
    const [logOut , setLogOut] = useState(false)

    const confirmLogOut = () => {setLogOut(() => true)}
  
    const cancelLogOut = () => {setLogOut(() => false)}

    const setdates = [];
    outwardBills?.forEach((data) => {setdates.push({value: data.date, label: data.date})})
    let mapindates = new Map();
    for (let date of setdates) {mapindates.set(date["value"], date)}
    let iteratorinvoices = mapindates.values();
    let getdates = [...iteratorinvoices];

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [filter , setFilter] = useState(false)

    let getItemsTotal = []

    function getDates(startDate, endDate) {
      const dateArray = [];
      let currentDate = moment(startDate, 'M/DD/YYYY').startOf('day');
      const formattedEndDate = moment(endDate, 'M/DD/YYYY').startOf('day');

      while (currentDate <= formattedEndDate) {
        dateArray.push(new Date(currentDate).toLocaleDateString());
        currentDate = moment(currentDate).add(1, 'days');
      }
    
      return dateArray;
    }
  
    const datesBetween = getDates(startDate?.value, endDate?.value);

    const getTotal = outwardBills?.filter(inward => {
      const filtered = datesBetween?.filter(date => inward.date === date);
      if (filtered && filtered.length > 0) {
        return true;
      }
      return false;
    });
    
    getItemsTotal = getTotal || [];

    const newDataSets = [];
    if(!filter){
      outwardBills?.forEach((data) => {
        newDataSets.push({...data, invoice: {title: data.invoice, rowSpan: 0}})
      })
    }else{
      getItemsTotal?.forEach((data) => {
        newDataSets.push({...data, invoice: {title: data.invoice, rowSpan: 0}})
      })
    }
  
    const countCategories = !filter ? outwardBills?.reduce( (acc, o) => (acc[o.invoice] = (acc[o.invoice] || 0)+1, acc), {} ) : getItemsTotal?.reduce( (acc, o) => (acc[o.invoice] = (acc[o.invoice] || 0)+1, acc), {} )
   
    const distinctCategories = [];
  
  Object.keys(countCategories).forEach((data) => {
      distinctCategories?.push({title: newDataSets[newDataSets.findIndex(x => x.invoice?.title === data)].invoice?.title});
      (newDataSets[newDataSets.findIndex(x => x.invoice.title === data)]).invoice.rowSpan = countCategories[data]
  })

  const uniqueDataInvoice = useMemo(() => {
    const unique = [];

  getItemsTotal.forEach(item => {
    let exists = false;
    
    unique.forEach(u => {
      if(isEqual(u.invoice, item.invoice)) {
        exists = true;
      }
    });

    if(!exists) {
      unique.push(item);
    }
  });

  return unique;
  }, [getItemsTotal]);

  useEffect(() => {

    const handleFilter = startDate !== null && endDate !== null ?
                setFilter(true) : setFilter(false)

  } , [startDate , endDate , getItemsTotal])
  
  const inventory =  uniqueDataInvoice?.map((e) => e.totalwd).reduce((a, b)=> a+b, 0);

  return (
  <div>
    <div className="block 2xl:flex justify-start items-start w-full gap-10">
        <div className="w-1/5">
          <Sidebar logOut={confirmLogOut} />
        </div>
        <div className="w-5/5 2xl:w-4/5 px-[10px] 2xl:pl-8 h-screen flex flex-col">
            <GlobalTitle title='بيانات جرد الخارج' />
            <FormInventory 
            dateoptions={getdates} 
            startDateval={startDate}
            endDateval={endDate}
            totalVal={inventory || ''}
            handleChangeStartDate={(selectedOption) => setStartDate(selectedOption)}
            handleChangeEndDate={(selectedOption) => setEndDate(selectedOption)}
        />
        <TableInwardbills invoicesList={newDataSets} code='كود العميل' name='اسم العميل' />
        <Goback />
        </div>
        {logOut && <ConfirmSignout handleCancel={cancelLogOut} />}
    </div>
  </div>
  )
}

export default InventoryOutcome