import React  from 'react';
import HeaderBox from './HeaderBox';
import SearchBar from './Search';
import ResultedSearch from './ResultedMovies';
import PopularMovies from './PopularMovies'
import styled from 'styled-components'


const MoviesContainer = styled.div`
    display: flex;
    margin: 10px 0px 10px 10px;
    padding-top: 2px;
    padding-bottom: 5px;
    height: 100vh;
`;


const SearchResultsContainer = styled.div`
    display: block;
    margin: 10px 10px 10px 0px;
    border-radius: 10px;
    padding-left: 0.5%;
    padding-right: 0.5%;
    padding-top: 2px;
    padding-bottom: 5px;
    height: 100%;
    width: 100%;
`;

const PopularMoviesContainer = styled.div`
    display: block;
    margin: 5px 5px 5px 10px;
    border-radius: 10px;
    
    padding-left: 0.5%;
    padding-right: 0.5%;
    padding-top: 2px;
    padding-bottom: 5px;
    height: 100%;
    width: auto;
    overflow: auto;
`;

const ContainerTitle = styled.p`
    display: block;  
    margin-left : 15px;
    font-size : 16px;
`;

const Container = styled.div`
    display : grid;
    grid-template-columns: 20% auto;
    grid-column-gap: 5px;
`;


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            term : ''
        };
    }
    
    onTermSubmit = (term)=>{
        
        this.setState({
            term : term
        });
    }

    render(){
        return(
            <div>
                <HeaderBox/> 

                <Container>
                    <div>
                        <SearchBar onFormSubmit={this.onTermSubmit}/>
                        <ContainerTitle>
                                Popular Movies
                        </ContainerTitle>
                        <PopularMoviesContainer>
                            <PopularMovies />
                        </PopularMoviesContainer>
                    </div>

                    <MoviesContainer>
                        <SearchResultsContainer>
                            <ContainerTitle>
                                Search Results
                            </ContainerTitle>
                            <ResultedSearch term = {this.state.term}/>
                        </SearchResultsContainer>
                    </MoviesContainer>

                </Container>
                    
                    
                    


                    
            </div>
        )
    }


}

export default App

