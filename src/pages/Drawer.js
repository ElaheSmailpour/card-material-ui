import { Box, Divider, IconButton, List, ListItem, ListItemText, SwipeableDrawer,makeStyles } from "@material-ui/core";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(() => ({
    list:{
        width:250
    }
}))

export default function Drawer() {
const [open,setOpen]=useState(false)

const classes = useStyles()
    return (
        <div>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(true)}
            >
                <MenuIcon/>
            </IconButton>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() =>  setOpen(true)}

            >
                <div className={classes.list}>
                    <Box textAlign="center" p={2}>Components</Box>
                    <Divider/>
                    <List>
                        <ListItem button onClick={() => { }}>
                            <ListItemText primary={"Container"}/>

                           
                        </ListItem>
                        <ListItem button onClick={() => { }}>
                            <ListItemText primary={"Grid"}/>

                           
                        </ListItem>
                        <ListItem button onClick={() => { }}>
                            <ListItemText primary={"Box"}/>

                           
                        </ListItem>
                        <ListItem button onClick={() => { }}>
                            <ListItemText primary={"Cards"}/>

                           
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    );
}