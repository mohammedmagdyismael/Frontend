import React, {Component} from 'react';
import HeaderBox from './HeaderBox';
import SearchBar from './Search';
import ResultedSearch from './ResultedMovies';
import PopularMovies from './PopularMovies'
import styled, {keyframes} from 'styled-components'


const MoviesContainer = styled.div`
    display: flex;
    margin: 10px 0px 10px 10px;
    padding-top: 2px;
    padding-bottom: 5px;
    height: 100vh;
`;

const SearchResultsContainer = styled.div`
    display: inline-block;
    margin: 10px 10px 10px 0px;
    border-radius: 10px;
    
    padding-left: 0.5%;
    padding-right: 0.5%;
    padding-top: 2px;
    padding-bottom: 5px;
    height: 100%;
    width: 75%;
    overflow: auto;
`;

const PopularMoviesContainer = styled.div`
    display: inline-block;
    margin: 10px 10px 10px 0px;
    border-radius: 10px;
    
    padding-left: 0.5%;
    padding-right: 0.5%;
    padding-top: 2px;
    padding-bottom: 5px;
    height: 100%;
    width: 23%;
    overflow: auto;
`;

const ContainerTitle = styled.p`
    display: block;  
`;


class App extends React.Component{

    state = {
        term : ''
    };

    onTermSubmit = (term)=>{
        this.setState({
            term : term
        });
    }

    render(){
        return(
            <div>
                <HeaderBox/> 
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                
                <MoviesContainer>

                    <SearchResultsContainer>
                        <ContainerTitle>
                            Search Results
                        </ContainerTitle>

                        <ResultedSearch term = {this.state.term}/>

                    </SearchResultsContainer>

                    <PopularMoviesContainer>

                        <ContainerTitle>
                            Popular Movies
                        </ContainerTitle>

                        <PopularMovies />

                    </PopularMoviesContainer>

                </MoviesContainer>
            </div>
        )
    }


}

export default App

