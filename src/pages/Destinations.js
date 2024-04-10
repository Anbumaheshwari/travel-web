import React from 'react'
import {TopPlaces} from '../data/data'
import Layout from '../Components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Destinations = () => {
  return (
    <Layout>
    <Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
     {TopPlaces.map((Destinations) => (
        <Card sx={{maxWidth:'390px',display:'flex', m:2}}>
          <CardActionArea>
            <CardMedia sx={{minHeight:'400px'}}
            component={'img'} 
            src={Destinations.image}
            alt={Destinations.name}
             />
             <CardContent>
              <Typography variant='h5'color={'#014a8f'} gutterBottom component={"div"}>
                {Destinations.name}
              </Typography>
              <Typography variant='body2'>
                {Destinations.description}
              </Typography>
             </CardContent>

            
          </CardActionArea>
        </Card>

      ) )
     }
    </Box>
    </Layout>
  )
}

export default Destinations