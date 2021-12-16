
import { Button, CardActionArea, CardActions, CardContent, CardMedia, makeStyles,Typography } from '@material-ui/core';
import { Card } from '@mui/material';

const useStyles = makeStyles((theme) => ({
media:{
    height:"250px",
    [theme.breakpoints.down('sm')]: {
        height:"150px",
        
},
},
card:{
    marginBottom:theme.spacing(5)
}
}))
const Post = () => {
    const classes = useStyles()
    return (

        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media}
                    image="https://images.pexels.com/photos/10346632/pexels-photo-10346632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="img1"

                />
            </CardActionArea>
            <CardContent>
            <Typography gutterBottom variant='h5'>
            Schnee
                </Typography>
                <Typography variant='body2'>
                Schnee entsteht, wenn sich in den Wolken feinste Tröpfchen unterkühlten Wassers an Kristallisationskeimen (zum Beispiel Staubteilchen) anlagern und dort ...
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" >more</Button>
                <Button size="small" color="primary" >share</Button>
            </CardActions>
        </Card>


    )
}

export default Post

