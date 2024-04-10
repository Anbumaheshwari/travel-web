import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:5,
      ml:10,"& h4":{
        fontWeight:"bold",
      mb: 2,
      color:'#014a8f'}}}>
      <Typography variant='h4'>
        Contact Joe-Of-Explore
      </Typography>
      <p>
      Travel is the movement of individuals or groups from one location to another, encompassing a wide range of purposes and experiences. It is a fundamental aspect of human existence, driven by curiosity, necessity, and the desire for exploration.
      </p>
      </Box>
      <Box sx={{m:3,width:"600px",ml:10,"@media (max-width:600px)":{
      width:'300px',
      },
      }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"#d3d8e4",color:'#014a8f'}} align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                 <SupportAgentIcon 
                 sx={{color:'#014a8f',pt:'1'}}/>1800-00-0000 (tollfree)
                 </TableCell>
                 </TableRow>
                 <TableRow>

                 <TableCell>
                 <MailIcon
                 sx={{color:'#014a8f',pt:'1'}}/>help@joeofexplore.com
                 </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                 <CallIcon
                 sx={{color:'#014a8f',pt:'1'}}/> 1234567890
                 </TableCell>
              </TableRow>
              
                
              </TableBody>
           
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact