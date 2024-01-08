import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardHeader, CardBody, CardText, CardTitle} from 'reactstrap';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

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
    <CardHeader tag="h5" >
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
  <Line options={options} data={data} />
</>
  );
}

export default App;
