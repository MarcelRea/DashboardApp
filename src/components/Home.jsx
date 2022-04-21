import React from "react";
import {Menu} from "./Menu";

const styles = {
   display: 'flex',
   justifyContent: 'space-between'
};

const styles2 = {
   backgroundColor: '#088404',
   color: '#fff',
   height: '10vh'
};

const styles3 = {
   float: 'left',
   position: 'absolute',
   marginLeft: '-13.7%',
   marginTop: '-5.1%'
};

const styles4 = {
   marginLeft:300
};

const styles5 = {
   float: 'left',
   height: '80vh',
   width: '167.4vh',
   marginLeft: '3.5vh'
};

const styles6 = {
   height: '90vh',
   backgroundColor: '#696969',
   marginLeft:'-0.16%'
};

const styles7 = {
   textAlign: 'center',
   color:'white'
};

const styles8 = {
    marginTop: '1%',
    marginLeft: '30%'
};

const styles9 = {
    marginTop: '1%',
    marginLeft: '30%'
};

export function Home() {
    return (
        <div className="App">
            <div class="col" style={styles2}>
             <div class="page-hero d-flex align-items-center justify-content-center" style={styles4}>
                  <h3 style={{marginTop:22}}> Main Menu </h3>
             </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                    <div style={styles}>
                       <div style={styles3}>
                          <Menu/>
                       </div>
                    </div>
                </div>
                <div class="col">
                    <div style={styles5}>
                        <div className="border border-1 border-danger" style={styles6}>
                            <div class="page-hero d-flex align-items-center justify-content-center" style={styles7}>
                                <div class="row">
                                    <div class="col">
                                        <div style={styles8}>
                                         <div class="card border-5 border-dark" style={{width: 300, height:385, backgroundColor:'black'}}>
                                           <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbJOWZUYMArJnHyk--MKFBw_ylxpnXoUPng&usqp=CAU" alt="All" />
                                           <div class="card-body" style={{backgroundColor: '#696969'}}>
                                             <h5 class="card-title">Smart City</h5>
                                             <p class="card-text">All the functionalities Smart City in one place.</p>
                                             <a href="http://localhost:3000/" class="btn btn-primary">Click And Check</a>
                                           </div>
                                           </div>
                                         </div>
                                    </div>
                                    <div class="col">
                                        <div style={styles9}>
                                         <div class="card border-5 border-dark" style={{width: 300, height:385, backgroundColor:'black'}}>
                                           <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEg_LhUivLiLL3b7Yn9n78Z64nXAL_bHRc7Q&usqp=CAU" alt="Air" />
                                           <div class="card-body" style={{backgroundColor: '#696969'}}>
                                             <h5 class="card-title">Weather And Air Condition</h5>
                                             <p class="card-text">Check the weather and air condition information.</p>
                                             <a href="http://localhost:3000/air" class="btn btn-primary">Click And Check</a>
                                           </div>
                                           </div>
                                           </div>
                                    </div>
                                    <div class="w-100">
                                    </div>
                                      <div class="col">
                                        <div style={styles8}>
                                         <div class="card border-5 border-dark" style={{width: 300, height:395, backgroundColor:'black'}}>
                                           <img class="card-img-top" src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/12/20/w1200X800/LED_Street_Lights_EPS.jpg" alt="Lamps" />
                                           <div class="card-body" style={{backgroundColor: '#696969'}}>
                                             <h5 class="card-title">Street Lights</h5>
                                             <p class="card-text">Check the current state of street lights. The lamps turn on automatically every day at 4 p.m.</p>
                                             <a href="http://localhost:3000/lights" class="btn btn-primary">Click And Check</a>
                                           </div>
                                           </div>
                                         </div>
                                    </div>
                                      <div class="col">
                                        <div style={styles9}>
                                         <div class="card border-5 border-dark" style={{width: 300, height:395, backgroundColor:'black'}}>
                                           <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeFgBJWyx2CsbKeb5z4Bx3UD6o8lEwRv-RQ&usqp=CAU" alt="Restaurant" />
                                           <div class="card-body" style={{backgroundColor: '#696969'}}>
                                             <h5 class="card-title">Busyness In The Restaurant</h5>
                                             <p class="card-text">Check the busyness in the restaurant - when is it the greatest and when is it the smallest.</p>
                                             <a href="http://localhost:3000/restaurant" class="btn btn-primary">Click And Check</a>
                                           </div>
                                           </div>
                                           </div>
                                           </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}
