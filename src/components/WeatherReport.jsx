import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const WeatherReport = () => {
  const param = useParams();
  //console.log(param.result);

  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherResult = async () => {
    try {
      const weatherResp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${param.lat}&lon=${param.lon}&appid=a7742852ffdf1480caff7424189579d8`
      );

      if (weatherResp.ok) {
        const weatherData = await weatherResp.json();
        setWeatherData(weatherData);
        console.log('weather fetched');
      } else {
        console.log('city input incorrect');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherResult();
  }, []);

  return (
    <Container>
      {weatherData && (
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{weatherData.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default WeatherReport;
