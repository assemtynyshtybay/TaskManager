import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import Categories from '../pages/categories';

const DropDown = styled('div')`
  position: relative;
  display: inline-block;
  &:hover {
    .content {
      display: block;
    }
  }
`
const DropDownContent = styled('div')`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  
`


const NavBar = () => {
  const  navigate = useNavigate()
  return(
    <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                        <Button
                            onClick={() => navigate('/tasks')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Tasks
                        </Button>
                        <Button
                            onClick={() => navigate('/shop')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Shop
                        </Button>
                        {/* <Button
                            onClick={() => navigate('/categories')}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Categories
                        </Button> */}
                        <DropDown>
                          <Button
                              onClick={() => navigate('/categories')}
                              sx={{my: 2, color: 'white', display: 'block'}}
                          >
                            Categories
                          </Button>
                          <DropDownContent className='content'>
                            <Categories/>
                          </DropDownContent>
                        </DropDown>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
  )
}

export default NavBar;