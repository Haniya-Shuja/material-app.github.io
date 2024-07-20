// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import './cards.css'

// export default function ImgMediaCard(props) {
//   return (
//     <div className='main'>
// <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="red bag"
//         height="300"
//         image="/images/image1.jpg"
//       />    
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Button sx={{ backgroundColor: 'blue', color: 'white' }}>
//      Share
//     </Button>
//     <Button sx={{ backgroundColor: 'blue', color: 'white' }}>
//      Learn more
//     </Button>

//       </CardActions>
//     </Card>
//     </div>
//   );
// }

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './Cards.css'; // Importing the CSS file
import Button from '@mui/material/Button';


const MyCard = (props) => {
  return (
    <div className='main'>
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="red bag"
        height="140"
        image={props.image}
        // image="/images/image1.jpg" // Make sure this path is correct
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <hr/>
        <p className="card-description">{props.description}</p>
        
       
   {/* button */}
   <div className='btn' style={{ justifyContent: 'space-between'}}>
   <Button sx={{ backgroundColor: 'blue', color: 'white', margin:2 }}>
      Order Now
    </Button>
    <Button sx={{ backgroundColor: 'blue', color: 'white' }}>
      share
    </Button>
</div>
    </div>
     

 

    </Card>
    </div>
  );
}

export default MyCard;
