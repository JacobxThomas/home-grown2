import React from 'react';
import tomato from '../images/tomato.jpg'
import betroot from '../images/betroot.jpg'
import broccoli from '../images/broccoli.jpeg'



function Home() {
  return (
    <div id="home" >
      <h2>Your Garden</h2>
      <div id="garden">

        <div id="card">
          <h3>Tomato</h3>
          <img src={tomato} width="150px"></img>
          <p>Planted: 16/08/21</p>
          <p>Water in: 7 days</p>
          <p>Harvest in: 84 days</p>
        </div>

        <div id="card">
          <h3>Betroot</h3>
          <img src={betroot} width="150px"></img>
          <p>Planted: 16/08/21</p>
          <p>Water in: <span id = "red">2 days</span></p>
          <p>Harvest in: 60 days</p>
        </div>

        <div id="card">
          <h3>Broccoli</h3>
          <img src={broccoli} width="150px"></img>
          <p>Planted: 29/03/21</p>
          <p>Water in: 5 days</p>
          <p>Harvest in: <span id = "red">2 days</span></p>
        </div>


      </div>
      <button>Add plant</button>
    </div>
  );
}

export default Home;