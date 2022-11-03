import React from 'react';
import DestinationData from './DestinationData';
import MountainImg1 from "../Components/assets/1.jpg";
import MountainImg2 from "../Components/assets/2.jpg";
import MountainImg3 from "../Components/assets/3.jpg";
import MountainImg4 from "../Components/assets/4.jpg";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <DestinationData
    className="first-des"
      heading="Taal volcano, Batangas"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sed temporibus debitis mollitia fugiat ab recusandae similique quas. Nesciunt, ea rem neque sed, distinctio obcaecati ut eaque qui odit aliquam ratione fuga nulla blanditiis veritatis praesentium molestiae dolorem consequatur fugit harum dolorum quos omnis. Deleniti necessitatibus recusandae quasi facilis aspernatur."
      img1={MountainImg1} 
      img2={MountainImg2} 
    />
    <DestinationData
     className="first-des-reverse"
      heading="Mt, Daguldul, Batangas"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sed temporibus debitis mollitia fugiat ab recusandae similique quas. Nesciunt, ea rem neque sed, distinctio obcaecati ut eaque qui odit aliquam ratione fuga nulla blanditiis veritatis praesentium molestiae dolorem consequatur fugit harum dolorum quos omnis. Deleniti necessitatibus recusandae quasi facilis aspernatur."
      img1={MountainImg3} 
      img2={MountainImg4} />
    </div>
  );
};

export default Destination;