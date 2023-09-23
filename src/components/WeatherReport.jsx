import { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DateAndTime from './DateAndTime';

const WeatherReport = (nameQuery) => {
  const param = useParams();
  //console.log(param.result);

  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeatherResult = async () => {
    try {
      const weatherResp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${param.lat}&lon=${param.lon}&appid=a7742852ffdf1480caff7424189579d8`
      );

      if (weatherResp.ok) {
        const weatherInfo = await weatherResp.json();
        console.log('lat and lon', weatherInfo);
        setWeatherData(weatherInfo);
        /* console.log('weather fetched'); */

        const fetchForeCast = await fetch(
          //`http://api.openweathermap.org/data/2.5/forecast?lat=${param.lat}&lon=${param.lon}&appid=a7742852ffdf1480caff7424189579d8`
          `http://api.openweathermap.org/geo/1.0/direct?q=${nameQuery}&limit=6&appid=a7742852ffdf1480caff7424189579d8`
        );

        if (fetchForeCast.ok) {
          const foreCastResult = await fetchForeCast.json();
          console.log('weather forecast', foreCastResult);
          setForecast(foreCastResult);
        }
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
    <>
      <Container className="h-25 border border-2 mt-5 bg-dark text-light w-50">
        {weatherData && forecast ? (
          <Row className="py-3">
            <Col lg={6}>
              <h2>{weatherData.name}</h2>
              <p>Base: {weatherData.base}</p>
              <p>Timezone: {weatherData.timezone}</p>
              <p>Cod: {weatherData.cod}</p>
              <p>Longitude: {weatherData.coord.lon}</p>
              <p>Latitude: {weatherData.coord.lat}</p>
            </Col>
            <Col>
              <h2>Temperature: {weatherData.main.temp}</h2>
              <h4>
                <DateAndTime />
              </h4>
              <p>Feels Like: {weatherData.main.feels_like}</p>
              <p>Minimum Temperature: {weatherData.main.temp_min}</p>
              <p>Maximum Temperature: {weatherData.main.temp_max}</p>
              <p>Clouds: {weatherData.clouds.all}</p>
            </Col>
          </Row>
        ) : (
          <Spinner animation="grow" />
        )}
      </Container>
    </>
  );
};

export default WeatherReport;
