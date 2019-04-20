import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'

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
                    //console.log(data[0].year);
                    
                    let names = data.map((movie)=>{
                        var imdbURL = "https://www.imdb.com/title/"+movie.ids.imdb;
                        return (
                    
                    <div className='card-layout'>    
                                <div key={movie.title}>
                                    
                                    <a className='card-title' href={imdbURL}>{movie.title}</a>
                                    <p className='card-description-0'>
                                        Year: {movie.year}
                                    </p>
                                </div>
                            </div>
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