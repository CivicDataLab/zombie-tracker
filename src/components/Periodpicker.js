import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React, {useMemo} from 'react';
import { addDays } from 'date-fns';
import { useState } from 'react';
import $ from 'jquery';

import { DateRangePicker } from 'react-date-range';
 

function Periodpicker({data, setData, message, setMessage, state, setState}) {

    const [expandpicker, setExpandpicker] = useState(false);
    const togglepicker = () => {
      setExpandpicker(!expandpicker);
    }

    const datepicked = (item) => {

         setState([item.selection]);
         const fromdate = [item.selection][0].startDate.getDate() + '-' + ([item.selection][0].startDate.getMonth()+1) + '-' + [item.selection][0].startDate.getFullYear()
         const todate = [item.selection][0].endDate.getDate() + '-' + ([item.selection][0].endDate.getMonth()+1) + '-' + [item.selection][0].endDate.getFullYear();
         const url = 'https://zombietracker.in/main/data_66a_cases/' + fromdate + '/' + todate + '/'; 
         $.ajax({
                url: url,
                dataType: 'json',
		async: false,
                success: function(data){
					// alert('data fetched');
					setData(data);
				 	if (message == "other"){
						setMessage("other1");  
					}
					else
					    {
						setMessage("other");
					} 
                                       },
		error: function(xhr, status, error) { 
				alert('No Data'); 
				}
				
                 }); 
}

     return (
        <div> 
		<div style={{textAlign:'left'}}>  
                  <button className="btn btn-secondary" onClick={togglepicker} style={message.includes("other") ? {background:'#111352', color:'#A7E3E7', minWidth:'11rem', height:'40px', borderRadius:'5px'} : {minWidth:'11rem', height:'40px', borderRadius:'5px'}}> {message.includes("other") ? state[0].startDate.toDateString() + " ~ " + state[0].endDate.toDateString()  : "Select time period" }</button>
                </div>
		{
		expandpicker ?
		<DateRangePicker
		  onChange={datepicked}
		  minDate={addDays(new Date(2009, 9, 27), 0)}
		  maxDate={addDays(new Date(2020, 1, 15), 0)}
		  showSelectionPreview={true}
		  moveRangeOnFirstSelection={false}
		  months={1}
		  ranges={state}
		  direction="vertical"
                  editableDateInputs={true}
		  scroll={{ enabled: true }}
		/> : <div></div>
	       } 
       </div>
    )
}

export default React.memo(Periodpicker);
