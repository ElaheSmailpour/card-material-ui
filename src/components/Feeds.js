
import {  makeStyles,Container } from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop:theme.spacing(10)
    }
}))
const Feeds = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.Feeds}>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
            </div>
      </Container>

    )
}

export default Feeds

