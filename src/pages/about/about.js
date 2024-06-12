import React from 'react';

const About = () => {
  return (
    <>
      <h4>
        There's lots of cool things about red pandas.
      </h4>
      <p>Here are a few fun facts:</p>
      <div className="col-lg-7 text-start">
        <ul>
          <li>Contrary to their name, red pandas are not related to pandas at all. They actually part of a unique taxonomic group called Ailuridae and a recent discovery found that there are ttwo separate subspecies</li>
          <li>They are extremely endangered with only roughly 2500 left in the wild Himalayas they call home</li>
        </ul>
      </div>
      <img src="https://i.redd.it/x6ne436g38441.jpg" className="mw-100 px-2" />
    </>
  );
};

export default About;