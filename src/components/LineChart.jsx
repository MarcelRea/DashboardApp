import React from 'react';
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';

import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

const io = require("socket.io-client");

export const options = {
   responsive: true,
   plugins: {
       legend: {
           position: 'right',
           textAlign: 'center'
       },
       title:{
            display: true,
            text: "Graph of temperature, humidity and pressure in the city",
            color: '#cc7000',
            font: {
                size:20,
                family:'Arial'
            },
            padding: {
                bottom: 50
            }
       }
   },
};

export function LineChart(props) {

   const [chartData, chartDataSet] = useState(null);

   useEffect( () => {
        const socket = io("http://localhost:3001", {
               transports: ['websocket', 'polling', 'flashsocket'],
           });
           socket.on("currentState", data => {
               chartDataSet(data.data);
           });
       const fetchAir = async () => {
           let data = {
               labels: [],
               datasets: [
                   {
                       label: 'Temp',
                       data: [],
                       borderColor: 'red',
                       backgroundColor: 'red'
                   },
                   {
                       label: 'Hum',
                       data: [],
                       borderColor: 'blue',
                       backgroundColor: 'blue'
                   },
                   {
                       label: 'Press',
                       data: [],
                       borderColor: 'green',
                       backgroundColor: 'green'
                   }
               ],
           };

           const res = await fetch("http://localhost:3001/api/air")
           const dataRes = await res.json();

           data.datasets[0].data = dataRes.map(item => {
               return item.temp;
           })

           data.datasets[1].data = dataRes.map(item => {
               return item.humidity;
           })

           data.datasets[2].data = dataRes.map(item => {
               return item.pressure;
           })

           data.labels = dataRes.map (item => {
               return item.date;
           })
           chartDataSet(data);
       }
       fetchAir()
   }, []);

   if (!chartData) {
       return null;
   }

   return <Line options={options} data={chartData}/>;
}
