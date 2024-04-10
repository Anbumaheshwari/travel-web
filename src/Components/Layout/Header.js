import React,{useState}from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {Link,NavLink} from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileeOpen, setMobileOpen]= useState(false)
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileeOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClik={handleDrawerToggle} sx={{textAlign:'center'}}>
     <Typography color={'#014a8f'} 
        variant='h6'
        component='div'
        sx={{flexGrow: 1, my:2}}>
          <TravelExploreIcon/>
          Joy-Of-Explore
        </Typography>
        <Divider/>
          <ul className='mobile-navigation'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/Destinations'}>Destinations</Link>
            </li>
            <li>
              <Link to={'/Contact'}>Contact</Link>
            </li>
          </ul>

        
    </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor:"#d3d8e4"}}>
        <Toolbar>
          <IconButton  
          aria-label="open drawer"
          edge="start" 
          sx={{
            mr: 2,
            display:{sm:"none"},
            }}
            onClick={handleDrawerToggle}>
          <MenuIcon/>
          </IconButton>
        <Typography 
        color={'#014a8f'} 
        variant='h6'
        component='div'
        sx={{flexGrow: 1}}>
          <TravelExploreIcon/>
          Joy-Of-Explore
        </Typography>
        <Box sx={{display:{xs: 'none', sm:'block'}}}>
          <ul className='navigation-menu'>
            <li>
              <NavLink activeClassName="active" to={'/'}>
                Home
                </NavLink>
            </li>
          
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/Destinations'}>Destinations</NavLink>
            </li>
            <li>
              <NavLink to={'/Contact'}>Contact</NavLink>
            </li>
            
            
      
          </ul>

        </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
       <Drawer variant='temporary' 
       open={mobileeOpen} 
       onClose={handleDrawerToggle} 
       sx={{display:{xs:'block', sm:'none'},"& .MuiDrawer-paper":{
        boxSizing:"border-box",
        width: "240px"
       }}}>
        {drawer}
        </Drawer>    
        </Box>
        <Toolbar/>

    </Box>
    </>
  )
}

export default Header