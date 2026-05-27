import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useSelector } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function ButtonAppBar({ search, setSearch , setFilter }) {

    const { name,email } = useSelector((state) => state.auth);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    let nav = useNavigate();
    
    const grid = ['Horror', 'Comedy','Thriller','Drama','Family','Romance','Fantasy','Adventure','Animation','Action','SciFi','Mystery'];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (item) => {
        console.log(item);
        if (typeof item === 'string') {
            setFilter(item);
        }
        setAnchorEl(null);
    };

    return (
        <Box sx={{ backgroundColor: 'white', color: 'red' }} >
            <AppBar position="static" sx={{ backgroundColor: '#1f1f1f', color: 'white' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" > CineFlix </Typography>
                    <Search sx={{ flexGrow: 0.5 }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            className="search-box"
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}/>
                    </Search>

                        <IconButton onClick={handleClick} color="inherit">
                            <FilterListIcon />
                        </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}>
                        {grid.map((item,id) => {
                            return <MenuItem key={id} onClick={() => handleClose(item)}>{item}</MenuItem>;
                        })}
                    </Menu>

                        <IconButton onClick={() => nav('/watchlist')} color="inherit">
                            <BookmarkIcon />
                        </IconButton>

                    {name && (
                        <Box sx={{ marginLeft: 'auto', textAlign: 'right', color: 'white' }}>
                            <Typography variant="body2">{name}</Typography>
                            <Typography variant="body2">{email}</Typography>
                        </Box>)}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
