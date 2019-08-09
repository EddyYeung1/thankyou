import React from 'react'
import Confetti from 'react-dom-confetti';


class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "Brady"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render (){
    return (
    <div className="calc-component-input">
      <div className = "container shadow-box">
      <h2 claasName = "breadcrumb" style={{fontSize :"12px"}}>EDDY'S APPRECIATION CALCULATOR</h2>
      <h1 className="calc-title-large">How much does Eddy appreciate me?</h1>
      <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <p className="blurb text-left">
              A fun little idea thank you project to show
         my appreciation and gratitude to everyone I worked with.
         I could not be more grateful to have been part of the ICT team
         and to have met all of you amazing people! :)
              </p>
            </div>
          </div>
         <div className="row natural-language">
            <div className="col-md-8 col-md-offset-2">
              <p> I am   {" "}
                <select className="child-count" onChange = {this.handleChange}>
                  <option value="Brady">Brady</option>
                  <option value="Ethan">Ethan</option>
                  <option value="Eric">Eric</option>
                  <option value="Dan">Dan</option>
                  <option value="Danielle">Danielle</option>
                  <option value="David">David</option>
                  <option value="Marcus">Marcus</option>
                  <option value="Paul">Paul</option>
                  <option value="Ryan">Ryan</option>
                  <option value="Tejna">Tejna</option>
                </select>
              </p>
            </div>
        </div>
        <div className="row natural-language">
            <div className="col-md-8 col-md-offset-2">
              <p> My favorite intern was   {" "}
                <select className="child-count">
                  <option value="Eddy">Eddy</option>
                  <option value="Eddy">Eddy</option>
                  <option value="Eddy">Eddy</option>
                  <option value="Eddy">Eddy</option>
                </select>
              </p>
            </div>
        </div>
        <div className="row" style= {{textAlign: "center", marginTop: 10}}>
          <a>
        <button 
            type="submit" 
            class="btn btn-primary" 
            id="calc_college_submit"
            onClick={(event) => {
              console.log(event)
              this.props.calculate(this.state.value)}
            }
            >
          Calculate
          </button>
          </a>
          </div>
      </div>
      </div>
    )
  }
}

export default Input