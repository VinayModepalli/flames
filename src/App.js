import React, { Component } from 'react';
import './App.css'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstname :"",
      secondname:"",
      result:""
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
    console.log(this.state.result)
    this.setState({
      result:w
    })
  }
  render () {
    return (
        <div className="App container" >
        <form className="form-group" onSubmit={this.handleSubmit}>
        <br></br><br></br>
          <label htmlFor="firstname">Your Name</label>
          <br></br>
          <input type="text" color="black" className="form-control" id="firstname" onChange={this.handleChange} />
          <br></br>
          <label htmlFor="secondname">Your Crush's Name</label>
          <br></br>
          <input type="text" className="form-control" id="secondname"  onChange={this.handleChange} />
          <br></br><br></br>
          <button>Go</button>
        </form>
        <div>Result: {this.state.result}</div>
        </div>

    )
  }
}


export default App;
