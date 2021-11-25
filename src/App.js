import './App.scss';
import {Button, Container} from "react-bootstrap";
import DataInput from "./components/DataInput";
import {Component} from "react";
import DataDisplay from "./components/DataDisplay";

class App extends Component {
    constructor(props) {
        super(props);
        this.asset = 0.0
        this.interestRate = 0.0
        this.term = 0.0
        this.state = {interestCharges: []}
    }

    calculateInterestChargeOfYear(year) {
        let interest = (this.asset * this.interestRate * (year + 1)) / 100;
        return interest + this.asset;
    }

    calculateInterestCharges() {
        let result = []
        for (let i = 0; i < this.term; i++) {
            result.push([i, this.calculateInterestChargeOfYear(i)])
        }

        this.setState({interestCharges: result})
    }

    render() {
        return (
            <Container className="App">
                <div className="mt-4">
                    <DataInput onAssetChanged={(e) => this.asset = parseInt(e)}
                               onInterestRateChanged={(e) => this.interestRate = parseFloat(e)}
                               onTermChanged={(e) => this.term = parseInt(e)}/>
                </div>
                <Button className="mt-3" onClick={() => this.calculateInterestCharges()}>Calculate</Button>
                {this.state.interestCharges.length !== 0 ?
                    <DataDisplay interestCharges={this.state.interestCharges}/> : null}
            </Container>
        );
    }
}

export default App
