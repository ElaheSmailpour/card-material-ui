
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Bookmark, ExitToApp, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
const useStyles = makeStyles((theme) => ({
    container: {
        position:"sticky",
        top:"0",
        paddingTop: theme.spacing(10),
        height: "100vh",
        color: "white",
        backgroundColor: "grey",
        [theme.breakpoints.down('sm')]: {
            backgroundColor: "aqua",
            color: "blue",
            border: "1px solid red"
        },
        icon: {
            marginLeft: theme.spacing(1),
        },
    }
}))
const Leftbar = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <HomeIcon className={classes.icon} />
                <Typography className={classes.text}>
                    home
                </Typography>

            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>
                Person
                </Typography>

            </div>
            <div className={classes.item}>
                <ListIcon className={classes.icon} />
                <Typography className={classes.text}>
                List
                </Typography>

            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icon} />
                <Typography className={classes.text}>
                PhotoCamera
                </Typography>

            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.text}>
                PlayCircleOutline
                </Typography>

            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.text}>
                TabletMac
                </Typography>

            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.text}>
                Bookmark
                </Typography>

            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon} />
                <Typography className={classes.text}>
                Storefront
                </Typography>

            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>
                Settings
                </Typography>

            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.text}>
                ExitToApp
                </Typography>

            </div>
        </Container>

    )
}

export default Leftbar

