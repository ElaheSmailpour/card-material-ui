import * as React from 'react';


import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles(() => ({
      root:{
          maxWidth:345,
      },
      media:{
          height:140,
      }
}))


export default function MediaCards({image,title,decription}) {
    const classes = useStyles()
   
  return (

     <Card className={classes.root}>
         <CardActionArea>
             <CardMedia  className={classes.media} image={image}
             title={title}
             >
                 
             </CardMedia>
             <CardContent>
                 <Typography gutterBottom variant='h5' component="h2">
                   {title}
                 </Typography>
                 <Typography variant='body2' color="textSecondary" component="p">
                {decription}
                 </Typography>
             </CardContent>
         </CardActionArea>
         <CardActions>
             <Button size="small" color="primary">share</Button>
             <Button size="small" color="primary">Learn more</Button>
         </CardActions>
     </Card>

  );
}