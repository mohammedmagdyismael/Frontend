import React, {Component} from 'react'; 
import styled from 'styled-components'
import MoviePlaceholderImg from './img/movieFilmingSmall.jpg'
import axios from 'axios'

const PopularMovieCard = styled.div`
    display: inline-flex;
    flex-direction : row;
    flex-wrap : wrap;
    margin: auto;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    background-color:white;
    border: 1px solid #efefef;
    border-radius: 4px;
    width: 100%;
`;

const PopularMovieNameLink = styled.a`
    display: block;
    font-family: "Lato", sans-serif;
    text-decoration: none;
    font-style: unset;
    font-size: 17px;
    font-weight: 600;
    color: black;
    border: 0.5px 0.5px 0.5px 0.5px;
    margin: 0px 0px 0px 8px;
    margin-right: 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10ch;
`;

const PopularMovieYear = styled.p`
    display: block;
    color: #222121;
    margin-top: 0.5px;
    margin-left: 8px;
    margin-bottom: 0.5px;
    margin-right: 0.5px;
    padding-right: 8px;
    width: fit-content;
    font-family: sans-serif;
`;

const PlaceholderImg = styled.img`
    display : block;
    height: 40px;
`;

 

class PopularMovies extends React.Component{
    constructor(){
        super();
        this.state = {
            moviesnames : [],
        };
    }
    componentDidMount(){


        axios.get('https://api.trakt.tv/movies/popular',
            {
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
                        var imdbURL = "https://www.imdb.com/title/"+movie.ids.imdb;
                        return(
                            <PopularMovieCard> 
                                    <PlaceholderImg src={MoviePlaceholderImg}/>                   
                                    <PopularMovieNameLink href={imdbURL} target="_blank">
                                        {movie.title}
                                    </PopularMovieNameLink>
                                    <PopularMovieYear>
                                        Year: {movie.year}
                                    </PopularMovieYear>
                            </PopularMovieCard>
                        )
                    }
                )
                this.setState({moviesnames:movies}); 
            }
            
        )
    }

    render(){
        return(
            <div>
                {this.state.moviesnames}
            </div>
        )
    }
}


export default PopularMovies