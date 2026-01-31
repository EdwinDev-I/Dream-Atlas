import { useState, useEffect } from "react";

export function CountUp({value, duration = 800}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration/ 16);

    const timer = setInterval(() => {
       start += increment;
       if(start >= value) {
        setCount(value);
        clearInterval(timer)
       } else {
        setCount(Math.floor(start));
       }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span className="month-count">{count}</span>
}

export function CountUp2({value, duration = 800}) {
  const [num, setNum] = useState(0);

   useEffect(() => {
    let start = 0;
    const increment = value / (duration/ 16);

    const timer = setInterval(() => {
       start += increment;
       if(start >= value) {
        setNum(value);
        clearInterval(timer)
       } else {
        setNum(Math.floor(start));
       }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

 return <h2 className="user-stats-count">{num}</h2>;
}

export function CountUp3({value, duration = 800}) {
  const [num2, setNum2] = useState(0);

   useEffect(() => {
    let start = 0;
    const increment = value / (duration/ 16);

    const timer = setInterval(() => {
       start += increment;
       if(start >= value) {
        setNum2(value);
        clearInterval(timer)
       } else {
        setNum2(Math.floor(start));
       }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

 return <h2 className="user-stats-count">{num2}</h2>;
}

export function CountUp4({value, duration = 800}) {
  const [num3, setNum3] = useState(0);

   useEffect(() => {
    let start = 0;
    const increment = value / (duration/ 16);

    const timer = setInterval(() => {
       start += increment;
       if(start >= value) {
        setNum3(value);
        clearInterval(timer)
       } else {
        setNum3(Math.floor(start));
       }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

 return <h2 className="user-stats-count">{num3}</h2>;
}

export function CountUp5({value, duration = 800}) {
  const [num4, setNum4] = useState(0);

   useEffect(() => {
    let start = 0;
    const increment = value / (duration/ 16);

    const timer = setInterval(() => {
       start += increment;
       if(start >= value) {
        setNum4(value);
        clearInterval(timer)
       } else {
        setNum4(Math.floor(start));
       }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

 return <h2 className="user-stats-count">{num4}</h2>;
}

export function CountUpValue({values , duration = 800}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = values / (duration/ 16);

    const timer = setInterval(() => {
       start += increment;
       if(start >= values) {
        setValue(values);
        clearInterval(timer)
       } else {
        setValue(Math.floor(start));
       }
    }, 16);

    return () => clearInterval(timer);
  }, [values, duration]);

  return  <span className="theme-value">{value}</span>;
}
