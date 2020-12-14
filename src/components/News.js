import React, { Component } from 'react';
import styled from "styled-components";

const BoxWrapper = styled.div`
    margin: 1.5%;
    width: 30%;
    height: 53vw;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px #707887;
    padding: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: .7s;

    :hover {
        width: 31%;
        height: 53.5vw;
        margin: 1%;
    }
`;

const ContainerTitle = styled.p`
    color: black;
    font-weight: 700;
    font-size: 3vw;
    /* transform: translate(0, -1vw); */
`;

const Article = styled.a`
    margin: 1vw;
    margin-right: 2vw;
    width: 30vw;
    height: 5vw;
    color: #7b7c8a;
    display: flex;
    flex-direction: row;

`;

const ArticleImage = styled.img`
    border-radius: 1vw;
    width: 4.6vw;
    height: 4vw;
    border: solid black 2px;
    margin-left: 1vw;
    margin-right: 1vw;
`;

const ArticleTitle = styled.div`
    width: 26vw;
    height: auto;
    font-size: 1.2vw;
    margin-left: 1vw;
    margin-right: .3vw;
`;



class News extends Component {
    state = {
        loading: true,
        articles: null
      };
    
    async componentDidMount() {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=a0031dc43da443b4b59015dc0fd285ac';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ articles: data.articles, loading: false });
        console.log(data);
    }  

    render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
    
        if (!this.state.articles) {
          return <div>didn't get any articles</div>;
        }
    
        return(
            <BoxWrapper>
                <ContainerTitle>Top News in US</ContainerTitle>
                <Article href = {this.state.articles[0].url}>
                    <ArticleImage href={this.state.articles[0].urlToImage}></ArticleImage>
                    <ArticleTitle>{this.state.articles[0].title}</ArticleTitle>
                </Article>
                <Article href = {this.state.articles[1].url}>
                    <ArticleImage href={this.state.articles[1].urlToImage}></ArticleImage>
                    <ArticleTitle>{this.state.articles[1].title}</ArticleTitle>
                </Article>
                <Article href = {this.state.articles[2].url}>
                    <ArticleImage href={this.state.articles[2].urlToImage}></ArticleImage>
                    <ArticleTitle>{this.state.articles[2].title}</ArticleTitle>
                </Article>
                <Article href = {this.state.articles[3].url}>
                    <ArticleImage href={this.state.articles[3].urlToImage}></ArticleImage>
                    <ArticleTitle>{this.state.articles[3].title}</ArticleTitle>
                </Article>
                <Article href = {this.state.articles[4].url}>
                    <ArticleImage href={this.state.articles[4].urlToImage}></ArticleImage>
                    <ArticleTitle>{this.state.articles[4].title}</ArticleTitle>
                </Article>
                <Article href = {this.state.articles[5].url}>
                    <ArticleImage href={this.state.articles[5].urlToImage}></ArticleImage>
                    <ArticleTitle>{this.state.articles[5].title}</ArticleTitle>
                </Article>
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
