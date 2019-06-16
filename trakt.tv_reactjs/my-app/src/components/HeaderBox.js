import React, {Component} from 'react'; 
import Traktlogoimage from './img/ILaaIYY0_400x400.png'
import HeaderBanner from './img/headerbanner.jpg'
import styled, {keyframes} from 'styled-components'


const Header = styled.div`
    background-size: cover;
    height: 95vh;
    background-position: top;
    background-image: linear-gradient(
        to right bottom,
        #fff7fb7c, 
        #045181be)
        ,url(${HeaderBanner});
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%)  
`;

const HeaderLogoContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
`; 

const HeaderLogo = styled.img`
    height: 40px;
`;

const HeaderContent = styled.div`
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const HeaderTitles = styled.div`
    color: white;
    margin-bottom: 40px;
`;


const HeaderTitlePrimaryMainToLeft = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-100px);
    }
    80%{
        transform: translateX(20px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
`;

const HeaderTitlePrimaryMain = styled.span`
    display: block; 
    font-size: 60px;
    font-weight: 600;
    letter-spacing: 20px;

    animation-name: ${HeaderTitlePrimaryMainToLeft}; 
    animation-duration: 1s;
    animation-timing-function: ease-out;
`;

const HeaderTitlePrimarySubToRight = keyframes`
    0%{
        opacity: 0;
        transform: translateX(100px);
    }
    80%{
        transform: translateX(-20px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
`;

const HeaderTitlePrimarySub = styled.span`
    display: block;
    font-size: 20px;

    animation: ${HeaderTitlePrimarySubToRight} 1s ease-out;  
`;


const ButtonMoveUp = keyframes`
    0%{
        opacity: 0;
        transform: translateY(100px);
    }

    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`;


const Button = styled.a`
    :visited, :link{
        display: inline-block;
        position: relative;

        font-size: 15px;
        font-weight: 500;
        letter-spacing: 2.5px;
        text-decoration: none;
        text-transform: uppercase;

        color: #777;  
        background-color: #fff;
        
        padding: 14px 15px;

        border-radius: 100px;
        box-shadow: 0 10px 40px rgba(255, 251, 251, 0.2);

        animation:${ButtonMoveUp} 1s ease-out;;
        
    }
    :hover{
        transform: translateY(-3px);
        box-shadow: 0 10px 40px rgba(255, 251, 251, 0.2);
    }
    :active{
        transform: translateY(-1px);
        box-shadow: 0 10px 40px rgba(255, 251, 251, 0.2);
    }
    ::after{
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
        background-color: white;
    }
    
    
    :hover::after{
        transform: scaleX(1.5) scaleY(1.6);
        opacity: 0;
    }

`;

const MongoURL = `mongodb+srv://mohammedmagdyismael:<mmi23j92@>@devconnector-03tjl.mongodb.net/test?retryWrites=true&w=majority`;

class HeaderBox extends React.Component{
    scrollToNode = (node) =>{
		node.scrollIntoView({ behavior: 'smooth' });
    }
    


    render(){
        return(       
            <Header>  
                <HeaderLogoContainer> 
                    <HeaderLogo src={Traktlogoimage} alt= "traktlogo" />
                </HeaderLogoContainer>

                <HeaderContent >
                    <HeaderTitles ref={(node) => this.w = node}>
                        <HeaderTitlePrimaryMain>TRAKT</HeaderTitlePrimaryMain>
                        <HeaderTitlePrimarySub>Automatically track what you're watching.</HeaderTitlePrimarySub>
                    </HeaderTitles>
                    
                    <Button onClick={this.connectDB} href='https://trakt.tv/' target="_black" > GoTO Trakt.tv </Button>
                        
                </HeaderContent>
                
            </Header>
        )
    }
}

export default HeaderBox