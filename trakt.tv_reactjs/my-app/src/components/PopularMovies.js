import React, {Component} from 'react'; 
import styled from 'styled-components'


const PopularMovieCard = styled.div`
    display: block;
    margin: 2px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    background-color:white;
    border: 1px solid #efefef;
    border-radius: 4px  ;
`;

const PopularMovieNameLink = styled.a`
    display: inline-flexbox;
    font-family: "Lato", sans-serif;
    text-decoration: none;
    font-style: unset;
    font-size: 17px;
    font-weight: 600;
    color: black;
    border: 0.5px 0.5px 0.5px 0.5px;
    width: fit-content;
    margin: 0px 0px 0px 8px;
    margin-right: 0;
`;

const PopularMovieYear = styled.p`
    color: #222121;
    margin-top: 0.5px;
    margin-left: 8px;
    margin-bottom: 0.5px;
    margin-right: 0.5px;
    padding-right: 8px;
    width: fit-content;
    font-family: sans-serif;
`;



class PopularMovies extends React.Component{
    constructor(){
        super();
        this.state = {
            moviesnames : [],
        };
    }

    componentDidMount(){
        fetch('https://api.trakt.tv/movies/popular',
         {
            method: 'GET',   
            headers: {  
                'trakt-api-key': 'b6ab67a5ef6dce15759eb426151e0fb84e81572ff1f55c2909f2ced677099bc5',
                'trakt-api-version': '2', 
                'Content-Type': 'application/json'
            }
        }).then(
            results=> {
                return results.json();
            }
            ).then(
                data=>{ 
                    let names = data.map((movie)=>{
                        var imdbURL = "https://www.imdb.com/title/"+movie.ids.imdb;
                        return (
                    
                            <PopularMovieCard>    
                                                                   
                                <PopularMovieNameLink href={imdbURL}>
                                    {movie.title}
                                </PopularMovieNameLink>
                            
                                <PopularMovieYear>
                                    Year: {movie.year}
                                </PopularMovieYear>

                            </PopularMovieCard>
                        )
                    })
                    this.setState({moviesnames:names}); 
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