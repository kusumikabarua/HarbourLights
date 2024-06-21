import * as React from 'react';

import "./MediaCard.css"
import { Card,CardContent } from '@mui/material';

export default function MediaCard({image,text}) {
  return (
   
    <Card sx={{ maxWidth: 250 }}>
       <CardContent>
            <div className="card">
                <img src={image} alt='pics' />
               
            </div>
            <div className="titleWrapper">
                <p>{text}</p>
            </div>
            </CardContent>
          </Card>
  );
}
