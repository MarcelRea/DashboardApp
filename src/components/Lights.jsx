import React from "react";
import {Menu} from "./Menu";
import Lightsblock from "./Lightblock";

const styles1 = {
   backgroundColor: '#088404',
   color: '#fff',
   height: '10vh',
   width: '100%'
};

const styles2 = {
   marginLeft:300
};

const styles3 = {
    float:'left',
    marginTop: '-5.1%'
};

const styles4 = {
    marginTop: '-46.3%',
    marginLeft: '16%',
    height: 800
};

const styles5 = {
    height:800
};


export function Lights() {
   return (
          <div className="App">
            <div class="col" style={styles1}>
                         <div class="page-hero d-flex align-items-center justify-content-center" style={styles2}>
                              <h3 style={{marginTop:22}}> Street Lights </h3>
                         </div>
                        </div>
                <div style={styles3}>
                      <Menu/>
                      <div style={styles5}>
                      <div style={styles4}>
                      <Lightsblock/>
                      </div>
                      </div>
              </div>
          </div>
   );
}