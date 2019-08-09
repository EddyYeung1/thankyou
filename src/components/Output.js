import React from 'react'

class Output extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
        this.toggleClass = this.toggleClass.bind(this)
    }


    toggleClass() {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }

    render() {
        return (
            <div className="mm-calc-output" style={{ padding: 14 }}>
                <h1 className="title">Eddy's Appreciation Calculator</h1>
                <div className="card-container">
                    <div className={this.state.active ? 'card flipped' : 'card'}
                        onClick={this.toggleClass}>
                        <div className="front">{this.props.name}</div>
                        <div className="back">{this.props.letter}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Output