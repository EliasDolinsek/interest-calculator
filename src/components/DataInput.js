import {Container, Row} from "react-bootstrap";

function DataInput(props) {
    return <Container>
        <Row>
            <span>Kapital <input type="number" onChange={(e) => {
                 props.onAssetChanged(e.target.value)
            }}/> Euro</span>
        </Row>
        <Row>
            <span>Zinssatz <input type="number" step=".01" onChange={(e) => {
                props.onInterestRateChanged(e.target.value)
            }}/> % p.a.</span>
        </Row>
        <Row>
            <span>Laufzeit <input type="number" onChange={(e) => {
                props.onTermChanged(e.target.value)
            }}/> Jahre</span>
        </Row>
    </Container>
}

export default DataInput