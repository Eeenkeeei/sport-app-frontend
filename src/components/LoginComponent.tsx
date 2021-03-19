import React, {useState} from 'react'
import {Button, createStyles, makeStyles, TextField, Theme, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {changeLoading, fetchUserAuth, fetchUserRegistration} from "../redux/actions";

interface LoginComponent {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        },
        header: {
            marginTop: 150
        },
        input:{
            marginTop: 15,
            width: 300
        },
        buttonsContainer: {
            marginTop: 20,
            display: "flex",
            justifyContent: "space-around",
            width: 300,
        }
    }),
);

export const LoginComponent = (props: LoginComponent) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [login, setLogin] = useState("user");
    const [password, setPassword] = useState("password");

    const handleLogin = () => {
        dispatch(changeLoading(true));
        dispatch(fetchUserAuth(login, password));
    }

    const handleRegistration = () => {
        dispatch(changeLoading(true));
        dispatch(fetchUserRegistration(login, password));
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.header}>Авторизация</Typography>
            <TextField value={login} onChange={(e) => setLogin(e.target.value)} className={classes.input} variant="outlined" margin="dense" label="Login"/>
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} className={classes.input} variant="outlined" margin="dense" label="Password"/>

            <div className={classes.buttonsContainer}>
                <Button onClick={handleLogin} variant="outlined">
                    Войти
                </Button>
                <Button onClick={handleRegistration} variant="outlined">
                    Зарегистрироваться
                </Button>
            </div>

        </div>
    )
}
