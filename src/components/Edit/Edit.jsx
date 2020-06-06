// VENDORS
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useGlobalStateUser from "../../store/index";
// MATERIAL UI
import Avatar from "@material-ui/core/Avatar/Avatar";
import { Button, Grid, TextField } from "@material-ui/core";
// STYLES
import useStyles from "./Edit.style"


function Edit() {
    const classes = useStyles();

    const [edit, setEdit] = useState(false);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [education, setEducation] = useState('');
    const [
        {
            user,
        },
        {
            setActions: {
                setUserData
            }
        }
    ] = useGlobalStateUser();

    return (
        <>
            {!edit ? (
                <Grid container spacing={2} justify="center">
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <div className={classes.avatarContent}><Avatar
                                src={user.image}
                                className={classes.large}/>
                                {/*<img src={user.image}/>*/}
                                <Button className={classes.editButton} variant="outlined" bottom={41} color="primary"
                                        onClick={() => setEdit(true)}>
                                    EDIT
                                </Button></div>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Grid container spacing={2} justify="center">
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <form noValidate autoComplete="off">
                                <div className={classes.root}>

                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        onChange={(event) => {
                                            setImage(URL.createObjectURL(event.target.files[0]))
                                        }}
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span"
                                                onClick={(e) => console.log(e)}>
                                            Upload
                                        </Button>
                                    </label>
                                    <Avatar
                                        src={image ? image : user.image}
                                    />
                                </div>
                                <TextField label="Name" variant="outlined" fullWidth margin="normal"
                                           value={name ? name : user.name}
                                           onChange={event => setName(event.target.value)}/>
                                <TextField label="Education" variant="outlined" fullWidth margin="normal"
                                           value={education ? education : user.education}
                                           onChange={event => setEducation(event.target.value)}/>
                                <Link to='/profile'>

                                    <Button className={classes.registerButton} variant="outlined" color="primary"
                                            onClick={() => setUserData({
                                                name: name,
                                                education: education,
                                                image: image
                                            })} fullWidth>
                                        Register
                                    </Button>
                                </Link>

                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>

    )
}

export default Edit;