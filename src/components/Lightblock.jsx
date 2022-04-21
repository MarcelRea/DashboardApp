import React from 'react'

class Light extends React.Component <any, any> {

  render(){

 const broken =  this.props.allLamps - this.props.workingLamps

  return (
    <div className="row">
      <div className="col-sm-10" style={{width:350}}>
      <div className="card bg-dark text-white">
            <div className="card-body">
                  <h4 className="card-title">Street Name: {this.props.streetName}</h4>
              <p className="card-text">All Lamps: <b>{this.props.allLamps}</b><br/>
              Working Lamps: <b>{this.props.workingLamps}</b><br/>
              <p style={{color:'red'}}>Broken Lamps: <b>{broken}</b></p>
              </p>
            </div>
       </div>
    </div>
    </div>

  )
  }
}

export default class Lightsblock extends React.Component <any, any> {
    constructor(props:any) {
                super(props);

                this.state = {
                    lights: [],
                    isLoaded: false,
                };

            }

        componentDidMount() {
                fetch(
                    "http://localhost:3001/api/lights")
                    .then((res) => res.json())
                    .then((json) => {
                        this.setState({
                            lights: json,
                        });
                    })
            }
    render(){
    const {lights} = this.state;

    return(
        <div className='row'>
            {lights.map((light:any) => (
            <div className='col-sm'>
            <div className='test' style={{marginTop:'1em'}}>
                <Light className='col p-2' streetName={light.streetName} allLamps={light.allLamps} workingLamps={light.workingLamps}/>
                </div>
            </div>
            ))}
            </div>
    )
    }
}