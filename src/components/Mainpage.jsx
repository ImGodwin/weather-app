import { useState } from 'react';
import { Container, Col, Form, FormControl } from 'react-bootstrap';
import City from './City';
import WeatherReport from './WeatherReport';

const Mainpage = () => {
  const [nameQuery, setNameQuery] = useState('');
  const [city, setCity] = useState([]);

  const url = 'http://api.openweathermap.org/geo/1.0/direct?q=';

  const handleChange = (e) => {
    setNameQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url + nameQuery + '&limit=6&appid=a7742852ffdf1480caff7424189579d8');
      if (response.ok) {
        const data = await response.json();
        setCity(data);
      } else {
        console.log('city input incorrect');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="align-self-center">
        <Col>
          <h1>Type Location:</h1>
        </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" placeholder="type and press Enter" value={nameQuery} onChange={handleChange} />
          </Form>
        </Col>
        <Col>
          {city.map((cityName, index) => (
            <City key={`cityName ${index}`} cityDetail={cityName} />
          ))}
        </Col>
      </Container>

      <WeatherReport cityData={city.name} />
    </>
  );
};

export default Mainpage;
