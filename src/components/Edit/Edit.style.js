import makeStyles from "@material-ui/core/styles/makeStyles";

export default  makeStyles((theme) => ({

    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    avatarContent: {
        textAlign: 'center',
    },
    editButton: {
        bottom: '49px'
    },
    registerButton: {
        marginTop: theme.spacing(2)
    },
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));