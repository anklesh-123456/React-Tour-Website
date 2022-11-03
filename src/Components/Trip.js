import React from 'react';
import TripData from './TripData';
import Trip1 from "../Components/assets/5.jpg";
import Trip2 from "../Components/assets/6.jpg";
import Trip3 from "../Components/assets/8.jpg";
import "./TripStyles.css";
const Trip = () => {
  return (
   
    <div className='trip'>
<h1>Recent Trips</h1>
<p>You can discover unique destination using Google Maps</p>
<div className='tripcard'>
<TripData
image={Trip1}
heading="Trip in Indonesia"
text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam eligendi accusantium doloremque atque. Laboriosam, voluptatibus dignissimos. Eveniet qui, vero quam eligendi omnis consequuntur et, tempora ad quae, exercitationem ullam."
/>

<TripData
image={Trip2}
heading="Trip in Malaysia"
text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam eligendi accusantium doloremque atque. Laboriosam, voluptatibus dignissimos. Eveniet qui, vero quam eligendi omnis consequuntur et, tempora ad quae, exercitationem ullam."
/>

<TripData
image={Trip3}
heading="Trip in France"
text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam eligendi accusantium doloremque atque. Laboriosam, voluptatibus dignissimos. Eveniet qui, vero quam eligendi omnis consequuntur et, tempora ad quae, exercitationem ullam."
/>
</div>

    </div>
  );
};

export default Trip;