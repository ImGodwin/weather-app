import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* import { useDispatch } from 'react-redux'; */

const City = ({ cityDetail, nameQuery }) => {
  //const dispatch = useDispatch();

  return (
    <>
      <Container>
        {/* {<WeatherReport nameQuery={nameQuery} />} */}
        <Row>
          <Col lg={4} className="mx-0 mt-3 p-3">
            <Card>
              <Card.Body>
                <Card.Img
                  className="w-100"
                  variant="top"
                  src="https://plus.unsplash.com/premium_photo-1667689956673-8737a299aa8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                />
                <Card.Title>{cityDetail.name}</Card.Title>
                <h5>
                  <strong>{cityDetail.state}</strong>
                </h5>
                <Card.Subtitle className="mb-2 text-muted">{cityDetail.country}</Card.Subtitle>
                <Card.Text>for more on the weather in {cityDetail.name} click below</Card.Text>
                <Link to={`/${cityDetail.lat}/${cityDetail.lon}`}>
                  <Button variant="danger">View Report</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default City;
