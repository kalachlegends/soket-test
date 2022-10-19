import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
import { AuthContext } from '../context/AuthContext'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const AuthContextUse = React.useContext(AuthContext)
    const pages = [
        { title: "Домой", link: "/", isAuth: true },
        { title: "Чат", link: "/chat", isAuth: AuthContextUse.isAuth }
    ];
    console.log(AuthContextUse)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/">
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}>
                            {pages.map((page) => (
                                !page.isAuth ? <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                                    <Link to={page.link}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </Link>
                                </MenuItem> : ""
                            ))}
                        </Menu>
                    </Box>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="asd"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            page.isAuth ? <Link to={page.link}>
                                <Button
                                    key={page.link}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.title}

                                </Button>
                            </Link> : ""

                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: "flex", gap: "10px" }}>
                        {!AuthContextUse.isAuth ? <Typography




                            sx={{ color: 'white', display: "flex", gap: "20px" }}
                        >
                            <Link to={"/register"}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Регистрация

                                </Button>
                            </Link>
                            <Link to={"/login"}>
                                <Button


                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Авторизоваться

                                </Button>
                            </Link>

                        </Typography> : <MenuBar />}



                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
};
export default ResponsiveAppBar;
