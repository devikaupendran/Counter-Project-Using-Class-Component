import React, { Component } from "react";
import randomcolor from "randomcolor";

class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 , color : "red" }

    this.incrementBtnHandler = this.incrementBtnHandler.bind(this); //when we create custom fnctn use this or to avoid this code use arrow function 
  }


  //defining increment button handler function
  incrementBtnHandler() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }

  //defining increment button handler function using arrow function to avoid binding
  decrementBtnHandler = () => {
    this.setState((prevState) => {
      return { count : prevState.count - 1 }
    })
  }

  //creating life cycles 
  //this cycle only run at 1st rendering
  componentDidMount() {
    this.setState( { color : "red" })
  }

  //this life cycle method run if any update occur on component
  componentDidUpdate(prevProps , prevState ) {
    console.log("Current state :" , this.state.count);
    console.log("Previous state : ", prevState.count);
    
    if(prevState.count !== this.state.count){
      this.setState({ color : randomcolor()})
    }
  }
  render() {
    return (
      <div className="container">
        <h1 style={{color : this.state.color }}>{this.state.count}</h1>
        <div className="btn-container">
          <button onClick={this.decrementBtnHandler}>Decrement</button>
          <button onClick={this.incrementBtnHandler}>Increment</button>
        </div>
      </div>
    )
  }
}
export default App;