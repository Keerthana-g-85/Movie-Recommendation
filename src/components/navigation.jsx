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
        // vertical padding + font size from searchIcon
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

export default function ButtonAppBar({ search, setSearch }) {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const grid = ["Horror", "Comedy","Thriller","Drama","Family","Romance","Fantasy","Adventure","Animation","Action","SciFi","Mystery"];
     let nav=useNavigate();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (item) => {
        if (typeof item === 'string') {
        setFilter(item);
    }
        setAnchorEl(null);
    };
    
    return (
        <Box sx={{ backgroundColor: 'white', color: 'red' }} >
            <AppBar sx={{ backgroundColor: 'white', color: 'red' }} position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" >
                        Netflix
                    </Typography>
                    <Search sx={{ flexGrow: 0.5 }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            className="search-box"
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Search>
                    <Button
                        onClick={handleClick}
                    >
                        Filter
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}>
                            {grid.map((item,id)=>{
                                return <MenuItem key={id} onClick={()=>handleClose(item)}>{item}</MenuItem>
                            })}
                        
                        
                    </Menu>
                    <Button color="inherit">Wishlist</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
