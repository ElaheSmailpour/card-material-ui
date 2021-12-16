
import { Button, Container, Fab, FormControl, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Select, TextField, Tooltip, InputLabel, Snackbar } from '@material-ui/core';

import MuiAlert from '@mui/material/Alert';

import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: "10px",
        right: "10px"
    }
    ,
    container: {
        background: "white",
        width: "500",
        height: "550",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "100vw",
            height: "100vh"
        },
    },
    form: {
        padding: theme.spacing(2)
    },
    item: {
        marginBottom: theme.spacing(4)
    },
    select: {
        width: "100%"
    },
    lables: {
        display: "block",
        width: "100%",
        transformOrigin: "top right"
    }
}))
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;

  }
const Add1 = () => {
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const classes = useStyles()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
    return (
        <>
            <Tooltip title="Add Post" aria-label='add' onClick={() => setOpen(true)}>

                <Fab color="primary" className={classes.fab}>
                    add

                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form autoComplete='off' className={classes.form}>
                        <div className={classes.item}>
                            <TextField
                                placeholder='title'
                                style={{ width: "100%" }}>

                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="filled-multiline-static"
                                label="Your Message"
                                multiline
                                rows={4}
                                defaultValue="Messages"
                                variant="filled" style={{ width: "100%" }}>

                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormControl className={classes.select}>

                                <InputLabel className={classes.lables}>Select</InputLabel>
                                <Select>

                                    <MenuItem value="public">public</MenuItem>
                                    <MenuItem value="private">private</MenuItem>
                                    <MenuItem value="friends">friends</MenuItem>
                                </Select>
                            </FormControl>

                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend" />Gender
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio size='small' />} label="Female" />
                                <FormControlLabel value="male" control={<Radio size='small' />} label="Male" />
                                <FormControlLabel value="other" control={<Radio size='small' />} label="Other" />
                                <FormControlLabel
                                    value="special"
                                    disabled
                                    control={<Radio />}
                                    label="special"
                                />
                            </RadioGroup>

                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary" style={{ marginLeft: "10px" }}  onClick={() => setOpenAlert(true)}>send</Button>
                            <Button  variant="outlined" color="primary" onClick={() => setOpen(false)}>cancel</Button>
                        </div>
                        <div>
                           
                            <Snackbar open={openAlert} autoHideDuration={4000} anchorOrigin={{vertical:"top", horizontal:"left"}} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    This is a success message!
                                </Alert>
                            </Snackbar>
                        </div>
                    </form>
                </Container>
            </Modal>
        </>

    )
}

export default Add1

