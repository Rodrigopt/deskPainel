import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardHeader, CardBody, CardText, CardTitle} from 'reactstrap';

function App() {
  return (
    <>
  <Card
    className="my-2"
    color="primary"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader tag="h5">
      MTTA
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="success"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      Header
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="danger"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      Header
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="warning"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      Header
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="info"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
      Header
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
</>
  );
}

export default App;
