import React from "react";
import {Data} from "./Data";
import {LineChart} from "./LineChart";
import {Menu} from "./Menu";

const styles = {
   display: 'flex',
   justifyContent: 'space-between',
};

const styles3 = {
    float:'left'
};

const styles4 = {
    marginLeft:'-147.1vh',
    marginTop: 150
};

export function Air() {
   return (
          <div className="App">
              <div style={styles}>
                <div style={styles3}>
                      <Menu/>
                </div>
                      <Data/>
                      <div className="col-10 w-75" style={styles4}>
                      <LineChart/>
                      </div>
              </div>
          </div>
   );
}
