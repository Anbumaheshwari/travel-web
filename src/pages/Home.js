import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner1.jpg'
import '../styles/HomeStyles.css'
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
         <div className='header-container'>
          <h1>BEST DESTINATIONS AROUND THE WORLD</h1>
          <h2>
          Travel,enjoy and live a new 
          </h2>
        <h2>
          and full life.
        </h2>
        <Link to="/Destinations">
        <Button variant="contained" sx={{marginTop:"25px"}}>
          Find Out More
          </Button>
        </Link>
         </div>

        </div>
    </Layout>
  )
}

export default Home