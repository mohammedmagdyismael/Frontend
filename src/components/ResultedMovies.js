import React, {Component} from 'react';
import styled from 'styled-components'
import MoviePlaceholderImg from './img/movieFilmingSmall.jpg'
import axios from 'axios'

const ResultMovieCard = styled.div`
    display: inline-flex;
    flex-direction : column;
    flex-wrap : wrap;
    margin: auto;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    background-color:white;
    border: 1px solid #efefef;
    border-radius: 4px;
`;

const ResultMovieNameLink = styled.a`
    display : block;
    font-family: "Lato", sans-serif;
    text-decoration: none;
    font-style: unset;
    font-size: 15px;
    font-weight: 600;
    color: black;
    border: 0.5px 0.5px 0.5px 0.5px;
    width: fit-content;
    margin: 0px 0px 0px 8px;
    margin-right: 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 12ch;
`;

const ResultMovieYear = styled.p`
display : block;
    color: #9e9e9e;
    margin-top: 0.5px;
    margin-left: 8px;
    margin-bottom: 0.5px;
    margin-right: 0.5px;
    padding-right: 8px;
    width: fit-content;
    font-family: 'Lato', sans-serif ;
    font-size : 13px;
`;

const PlaceholderImg = styled.img`
    display : block;
    height: 140px;
`;

const EmptyStateMsg = styled.p`
    display : block;
    font-size : 20px;
    width: 100%;
    text-align: center;
    margin-top:20%;
    margin-bottom:10%;
`;
const EmptyStateMsgContainer = styled.div`
    width: 100%;
    align : center;
`;

class ResultedMovies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            moviesnames : [],
            mediatype : ['movie', 'show', 'episode', 'person', 'list']
        };
    }

    componentDidUpdate(){ 
 
        axios.get('https://api.trakt.tv/search/movie',
            {
                params: {
                    query: this.props.term,
                    page : 1,
                    limit : 100
                },
                headers: {  
                    'trakt-api-key': 'b6ab67a5ef6dce15759eb426151e0fb84e81572ff1f55c2909f2ced677099bc5',
                    'trakt-api-version': '2', 
                    'Content-Type': 'application/json'
                }
            }
        ).then(    
            result => {
                let movies = result.data.map(
                    (movie)=>{
                        var imdbURL = "https://www.imdb.com/title/"+movie.movie.ids.imdb;
                        
                        return (    
                            <ResultMovieCard>
                                   
                                    <PlaceholderImg src={MoviePlaceholderImg}/>                   

                                    <ResultMovieNameLink href={imdbURL} target="_blank">
                                        {movie.movie.title}
                                    </ResultMovieNameLink>
                                   
                                    <ResultMovieYear>
                                        Year: {movie.movie.year}
                                    </ResultMovieYear>

                            </ResultMovieCard>
                        )
                    })
                    this.setState({moviesnames:movies}); 
                    }
            )
    }

    render(){ 
        let letters = /^[A-Za-z]+$/;
        
        if(!this.props.term.search(letters)){
            return(
                
                <div> 
                    {this.state.moviesnames}
                </div>
            )
        }
        else if(this.props.term==""){
            return(
                
                <EmptyStateMsgContainer> 
                    <EmptyStateMsg>No Results to show</EmptyStateMsg>
                </EmptyStateMsgContainer>
            )
        }  
        else if(this.state.moviesnames.length == 0){
             return(
                
                <EmptyStateMsgContainer> 
                    <EmptyStateMsg>Your search did not match any Show</EmptyStateMsg>
                </EmptyStateMsgContainer>
            )
        }
            
        
    }
}


export default ResultedMovies