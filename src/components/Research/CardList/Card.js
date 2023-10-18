import * as React from 'react';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideocamIcon from '@mui/icons-material/Videocam';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from 'mdb-react-ui-kit';
import CardActions from "@mui/material/CardActions";
import {Button} from "@mui/material";


export default function ShowCard({
                                     name,
                                     authors,
                                     description,
                                     conference,
                                     thumbnail,
                                     paper_link,
                                     code_link,
                                     video_link,
                                     demo_link,
                                     ppt_link,
                                     blog_link,
                                     cardId,
                                     isSelected,
                                     onClick
                                 }) {
    const unselected_row_height = 200;
    // if (isSelected) {
    //     return <Grid key={cardId} item xs={12} sm={12}>
    //         <MDBCard className='mb-3' onClick={() => onClick(cardId)}>
    //             <MDBCardImage position='top' src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...'/>
    //             <MDBCardBody>
    //                 <MDBCardTitle>Card title</MDBCardTitle>
    //                 <MDBCardText>
    //                     This is a wider card with supporting text below as a natural lead-in to additional content. This
    //                     content is a little bit longer.
    //                 </MDBCardText>
    //                 <MDBCardText>
    //                     <small className='text-muted'>Last updated 3 mins ago</small>
    //                 </MDBCardText>
    //             </MDBCardBody>
    //         </MDBCard>
    //     </Grid>
    // } else {
    if (window.innerWidth > 1000) {
        return <Grid key={cardId} item xs={12} sm={12}>
            <Card onClick={() => onClick(cardId)}>
                <MDBCard className={"CardData"}>
                    <MDBRow className='g-0' style={{maxHeight: unselected_row_height}}>
                        <MDBCol md='2'>

                            <MDBCardImage style={{maxHeight: '100%'}}
                                          src={process.env.PUBLIC_URL + thumbnail}
                                          className={"img-fluid"}/>

                            {/*<MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp'*/}
                            {/*              class="img-fluid" alt='...'*/}
                            {/*              fluid/>*/}
                        </MDBCol>
                        <MDBCol md='10'>
                            <MDBCardBody sx={{height: '100%'}}>
                                <MDBCardTitle style={{textAlign: 'left', fontSize: 'x-large'}}>

                                    <a href={paper_link}> {name} </a></MDBCardTitle>
                                <MDBCardText style={{textAlign: 'left'}}>
                                    {authors}, (<b>{conference}</b>)

                                </MDBCardText>
                                <MDBCardText style={{textAlign: 'left'}}>
                                    {description}
                                </MDBCardText>
                                {/*<MDBCardText>*/}
                                {/*    <small className='text-muted'>Last updated 3 mins ago</small>*/}
                                {/*</MDBCardText>*/}
                                <CardActions style={{alignSelf: 'flex-end'}}>
                                    {paper_link === '#' ? null :
                                        <Button size={"x-large"}><a href={paper_link} target={'_blank'}
                                                                    rel="noreferrer">
                                            <PictureAsPdfIcon/> Paper</a></Button>}
                                    {code_link === '#' ? null :
                                        <Button size={"x-large"}><a href={code_link} target={'_blank'} rel="noreferrer">
                                            <GitHubIcon/> Code</a></Button>}
                                    {video_link === '#' ? null :
                                        <Button size={"x-large"}><a href={video_link} target={'_blank'}
                                                                    rel="noreferrer">
                                            <VideocamIcon/> Video</a></Button>}
                                    {demo_link === '#' ? null :
                                        <Button size={"x-large"}><a href={demo_link} target={'_blank'} rel="noreferrer">
                                            <VisibilityIcon/> Demo</a></Button>}
                                    {ppt_link === '#' ? null :
                                        <Button size={"x-large"}><a href={ppt_link} target={'_blank'} rel="noreferrer">
                                            <CoPresentIcon/> PPT</a></Button>}
                                    {blog_link === '#' ? null :
                                        <Button size={"x-large"}><a href={blog_link} target={'_blank'} rel="noreferrer">
                                            <RssFeedIcon/> Blog</a></Button>}
                                </CardActions>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </Card>
        </Grid>
    } else {
        return <Grid key={cardId} item xs={12} sm={12}>
            <Card onClick={() => onClick(cardId)}>
                <MDBCard className={"CardData"}>
                    <MDBRow className='g-0' style={{maxHeight: unselected_row_height}}>
                        {/*<MDBCol md='2'>*/}

                        {/*    /!*<MDBCardImage style={{maxHeight: '100%'}}*!/*/}
                        {/*    /!*              src={process.env.PUBLIC_URL + thumbnail}*!/*/}
                        {/*    /!*              className={"img-fluid"}/>*!/*/}

                        {/*    /!*<MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp'*!/*/}
                        {/*    /!*              class="img-fluid" alt='...'*!/*/}
                        {/*    /!*              fluid/>*!/*/}
                        {/*</MDBCol>*/}
                        <MDBCol md='12'>
                            <MDBCardBody sx={{height: '100%'}}>
                                <MDBCardTitle style={{textAlign: 'left', fontSize: 'small'}}>

                                    <a href={paper_link}> {name} </a></MDBCardTitle>
                                <MDBCardText style={{textAlign: 'left', fontSize: 'x-small'}}>
                                    {authors}, (<b>{conference}</b>)

                                </MDBCardText>
                                <MDBCardText style={{textAlign: 'left', fontSize: 'xx-small'}}>
                                    {description}
                                </MDBCardText>
                                {/*<MDBCardText>*/}
                                {/*    <small className='text-muted'>Last updated 3 mins ago</small>*/}
                                {/*</MDBCardText>*/}
                                <CardActions style={{alignSelf: 'flex-end'}}>
                                    {paper_link === '#' ? null :
                                        <Button size={"x-small"}><a href={paper_link} target={'_blank'}
                                                                    rel="noreferrer">
                                            <PictureAsPdfIcon/> Paper</a></Button>}
                                    {code_link === '#' ? null :
                                        <Button size={"x-small"}><a href={code_link} target={'_blank'} rel="noreferrer">
                                            <GitHubIcon/> Code</a></Button>}
                                    {video_link === '#' ? null :
                                        <Button size={"x-small"}><a href={video_link} target={'_blank'}
                                                                    rel="noreferrer">
                                            <VideocamIcon/> Video</a></Button>}
                                    {demo_link === '#' ? null :
                                        <Button size={"x-small"}><a href={demo_link} target={'_blank'} rel="noreferrer">
                                            <VisibilityIcon/> Demo</a></Button>}
                                    {ppt_link === '#' ? null :
                                        <Button size={"x-small"}><a href={ppt_link} target={'_blank'} rel="noreferrer">
                                            <CoPresentIcon/> PPT</a></Button>}
                                    {blog_link === '#' ? null :
                                        <Button size={"x-small"}><a href={blog_link} target={'_blank'} rel="noreferrer">
                                            <RssFeedIcon/> Blog</a></Button>}
                                </CardActions>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </Card>
        </Grid>

    }

}