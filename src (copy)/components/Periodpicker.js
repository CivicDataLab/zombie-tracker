import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React, {useMemo} from 'react';
import { addDays } from 'date-fns';
import { useState } from 'react';
import $ from 'jquery';

import { DateRangePicker } from 'react-date-range';
 

function Periodpicker({data, setData, message, setMessage}) {

    const [expandpicker, setExpandpicker] = useState(false);
    const togglepicker = () => {
      setExpandpicker(!expandpicker);
    }


    const [state, setState] = useState([
	  {
	    startDate: new Date(),
	    endDate: addDays(new Date(), 7),
	    key: 'selection'
	  }
	]);

    const datepicked = (item) => {

         setState([item.selection]);
         const fromdate = [item.selection][0].startDate.getDate() + '-' + ([item.selection][0].startDate.getMonth()+1) + '-' + [item.selection][0].startDate.getFullYear()
         const todate = [item.selection][0].endDate.getDate() + '-' + ([item.selection][0].endDate.getMonth()+1) + '-' + [item.selection][0].endDate.getFullYear();
         const url = 'http://35.154.207.72/main/data_66a_cases/' + fromdate + '/' + todate + '/'; 
         $.ajax({
                url: url,
                dataType: 'json',
		async: false,
                success: function(data){
					alert('data fetched');
					setData(data);
                                       },
		error: function(xhr, status, error) { 
				alert(xhr.status); 
				}
				
                 });
 	
        setMessage("Other");        
}

     return (
        <div> 
		<div style={{textAlign:'center', marginBottom: '1rem'}}>  
                  <button className="btn btn-secondary" onClick={togglepicker}> { state[0].startDate.toDateString() } ~ { state[0].endDate.toDateString() } </button>
                </div>
		{
		expandpicker ?
		<DateRangePicker
		  onChange={datepicked}
		  showSelectionPreview={true}
		  moveRangeOnFirstSelection={false}
		  months={1}
		  ranges={state}
		  direction="vertical"
		  scroll={{ enabled: true }}
		/> : <div></div>
	       } 
       </div>
    )
}

export default React.memo(Periodpicker);
