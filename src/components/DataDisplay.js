import {Table} from "react-bootstrap";

function DataDisplay(props) {
    return <Table responsive striped>
        <thead>
            <tr>
                <th>Year</th>
                <th>Interest Charge</th>
            </tr>
        </thead>
        <tbody>
            {props.interestCharges.map((e) => <tr>
                <td>{e[0]}</td>
                <td>{e[1]}</td>
            </tr>)}
        </tbody>
    </Table>
}

export default DataDisplay