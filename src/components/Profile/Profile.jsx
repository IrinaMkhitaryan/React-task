// VENDORS
import React from 'react';
import useGlobalStateUser from "../../store/index";

// MATERIAL UI
import Avatar from "@material-ui/core/Avatar/Avatar";
import { Grid, Paper, Typography } from "@material-ui/core";

// STYLES
import useStyles from "./Profile.style";


function Profile() {
    const classes = useStyles();
    const [
        {
            user,
        }
    ] = useGlobalStateUser();

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Typography variant="h6"
                                                                 className={classes.profileHeading}>Profile</Typography></Paper>
                </Grid>
                <Grid item xs={2}>
                    <Grid container justify="center">
                        <Avatar variant="square" className={classes.square}>
                            <img src={user.image} width="100%"/>
                        </Avatar>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body1"> {user.name}</Typography>
                    <Typography variant="body1"> {user.education}</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Profile;