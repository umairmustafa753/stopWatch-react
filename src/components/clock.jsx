import React, { Component } from 'react';
import '../clock.css';
import Intervals from './intervals';
import '../bootstrap/css/bootstrap.css';

class Clock extends Component{
    render(){
        return ( 
            <div  className = "container">
                <h1>Stop Watch</h1>
                <Intervals />
                <h3>
                    <span id="minCounter">00</span>
                    <span> : </span>
                    <span id="secCounter">00</span>
                    <span> .</span>
                    <p id="mSecCounter" className = "para">00</p>
                </h3>
                <div  className = "paraStyle">
                    <p id = "lapseInfo"></p>
                </div>
            </div>
        );
    }
}
export default Clock; 