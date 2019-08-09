import React from "react";
import Confetti from "react-dom-confetti";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Brady",
      active: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.makeConfetti = this.makeConfetti.bind(this);
  }

  handleChange = e => {
    this.makeConfetti();
    this.setState({
      value: e.target.value
    });
  };

  makeConfetti = () => {
    this.setState({ ...this.state, active: true });

    setTimeout(() => {
      this.setState({ ...this.state, active: false });
    }, 300);
  };

  render() {
    const config = {
      angle: 90,
      spread: 45,
      startVelocity: 45,
      elementCount: 50,
      dragFriction: 0.1,
      duration: 3000,
      stagger: 0,
      width: "10px",
      height: "10px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    return (
      <div className="calc-component-input">
        <div className="container shadow-box">
          <h2 claasName="breadcrumb" style={{ fontSize: "12px" }}>
            EDDY'S APPRECIATION CALCULATOR
          </h2>
          <h1 className="calc-title-large">
            How much does Eddy appreciate me?
          </h1>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <p className="blurb text-left">
                A fun little idea thank you project to show my appreciation and
                gratitude to everyone I worked with. I could not be more
                grateful to have been part of the ICT team and to have met all
                of you amazing people! :)
              </p>
            </div>
          </div>
          <div className="row natural-language">
            <div className="col-md-8 col-md-offset-2">
              <p>
                {" "}
                I am{" "}
                <select className="child-count" onChange={this.handleChange}>
                  <option />
                  <option value="Brady">Brady</option>
                  <option value="Ethan">Ethan</option>
                  <option value="Eric">Eric</option>
                  <option value="Dan">Dan</option>
                  <option value="Danielle">Danielle</option>
                  <option value="David">David</option>
                  <option value="Marcus">Marcus</option>
                  <option value="Sid">Sid</option>
                  <option value="Paul">Paul</option>
                  <option value="Ryan">Ryan</option>
                  <option value="Tejna">Tejna</option>
                </select>
              </p>
            </div>
          </div>
          <div className="row natural-language">
            <div className="col-md-8 col-md-offset-2">
              <p>
                {" "}
                My favorite intern was{" "}
                <select className="child-count" onChange={this.makeConfetti}>
                  <option value="Eddy">Eddy</option>
                  <option value="Eddy">Eddy</option>
                  <option value="Eddy">Eddy</option>
                  <option value="Eddy">Eddy</option>
                </select>
              </p>
            </div>
          </div>
          <Confetti active={this.state.active} config={config} />
          <div className="row" style={{ textAlign: "center", marginTop: 10 }}>
            <a>
              <button
                type="submit"
                class="btn btn-primary"
                id="calc_college_submit"
                onClick={event => {
                  this.props.calculate(this.state.value);
                }}
              >
                Calculate
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
