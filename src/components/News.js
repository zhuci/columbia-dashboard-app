import React, { Component } from 'react';
import styled from "styled-components";

const BoxWrapper = styled.div`
    margin: 1.5%;
    padding: 2%;
    width: 30%;
    height: 70vw;
    display: flex;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px #707887;
    align-items: center;
    justify-content: center;
`;

const NewsTitle = styled.h5`
    color: black;
    margin-left: 30px;
    font-weight: 700;
    font-size: 3vw;
`;

const ArticleTitle = styled.a`
    position: absolute; 
    bottom: 10%;
    margin: 3%;
    width: 30vw;
    color: #3CABDB;
`;

// export const News = () => {
//     return(
//       <BoxWrapper>
//           <Text>Insert News Here</Text>
//       </BoxWrapper>
//     );
// };

//google news api test
// fetch(req)
//     .then((response) => response.json())
//     .then(function(data) {
//         console.log(response.json());
        
//     })
var newsArticles;

async function searchNews() {
    const response = await fetch("https://google-news.p.rapidapi.com/v1/topic_headlines?lang=en&country=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "33466b19cemsh35ff737ca90b06ap15a102jsn10fac9043e75",
            "x-rapidapi-host": "google-news.p.rapidapi.com"
        }
    });    
    const body = await response.json();
    console.log(body)
    return body.value;
  }



class News extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       error: null,
    //       isLoaded: false,
    //       items: []
    //     };
    //   }

    // componentDidMount() {
    //     fetch("https://api.example.com/items")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     items: result.items
    //                   });
    //             },
    //             (error) => {
    //                 this.setState({
    //                   isLoaded: true,
    //                   error
    //                 });
    //               }
    //         )
    // }

    // render() {
    //     var url = 'http://newsapi.org/v2/top-headlines?' +
    //       'country=us&' +
    //       'apiKey=a0031dc43da443b4b59015dc0fd285ac';
    //     var req = new Request(url);

    //     fetch(url).then((res)=>{
    //         return res.json()
    //     }).then((data)=>{
    //         newsArticles = data.articles;
    //         //console.log(newsArticles[0].url);
    //         //console.log(newsArticles[0].title)

    //     })
        render() {
            return(
                <BoxWrapper>
                    <NewsTitle>Top News in US</NewsTitle>
                    <ArticleTitle href = {newsArticles.article[0].link}> {newsArticles.article[0].title} </ArticleTitle>
                    <ArticleTitle href = "https://www.cnn.com/2020/12/13/us/spacex-falcon-9-launch/index.html"> SpaceX Falcon 9 launches and deploys satellite, days after another rocket crashed in Texas - CNN </ArticleTitle>
                </BoxWrapper> 
            );
    }


    // return (
    //     <BoxWrapper>
    //         <NewsTitle>Top News Today in the US</NewsTitle>
    //         <ArticleTitle href = "https://www.cnn.com/2020/12/13/us/spacex-falcon-9-launch/index.html"> SpaceX Falcon 9 launches and deploys satellite, days after another rocket crashed in Texas - CNN </ArticleTitle>
    //     </BoxWrapper> 
    // );
}



export default News;
