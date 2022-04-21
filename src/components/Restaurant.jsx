import React from "react";
import {DataRestaurant} from "./DataRestaurant";
import {Menu} from "./Menu";
import {BarChart} from "./BarChart";

const styles = {
   display: 'flex',
   justifyContent: 'space-between'
};

const styles2 = {
    marginTop: 100
};

const styles3 = {
    float:'left'
};

const styles4 = {
    marginLeft:'-147.1vh',
    marginTop: 88
};

export function Restaurant() {
   return (
          <div className="App">
              <div style={styles}>
                <div style={styles3}>
                      <Menu/>
                </div>
                      <DataRestaurant/>
                      <div className="col-10 w-75" style={styles4}>
                      <div style={styles2}>
                      <BarChart/>
                      </div>
                      </div>
              </div>
          </div>
   );
}
