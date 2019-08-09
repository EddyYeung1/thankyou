import React from 'react';
import './App.css';
import Input from './components/Input'
import Output from './components/Output'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "input",
      val: "Brady"
    }
  }

  calculate = (val) => {
    this.setState({page: "output", val: val})
  }

  render() {

    return (
      <div>
        {this.state.page === "input" && <Input calculate={this.calculate}/>}
        {this.state.page === "output" && <Output val={this.state.val}/>}
      </div>
    )
  }
}

export default App;
