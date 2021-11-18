import './App.scss';
import {Button, Container} from "react-bootstrap";
import DataInput from "./components/DataInput";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {asset: 0, interestRate: 0.0, term: 0}
    }

    render() {
        return (
            <Container className="App">
                <DataInput onAssetChanged={(e) => this.setState({asset: parseInt(e)})}
                           onInterestRateChanged={(e) => this.setState({interestRate: parseFloat(e)})}
                           onTermChanged={(e) => this.setState({term: parseInt(e)})}/>
            </Container>
        );
    }
}

export default App;
