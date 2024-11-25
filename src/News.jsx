import React, { Component } from "react";
import NewsItems from "./NewsItems";
import { Box, Button, Container, Grid, styled, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    pageSize: 5,
    country: "in",
    category: "sports",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true,
    };
  }
  updateData = async () => {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0052d0bbe84442699f9096c3fa9c881a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let newData = await data.json();
    this.props.setProgress(70)
    console.log(newData);
    this.setState({
      articles: newData.articles,
      totalResults: newData.totalResults,
      loading: false,
    });
    this.props.setProgress(300);
  };

  async componentDidMount() {
    this.updateData();
  }

  // prevButton = async () => {
  //   this.setState({ loading: true });
  //   await this.updateData();
  //   this.setState({
  //     page: this.state.page - 1,
  //     loading: false,
  //   });
  // };
  // nextButton = async () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   ) {
  //     this.setState({ loading: true });
  //   } else {
  //     await this.updateData();
  //     this.setState({
  //       page: this.state.page + 1,
  //       loading: false,
  //     });
  //   }
  // };
  fetchMoreData = async () => {
    this.setState({page:this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3de9d544d8b744b1912dd416717cf9b5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let newData = await data.json();
    console.log(newData);
    this.setState({
      articles: this.state.articles.concat(newData.articles),
      totalResults: newData.totalResults,
      loading: false,
    });
  }
  render() {
    return (
      <>
        <MainStyle>
      
          {/* <Box>
            <Typography className="title">DAILY NEWS</Typography>
          </Box> */}
          {/* <Box className="btnBox">
            <Button
              onClick={this.prevButton}
              disabled={this.state.page <= 1}
              variant="contained"
              className="sendBtn"
              startIcon={<KeyboardBackspaceIcon />}
            >
              Prev
            </Button>
            <Button
              onClick={this.nextButton}
              variant="contained"
              className="sendBtn"
              endIcon={<EastIcon />}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next
            </Button>
          </Box> */}
          
           <Box>
          {  <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    // inverse={true} 
    hasMore={this.state.articles.length !== this.state.totalResults}
    loader={<Spinner/>}
    scrollableTarget="scrollableDiv"
  > <Grid container xs={12}  className="gridContainer">
              {this.state.articles.map((item) => {
                return (
                  <Grid item key={item.id} lg={4} md={6} sm={6} xs={12} sx={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
                    <NewsItems
                      title={item.title}
                      description={item.description}
                      btnUrl={item.url}
                      ImageUrl={item.urlToImage}
                      source={item.source.name}
                    />
                  </Grid>
                );
              })}
              </Grid>
              </InfiniteScroll>
          }
          </Box>
         
        </MainStyle>
      </>
    );
  }
}
const MainStyle = styled(Box)({
  display:'flex',
justifyContent:'center',
// flexDirection:'column',
alignItems:'center',
  padding: "50px 0px",
  "& .gridContainer":{
marginTop:'50px',

  },
  "& .sendBtn": {
    background: "black",
    marginBottom: "50px",
    "&:hover": {
      background: "grey",
    },
  },
  "& .title": {
    fontWeight: 700,
    fontSize: "42px",
    textAlign: "center",
    fontFamily: "Josefin Sans, sans-serif",
    textDecoration: "underline",
  },
  "& .btnBox": {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
});
