import './Left.css'
import '@blueprintjs/core/lib/css/blueprint.css';
import * as React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import AboutJson from '../../../data/about.json';
import CVFile from '../../../data/Resume_Prasoon_Patidar.pdf';

export default function LeftAbout() {
    return <div>
        <div className="row">
            <div className="avatar">
                <img src={process.env.PUBLIC_URL + "/images/avatar/IMG_8484.jpg"} className="img-fluid rounded-circle"
                     alt="..."/>
            </div>
        </div>
        {/*<div className="row">*/}
        {/*    <span className="name" style={{textAlign: "center", paddingTop: '2em'}}>Prasoon Patidar</span>*/}
        {/*    <span className="bp4-blockquote quote">*/}
        {/*        “I have not failed. I've just found 10,000 ways that won't work.” - Edison*/}
        {/*    </span>*/}
        {/*</div>*/}
        <div className="row">
            <ul style={{paddingTop: '1em', paddingBottom: '1em'}}>
                <EmailIcon style={{fontSize: '60px', paddingRight: '20px'}}
                           onClick={() => window.open(AboutJson.email, "_blank")}/>
                <SchoolIcon style={{fontSize: '60px', paddingRight: '20px'}}
                            onClick={() => window.open(AboutJson.scholar, "_blank")}/>
                <LinkedInIcon style={{fontSize: '60px', paddingRight: '20px'}}
                              onClick={() => window.open(AboutJson.linkedin, "_blank")}/>
                <GitHubIcon style={{fontSize: '60px', paddingRight: '20px'}}
                            onClick={() => window.open(AboutJson.github, "_blank")}/>
                <DescriptionIcon style={{fontSize: '60px', paddingRight: '20px'}}
                                 onClick={() => window.open(CVFile, "_blank")}/>
            </ul>
        </div>
    </div>
    // <div className="col-xs-12 col-sm-6 col-lg-4">
    // </div>
}