import './About.css';
import Box from '@mui/material/Box';
import * as React from "react";
import Grid from '@mui/material/Grid';
import LeftAbout from "./Left/Left";
import RightAbout from "./Right/Right";
import Divider from '@mui/material/Divider';


export default function About() {
    return (
        <div className='container'>
            <Box sx={{flexGrow: 1}} style={{
                paddingTop: '100px',
                boxSizing: 'content-box',
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <LeftAbout style={{height: '100vh'}}/>
                    </Grid>

                    <Divider orientation="vertical" flexItem>
                        <i/>
                    </Divider>
                    <Grid item xs={12} md={7}>
                        <RightAbout style={{height: '100vh'}}/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}


// export default function About() {
//     return <div className="container">
//         <div className="row">
//             <div className="col col-xs-12 col-md-6 col-lg-4">
//                 <LeftAbout/>
//             </div>
//             <Box>
//                 <Divider orientation="vertical" flexItem/>
//             </Box>
//             <div className="col-xs-12 col-md-6 col-lg-6">
//                 <RightAbout/>
//             </div>
//             <Paper elevation={16}/>
//         </div>
//     </div>
// }