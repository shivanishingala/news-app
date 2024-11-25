import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, styled, Badge } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export default class NewsItems extends Component {
  
  render() {
    let { title, description, btnUrl, ImageUrl, source } = this.props;
    return (
      <>
        <MainStyle>
          
        <Badge
              className="badge"
              badgeContent={source}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
            </Badge>
            <Card>
              <CardMedia
                sx={{ height: 240 }}
                image={ImageUrl}
                title="green iguana"
              />
            
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={btnUrl}
                  target="_blank"
                  className="readBtn"
                >
                  Read more
                </Button>
              </CardActions>
            </Card>
       
        </MainStyle>
      </>
    );
  }
}
const MainStyle = styled(Box)({
  maxWidth:'345px',
 position:'relative',
 display:'flex',
 justifyContent:'center',
  "& .readBtn": {
    background: "black",
    color: "white",
  },
  "& .badge": {
    width: "-webkit-fill-available",
    position: "absolute",
    top: "0px",
    right: "0px",
    background: "#a71d1d",
  },
  ".css-dlwkee-MuiBadge-badge": {
    background: "red",
    color: "white",
  },
});
