import { useState } from 'react';
import { Container, Col, Form, Row } from 'react-bootstrap';
import City from './City';
import WeatherReport from './WeatherReport';
import DateAndTime from './DateAndTime';

const Mainpage = () => {
  const [nameQuery, setNameQuery] = useState('');
  const [city, setCity] = useState(null);
  /*  const [weatherData, setWeatherData] = useState(null); */

  //always initialize an object as null

  const url = 'http://api.openweathermap.org/geo/1.0/direct?q=';

  const handleChange = (e) => {
    setNameQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url + nameQuery + '&appid=a7742852ffdf1480caff7424189579d8');
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        setCity(data[0]);
        //the setcity notifies the Jsx the component taht it should re render to update the jsx
      } else {
        //console.log('city input incorrect');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DateAndTime />
      <Container className="align-self-center my-5 w-50">
        <Row className="d-flex">
          <Col>
            <h1>Type Location:</h1>
            <Col></Col>
          </Col>
        </Row>

        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="type city name and press Enter"
              value={nameQuery}
              onChange={handleChange}
            />
          </Form>
        </Col>
        <Col>{city && <City cityDetail={city} nameQuery={nameQuery} />}</Col>
      </Container>

      {/* {city && <WeatherReport cityLat={city.lat} cityLon={city.lot} />} */}
    </>

    //need
  );
};

export default Mainpage;
