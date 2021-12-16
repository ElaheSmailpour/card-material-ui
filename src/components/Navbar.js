import { AppBar, Toolbar, Typography, makeStyles, InputBase, alpha, Badge, Avatar } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Cancel } from '@mui/icons-material';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
   
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifycontent: "space-between",
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block"

        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none"

        }
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down('xs')]: {
            display: (props)=>(props.open ? "flex" : "none")

        }
    },
    input: {
        color: "white",
        marginRight: theme.spacing(1)

    },
    cancel:{
        [theme.breakpoints.up('sm')]: {
           display:"none"
        }
    },
    searchButton:{
        marginLeft:theme.spacing(2)
    },
    icon: {
     
        alignItems: "center",
        display: (props)=>(props.open ? "none" : "flex")
    },
    badge:{
        marginLeft:theme.spacing(2)
    }

}))
const Navbar = () => {
    const [open,setOpen]=useState(false)
    const classes = useStyles({open})
    return (
        <div>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h6' className={classes.logoSm}>
                        home
                    </Typography>
                    <Typography variant='h6' className={classes.logoLg}>
                        toplearn
                    </Typography>
                    <div classsName={classes.search}>
                        <Search>
                            <SearchIconWrapper>
                               
                            </SearchIconWrapper>
                            <InputBase placeholder='search' className={classes.input} />
                            <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
                        </Search>

                    </div>

                    <div classsName={classes.icon}>
                    <SearchIcon className={classes.searchButton} onClick={()=>setOpen(true)} />

                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error" className={classes.badge}>
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 10 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={10} color="error" className={classes.badge}>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Avatar src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="pic" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar