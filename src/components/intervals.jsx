import React, { Component } from 'react';
import '../clock.css';
import '../bootstrap/css/bootstrap.css';

class Intervals extends Component{
      state = {
        countSec: 0,
        countMin: 0,    
        countMSec: 0,
        lapseCount: 0,
        flag: 0,
        lap: 1
   };
    render(){
        return(
            <div className = "midContainer">
                <button onClick ={this.startTimeInterval} id = "hide1" className = "btn btn-primary m-2">Start</button>
                <button onClick ={this.stopTimeInterval} id = "hide2" className = "btn btn-primary m-2">Stop</button>
                <button onClick ={this.lapInfo} className = "btn btn-primary m-2">lap</button>
                <button onClick ={this.clearLap} className = "btn btn-primary m-2">Clear lap</button>
            </div>
        );
    }
    startTimeInterval = () => {
        if(this.state.flag === 0){
            this.setState({flag: 1})
            let intervalId1  = setInterval(this.timeInterval, 1000);  
            let intervalId2  = setInterval(this.timeIntervalforMiliSecond, 10);  
            this.setState({interval1: intervalId1, interval2: intervalId2});
        }
    }

    timeInterval = () => {
        this.setState({countSec: this.state.countSec + 1});       
        if(this.state.countSec === 60){
            this.setState({countSec: 0});
            this.setState({countMin: this.state.countMin + 1});
            if(this.state.countMin < 10){
                document.getElementById("minCounter").innerHTML = "0" + this.state.countMin;
            }
            else{
                    document.getElementById("minCounter").innerHTML = this.state.countMin;
            }
        }
        if(this.state.countSec < 10)
            document.getElementById("secCounter").innerHTML = "0" + this.state.countSec;
        else
        document.getElementById("secCounter").innerHTML = this.state.countSec;
    }

    timeIntervalforMiliSecond = () => {
        this.setState({countMSec: this.state.countMSec + 1});  
        if(this.state.countMSec === 99){
            this.setState({countMSec: 0}); 
            if(this.state.countMSec < 10){
                document.getElementById("mSecCounter").innerHTML = "0" + this.state.countMSec;
            }else{
                document.getElementById("mSecCounter").innerHTML = this.state.countMSec;
            }
        }
        else{
            if(this.state.countMSec < 10){
                document.getElementById("mSecCounter").innerHTML = "0" + this.state.countMSec;
            }else{
                document.getElementById("mSecCounter").innerHTML = this.state.countMSec;
            }
        }
    }

    lapInfo = () => {
        this.setState({lap: this.state.lap + 1});
        document.getElementById("lapseInfo").innerHTML += "lap" + this.state.lap  + ": " + this.state.countMin + ":" + this.state.countSec + ":" + + this.state.countMSec + "<br>"; 
    }

    stopTimeInterval = () => {
        if(this.state.flag  === 1){
            clearInterval(this.state.interval1);
            clearInterval(this.state.interval2);
            this.setState({flag: 0})
            this.setState({lap: this.state.lap + 1});
            document.getElementById("lapseInfo").innerHTML += "lap" + this.state.lap + ": " +  this.state.countMin + ":" + this.state.countSec + ":" + + this.state.countMSec + "<br>"; 
        }
    }
    clearLap(){
        document.getElementById("lapseInfo").innerHTML = "";
    }
}
export default Intervals;