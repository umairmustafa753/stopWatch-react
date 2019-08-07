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
    
    //Start time interval Function.
    startTimeInterval = () => {
        if(this.state.flag === 0){
            //setting state of flag.
            this.setState({flag: 1})
            //creating interval for sec and minutes.
            let intervalId1  = setInterval(this.timeInterval, 1000); 
            //creating interval for mili second.
            let intervalId2  = setInterval(this.timeIntervalforMiliSecond, 10);  
            //setting state for interval id.
            this.setState({interval1: intervalId1, interval2: intervalId2});
        }
    }

    //clear timeInterval function.
    timeInterval = () => {
        //setting state for sec.
        this.setState({countSec: this.state.countSec + 1});       
        if(this.state.countSec === 60){
            //setting state for sec.
            this.setState({countSec: 0});
            //setting state for min.
            this.setState({countMin: this.state.countMin + 1});
            if(this.state.countMin < 10){
                //displaying minutes on browser.
                document.getElementById("minCounter").innerHTML = "0" + this.state.countMin;
            }
            else{
                    //displaying minutes on browser.
                    document.getElementById("minCounter").innerHTML = this.state.countMin;
            }
        }
        if(this.state.countSec < 10)
            //displaying sec on browser.
            document.getElementById("secCounter").innerHTML = "0" + this.state.countSec;
        else
        //displaying sec on browser.
        document.getElementById("secCounter").innerHTML = this.state.countSec;
    }

    //clear timeIntervalForMiliSecond function.
    timeIntervalforMiliSecond = () => {
        //setting state for mili second.
        this.setState({countMSec: this.state.countMSec + 1});  
        if(this.state.countMSec === 99){
            //setting state for mili second.
            this.setState({countMSec: 0}); 
            if(this.state.countMSec < 10){
                //displaying mili sec on browser.
                document.getElementById("mSecCounter").innerHTML = "0" + this.state.countMSec;
            }else{
                //displaying mili sec on browser.
                document.getElementById("mSecCounter").innerHTML = this.state.countMSec;
            }
        }
        else{
            if(this.state.countMSec < 10){
                //displaying mili sec on browser.
                document.getElementById("mSecCounter").innerHTML = "0" + this.state.countMSec;
            }else{
                //displaying mili sec on browser.
                document.getElementById("mSecCounter").innerHTML = this.state.countMSec;
            }
        }
    }
    
    //lapInfo funtion.
    lapInfo = () => {
        //setting state for lapse.
        this.setState({lap: this.state.lap + 1});
        //displaying lapse on browser.
        document.getElementById("lapseInfo").innerHTML += "lap" + this.state.lap  + ": " + this.state.countMin + ":" + this.state.countSec + ":" + + this.state.countMSec + "<br>"; 
    }
    //clear stopTimeInterval funtion.
    stopTimeInterval = () => {
        if(this.state.flag  === 1){
            //clearing interval for minutes.
            clearInterval(this.state.interval1);
            //clearing interval for seconds.
            clearInterval(this.state.interval2);
            //setting state for flag.
            this.setState({flag: 0})
            //setting state for lapse.
            this.setState({lap: this.state.lap + 1});
            //displaying lapse on browser.
            document.getElementById("lapseInfo").innerHTML += "lap" + this.state.lap + ": " +  this.state.countMin + ":" + this.state.countSec + ":" + + this.state.countMSec + "<br>"; 
        }
    }
    //clear lap function.
    clearLap = () => {
        //Clearign lapse lapse on browser.
        document.getElementById("lapseInfo").innerHTML = "";
        //setting state lapse.
        this.setState({lap: 1});    
    }
}
export default Intervals;