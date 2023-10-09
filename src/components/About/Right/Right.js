import * as React from "react";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import CVFile from '../../../data/Resume_Prasoon_Patidar.pdf';

export default function RightAbout() {
    return <div>
        <div className="row">
            <span className="name" style={{textAlign: 'left'}}> ABOUT </span>
        </div>
        <div className="row">
            <span style={{textAlign: 'left', paddingBottom: 10, paddingTop: 10}}>
            Hi, I am a 4th year Ph.D. student in Societal Computing (<a href={"https://s3d.cmu.edu/"}>S3D</a>) at Carnegie Mellon University. I love to build (hardware and software) systems. I am interested in how we can
                enhance utility of smart environments and promote human-AI collaboration towards user health and wellness, while alleviating privacy concerns.
            </span>

            <span style={{textAlign: 'left', paddingBottom: 10, paddingTop: 10}}>
                I am fortunate to be advised by <a href={"https://www.synergylabs.org/yuvraj/"}>Dr. Yuvraj Agarwal</a>,
                and to get an opportunity to work closely with <a
                href={"http://www.mayankgoel.com/"}>Dr. Mayank Goel</a>, <a href={"http://www.mayankgoel.com/"}>Dr. Amy Ogan</a> and <a
                href={"https://design.cmu.edu/people/faculty/john-zimmerman"}>Dr. John Zimmerman</a>. I am actively engaged with <a
                href={"https://www.chrisharrison.net/index.php/Research/EduSense"}>Edusense</a> classroom sensing project. Before grad school, I worked with <a
                href={"https://www.bidgely.com/"}>Bidgely UtilityAI</a> on promoting energy efficiency using smart meter disaggregation, and
                completed my undergraduate (B.Tech) in Computer Science from <a
                href={"https://www.cse.iitd.ernet.in/"}> IIT Delhi </a>.
            </span>

            <span style={{textAlign: 'left'}}>
                <AnnouncementIcon style={{fontSize: 'x-large'}}/> I am actively looking for internship opportunities in Summer 2024. Please reach out to me at <b>prasoonpatidar [at] cmu [dot] edu</b>. Here is my <a
                href={CVFile} target={"_blank"} rel={"noreferrer"}>CV</a> for more details.
            </span>

        </div>

    </div>

}