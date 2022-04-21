import React from 'react';
import {useEffect, useState} from "react";

const styles = {
   backgroundColor: '#088404',
   color: '#fff',
   float: 'left',
   height: '90vh',
   width: '180px',
   marginTop:89
};

const styles2 = {
   backgroundColor: '#088404',
   color: '#fff',
   height: '10vh',
   marginLeft: -180,
   width: '180vh'
};

const styles3 = {
   marginTop:22,
   marginLeft:180
};

export function DataRestaurant() {

   const [chartData, chartDataSet] = useState(null);

   useEffect(() => {
   const fetchAir = async () => {

           	const res = await fetch("http://localhost:3001/api/restaurant/last")
           	const dataRes = await res.json();

           	chartDataSet(dataRes);
       	}
   fetchAir();
   }, []);

   if (!chartData) {
       return null;
   }

   const busy = (chartData.orders + chartData.workers) * 0.50;

   return (
   <div className="container-fluid" >
       <div className="row">
           <div className="col-2" style={styles}>
               <br /> <br /> <br /> <br /> <br /> <br />
               <ul>
                   <li><b>Open: Mon-Sat, 6:00-23:00 </b> </li> <br /> <br />
               </ul>
               <h1>Current state:</h1><br />
               <ul>
                   <li>Day: {chartData.dayOfWeek}</li>
                   <li>Workers: {chartData.workers}</li>
                   <li>Orders: {chartData.orders}</li>
                   <li>Hour: {chartData.hour}</li>
                   {busy >= 24 &&
                   <li>Busy: More busy</li>
                   }
                   {busy < 24 &&
                   <li>Busy: Less Busy</li>
                   }
               </ul>
           </div>
           <div class="col-11" style={styles2}>
           <div class="page-hero d-flex align-items-center justify-content-center" style={styles3}>
                <h3> Busyness In The Royalfood Restaurant </h3>
           </div>
           </div>
       </div>
   </div>
   );
}
