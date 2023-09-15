import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WeatherReport from './WeatherReport';
import { useDispatch } from 'react-redux';

const City = ({ cityDetail }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      {/* <WeatherReport cityDetail={cityDetail.lat} /> */}
      <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
        <Col xs={3} lg={4}>
          <h4>View weather report in: {cityDetail.name}</h4>
        </Col>
        <Col>
          <Link
            to="/weather-report"
            onClick={() => {
              dispatch({ type: 'ADD_TO_CITIES', payload: cityDetail });
            }}
          >
            <Button variant="danger">View Report</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default City;
