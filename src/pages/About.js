import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.png";

export default class About extends Component {
  render() {
    return (
      <div>
      <div>
      <div className="split left">
      <div className="centered">
      <img 
      className="profile_image"
      src = {profile_pic}
      alt="Profile Pic"
      ></img>
      </div>
      </div>
      <div className="split right">
      <div className="centered">
      <div className="name_title">Kevin Gutierrez Garcia</div>
      <div className="brief_description">
      <p>CS + Econ at Columbia<br/>
      Rising Junior<br/>
      Love Running, Skiing, and playing Chess<br/>
      Involvements on Campus:<br/>
      Columbia Spectator Engineering Team <br/>
      Columbia Organization of Rising Entrepeneurs <br/>
      Society of Hispanic Professional Engineers</p>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}