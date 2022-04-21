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

export function Data() {

   const [chartData, chartDataSet] = useState(null);

   useEffect(() => {
   const fetchAir = async () => {

           	const res = await fetch("http://localhost:3001/api/air/last")
           	const dataRes = await res.json();
           	chartDataSet(dataRes);
       	}
   fetchAir();
   }, []);

   if (!chartData) {
       return null;
   }

   return (
   <div className="container-fluid" >
       <div className="row">
           <div className="col-2" style={styles}>
               <br /> <br /> <br /> <br /> <br /> <br />
               <h1>Current state:</h1><br />
               <ul>
                   <li>Temp: {chartData.temp}</li>
                   <li>Humidity: {chartData.humidity}</li>
                   <li>Pressure: {chartData.pressure}</li>
                   <li>Status Air: {chartData.statusAir}</li>
                   <li>Date: {chartData.date}</li>
               </ul>
           </div>
           <div class="col-11" style={styles2}>
           <div class="page-hero d-flex align-items-center justify-content-center" style={styles3}>
                <h3> Weather And Air Condition </h3>
           </div>
           </div>
       </div>
   </div>
   );
}
