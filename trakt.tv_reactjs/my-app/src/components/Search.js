import React, {Component} from 'react';  
import styled from 'styled-components'


const SearchBarContainer = styled.div `
    display: block;
    margin: 10px 10px 10px 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 1px ;
    padding-left: 3%;
    padding-top: 2px;
    padding-bottom: 5px;
`;

const SearchBarTitle = styled.label `
    font-family: "Lato", sans-serif;
    font-weight: 800;
    font-size: 20px;
    color: black;
    margin-top: 5px;
    margin-left: 5px; 
`;

const SearchBarInput = styled.input`
    display: block;
    background-color:white;
    height:45px;
    width: 95%;
    border: solid;
    border-width:0px 0px 2px 0px;
    padding-left:9px;
    cursor:pointer; 

    :focus{
        outline: none;
    }
`;


class Search extends React.Component{

    state = {
        term : ''
    };

    onInputChange = (event)=>{
        this.setState({
            term : event.target.value
        }); 
        this.props.onFormSubmit(this.state.term);       
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
    }

    render(){
        return(
            <SearchBarContainer>
                <form onSubmit={this.onFormSubmit}>
                    
                    <SearchBarTitle>
                        Search Movie:
                    </SearchBarTitle>
                    
                    <SearchBarInput 
                        value={this.state.term} 
                        onChange={this.onInputChange} 
                        placeholder='Enter Movie Name ...' 
                        type='text'>
                    </SearchBarInput>

                </form>
            </SearchBarContainer>
        )
        }
}

export default Search