
import { makeStyles, Container, Avatar, Typography, ImageList, ImageListItem, Divider } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import Link from '@mui/material/Link';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position:"sticky",
        top:"0",
    },
    title: {
        fontSize: "16px",
        color: "555",
        fontWeight: "#555"
    },
    imagelist:{
left:"auto",
right:"0",
top:"0%",
transform:"translateX(50%)"
    }
    ,
    link:{
        fontSize:"16px",
        color:"green",
        marginRight:"10px"
    }
}))
const Rightbar = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography gutterBottom className={classes.title} /> Friends

            <AvatarGroup max={4} style={{marginBottom:"20px",overflow:"hidden"}}>

                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Typography gutterBottom className={classes.title}>Galerie</Typography>
            <ImageList  cols={2} rowHeight={100} style={{marginBottom:"20px"}}>
               
                    <ImageListItem >
                        <img src="https://images.pexels.com/photos/9546316/pexels-photo-9546316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.imagelist}  alt="img" />
                    </ImageListItem>
                    <ImageListItem >
                        <img src="https://images.pexels.com/photos/10068149/pexels-photo-10068149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.imagelist}  alt="img" />
                    </ImageListItem>
                    <ImageListItem >
                        <img src="https://images.pexels.com/photos/9546316/pexels-photo-9546316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.imagelist}  alt="img" />
                    </ImageListItem>
                    <ImageListItem >
                        <img src="https://images.pexels.com/photos/10068149/pexels-photo-10068149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.imagelist}  alt="img" />
                    </ImageListItem>
                    <ImageListItem >
                        <img src="https://images.pexels.com/photos/10068149/pexels-photo-10068149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.imagelist}  alt="img"/>
                    </ImageListItem>
                    <ImageListItem >
                        <img src="https://images.pexels.com/photos/9546316/pexels-photo-9546316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.imagelist} alt="img" />
                    </ImageListItem>

                ))
            </ImageList>
            <Typography gutterBottom className={classes.title}>List</Typography>
<Link component="button" href="#" className={classes.link} varient="body2" >sport</Link>
<Divider flexItem style={{marginBottom:"10px"}}/>
<Link component="button" href="#" className={classes.link} varient="body2">politic</Link>
<Divider flexItem style={{marginBottom:"10px"}}/>
<Link component="button" href="#" className={classes.link} varient="body2">kunst</Link>

        </Container>

    )
}

export default Rightbar

