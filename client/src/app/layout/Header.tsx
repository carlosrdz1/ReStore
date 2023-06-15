import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface HeaderProps{
    darkMode: boolean;
    handleChange: () => void;
}

export default function Header(props: HeaderProps){
    const { darkMode, handleChange } = props;
    
    return (
        <AppBar sx={{mb: 4}} position='static'>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch 
                    checked = {darkMode}
                    onChange={handleChange}
                />
            </Toolbar>            
            
        </AppBar>
    )
}