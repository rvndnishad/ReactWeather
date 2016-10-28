var React = require('react');

var About = (prop) => {
  return (
    <div>
          <h1 className="text-center page-title">About</h1>
          <p>This is a weather applicaiton build on react. I have build this for 'The Complete Web App Developer Course.'</p>
          <p>
            Here some of the tools I have used.
          </p>
          <ul>
            <li>
              <a href="https://facebook.github.io/react">React</a>  - This was the JavaScript framework used.
            </li>
            <li>
              <a href="http://openweathermap.org">Open Weather Map</a>  - I used Open Weather Map to search for data by city name.
            </li>
          </ul>
    </div>

  );
};

module.exports=About;
