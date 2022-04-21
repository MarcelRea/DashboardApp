import React from 'react';
import { useEffect, useState } from "react";
import {Bar} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  BarController
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  BarController
)

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
            text: "Busyness In The Royalfood Restaurant (Busyness/Workers/Orders)",
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

export function BarChart() {

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
                        label: 'Busyness',
                        data: [],
                        backgroundColor: '#2E86C1'
                   },
                   {
                        label: 'Orders',
                        data: [],
                        backgroundColor: '#ffa404'
                   },
                    {
                        label: 'workers',
                        data: [],
                        backgroundColor: '#088404'
                   },
               ],
             };

                    const res = await fetch("http://localhost:3001/api/restaurant")
                    const dataRes = await res.json();

                    data.datasets[0].data = dataRes.map(item => {
                         return (item.orders + item.workers) * 0.50
                    })

                    data.datasets[1].data = dataRes.map(item => {
                         return item.orders
                    })

                    data.datasets[2].data = dataRes.map(item => {
                         return item.workers
                    })

                    data.labels = dataRes.map (item => {
                         return item.hour;
                    })
           chartDataSet(data);
       }
       fetchAir()
   }, []);

   if (!chartData) {
       return null;
   }

   return <Bar options={options} data={chartData}/>;
}
