import { AppBar, Toolbar, Typography, Box, IconButton, InputAdornment, Input } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const user = {name: "John"};

export default function Navbar() {
    return (
        <AppBar position="static" sx={{  }}>
            <Toolbar sx={{ border: '1px solid green' }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Brand Name
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center'}}>
                    <Input
                        placeholder="Search..."
                        size="medium"
                        sx={{color: 'white'}}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon sx={{color: 'white'}}/>
                            </InputAdornment>
                        }
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton edge="end" color="inherit">
                    <AccountCircle />
                </IconButton>
                <Typography variant="h" sx={{ marginLeft: 1 }}>
                    {user.name}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}