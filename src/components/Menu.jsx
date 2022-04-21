import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
   backgroundColor: '#330000',
   color: '#fff',
   float: 'left',
   height: '99.9vh',
   width: '256px'
};

const styles2 = {
    width:'28.5vh',
    height:'24.99vh',
    marginLeft: -9.5,
    textAlign: 'center'
};

const styles3 = {
    marginTop: 85
};

export function Menu() {
    return(
        <div className="container-fluid" >
               <div className="row">
                   <div className="col-2" style={styles}>
                        <div className="border border-3 border-secondary" style={styles2}>
                           <div class="page-hero d-flex align-items-center justify-content-center" style={styles3}>
                            <Link to="/" style={{textDecoration: 'none'}}><h3 style={{color:'white'}}>All</h3></Link>
                            </div>
                        </div>
                        <div className="border border-3 border-secondary" style={styles2}>
                           <div class="page-hero d-flex align-items-center justify-content-center" style={styles3}>
                            <Link to="/air" style={{textDecoration: 'none'}}><h3 style={{color:'white'}}>Weather And Air Condition</h3></Link>
                           </div>
                        </div>
                        <div className="border border-3 border-secondary" style={styles2}>
                           <div class="page-hero d-flex align-items-center justify-content-center" style={styles3}>
                            <Link to="/lights" style={{textDecoration: 'none'}}><h3 style={{color:'white'}}>Street Lights</h3></Link>
                           </div>
                        </div>
                        <div className="border border-3 border-secondary" style={styles2}>
                           <div class="page-hero d-flex align-items-center justify-content-center" style={styles3}>
                            <Link to="/restaurant" style={{textDecoration: 'none'}}><h3 style={{color:'white'}}>Busyness In The Restaurant</h3></Link>
                           </div>
                        </div>
                   </div>
               </div>
        </div>
    );
}