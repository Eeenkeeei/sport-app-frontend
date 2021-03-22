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
        input: {
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

    const [selectedAction, setSelectedAction] = useState<"reg" | "login" | null>(null);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

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

            {selectedAction === null ?
                <>
                    <Typography className={classes.header}>У вас уже есть аккаунт?</Typography>
                    <Button variant="outlined" onClick={() => {
                        setSelectedAction("login")
                        setLogin("");
                        setPassword("");
                    }}>
                        Войти
                    </Button>
                    <Typography>Еще нет аккаунта?</Typography>
                    <Button variant="outlined" onClick={() => {
                        setSelectedAction("reg");
                        setLogin("");
                        setPassword("");
                    }}>
                        Зарегистрироваться
                    </Button>
                </> : null
            }
            {selectedAction === "reg" ?
                <>
                    <Typography className={classes.header}>Регистрация</Typography>
                    <TextField value={login} onChange={(e) => setLogin(e.target.value)} className={classes.input}
                               variant="outlined" margin="dense" label="Login"/>
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} className={classes.input}
                               variant="outlined" margin="dense" label="Password"/>
                    <div className={classes.buttonsContainer}>
                        <Button onClick={handleRegistration} variant="outlined">
                            Зарегистрироваться
                        </Button>
                    </div>
                </>
                : null
            }

            {selectedAction === "login" ?
                <>
                    <Typography className={classes.header}>Вход</Typography>
                    <TextField value={login} onChange={(e) => setLogin(e.target.value)} className={classes.input}
                               variant="outlined" margin="dense" label="Login"/>
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} className={classes.input}
                               variant="outlined" margin="dense" label="Password"/>
                    <div className={classes.buttonsContainer}>
                        <Button onClick={handleLogin} variant="outlined">
                            Войти
                        </Button>
                    </div>
                </>
                : null
            }


        </div>
    )
}
