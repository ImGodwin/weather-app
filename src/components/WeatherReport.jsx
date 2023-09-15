import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const WeatherReport = ({ city }) => {
  const [getCity, setGetCity] = useState([]);

  const fetchCity = async () => {
    try {
      const url2 = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=a7742852ffdf1480caff7424189579d8`;

      const response = await fetch(url2);
      if (response.ok) {
        const data = await response.json();
        setGetCity(data);
      } else {
        console.log('not found');
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchCity();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{getCity.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherReport;
