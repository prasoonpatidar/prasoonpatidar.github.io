import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Button} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function ShowCard({cardId, isSelected, onClick}) {
    return <Grid key={cardId} item xs={12} sm={isSelected ? 12 : 4}>
        <Card className={"CardData"} sx={{minWidth: 200}} onClick={() => onClick(cardId)}>
            <CardMedia component="img"
                       image="https://www.gierad.com/wp-content/themes/gratitude/projects/EMSense/thumbnail.jpg"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    EM-SENSE: {cardId}
                </Typography>
                <Typography variant="body2">
                    Touch Recognition of Uninstrumented Electrical and Electromechanical Objects. 2015.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" onClick={() => onClick(cardId)}>Learn More</Button>
            </CardActions>
        </Card>
    </Grid>
}