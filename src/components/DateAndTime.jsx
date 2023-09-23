import React, { useState, useEffect } from 'react';
import Mainpage from './Mainpage';
import { Badge, Button } from 'react-bootstrap';

export const DateAndTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div>
        <Badge bg="success" className="px-5 mt-5">
          <h2> Current Time : {date.toLocaleTimeString()}</h2>
        </Badge>
      </div>
    </>
  );
};

export default DateAndTime;
