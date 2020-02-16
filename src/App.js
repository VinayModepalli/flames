import React, { Component } from 'react';
import './App.css';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstname :"",
      secondname:"",
      result:"",
      rtext: null,
      loading: 1
    }
  }
  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.calculate();
  }
  calculate = () => {
    var a=this.state.firstname;
    var b=this.state.secondname;
    if (a === "" && b === ""){
      this.setState({
        rtext: "Come on.. Type Something Yaar..!!"
      })
      return;
    }
    else if (a === "" || b === ""){
      this.setState({
        rtext: "Enter both of your names yaarr..! "
      })
      return;
    }
    else{
    for (var i = 0; i < a.length; i++) { 
            for (var j = 0; j < b.length; j++){
                if (a.charAt(i) === b.charAt(j)){
                    a = a.replace(a.charAt(i), "");
                    b = b.replace(b.charAt(j), "");
                    i--;
                    break;
            }
        }
    }
    var count = a.length + b.length ;
    var c2 = count%6;
    var w = "FLAMES";
    for (var k=0; k < 5 ; k++ ){
    c2 = count % (6-k);
    w = w.slice(c2,) + w.slice(0,c2);
    w = w.replace(w.charAt(w.length-1),"");
    //alert(w);
    //alert("two");
    }
    //alert(w);
    var ad;
    if (w==='F') ad = "You are Just Friends..";
    else if (w==='L') ad = "OMG.. You're Lovers..!!";
    else if (w==='A') ad = "Attraction";
    else if (w==='M') ad = "May be you'll get Married..!!";
    else if (w==='E') ad = "You're Enemies.. You hate each other..";
    else if (w==='S') ad = "Your relation is Sister and Brother..";
    console.log(this.state.result)
    this.setState({
      result:w,
      rtext:ad
    })
  }
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: 0
      })
    }, 3000);
  }
 
  render () {
    if (this.state.loading === 1){
      return (
        <div className="App container">
          <br></br><br></br><br></br><br></br><br></br>
        <h2>This website have no Databases.. You can check in my Github Code...</h2>
      </div>
      )
    }
    else {
      return (
        <div className="App container" >
          <br></br><br></br>
          <h2>FLAMES</h2>
        <form className="form-group" onSubmit={this.handleSubmit}>
        <br></br><br></br>
          <label htmlFor="firstname">Your Name</label>
          <br></br>
          <input type="text" color="black" value={this.state.firstname} id="firstname" onChange={this.handleChange} required ></input>
          <br></br><br></br>
          <label htmlFor="secondname">Your Crush's Name</label>
          <br></br>
          <input type="text"  id="secondname" value={this.state.secondname} onChange={this.handleChange} required ></input>
          <br></br><br></br>
          <button className="btn btn-primary" onClick={this.handleSubmit}>Go</button>
        </form>
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div>
          <h2>{this.state.rtext}</h2>
          </div>
        </Animated>
        <br></br><br></br><br></br>
        <div className="container">
          <div className="row">
          <div className="col"><a href="https://www.facebook.com/vinay.modepalli/" className="shadow facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></div>
          <div className="col"><a href="https://www.instagram.com/iam__vinaykumar/" className="shadow instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
          <div className="col"><a href="https://github.com/VinayModepalli" className="shadow github social"><FontAwesomeIcon icon={faGithub} size="2x" /></a></div>
          <div className="col"><a href="https://www.youtube.com/channel/UCT-PxxuoCnyKeLv6DcLcCJg" className="shadow youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" /></a></div>
          
          </div>
        </div>
        <br></br>
        <h1><strong>Vinay Works</strong></h1>
        </div>
        

      )
    }
  }
}


export default App;
