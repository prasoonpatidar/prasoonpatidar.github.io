import React from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AboutJson from '../../data/about.json';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='text-center p-4'>
                    {/*© Prasoon Patidar*/}
                    <a className='text-reset fw-bold' href='https://prasoonpatidar.com/'>
                        © Prasoon Patidar
                    </a>
                </div>

                <div>
                    <InstagramIcon style={{fontSize: '40px', paddingRight: '20px'}}
                                   onClick={() => window.open(AboutJson.instagram, "_blank")}/>
                    <FacebookIcon style={{fontSize: '40px', paddingRight: '20px'}}
                                  onClick={() => window.open(AboutJson.facebook, "_blank")}/>
                    <SchoolIcon style={{fontSize: '40px', paddingRight: '20px'}}
                                onClick={() => window.open(AboutJson.scholar, "_blank")}/>
                    <LinkedInIcon style={{fontSize: '40px', paddingRight: '20px'}}
                                  onClick={() => window.open(AboutJson.linkedin, "_blank")}/>
                    <GitHubIcon style={{fontSize: '40px', paddingRight: '20px'}}
                                onClick={() => window.open(AboutJson.github, "_blank")}/>

                </div>
            </section>


        </MDBFooter>
    );
}