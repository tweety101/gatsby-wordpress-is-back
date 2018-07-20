import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';


const BottomBarContainer = styled.div`
    width: 100%;
    background-color: grey;
    color: white;
    
    padding: 10px 10px 10px 10px; 
    a {
        color: white;
        text-shadow: none;
        background-image: none;
    
    }
`

const StyledLink = styled(Link)`
    padding: 10px;
`

const BottomBar = () => {
    return (
       <BottomBarContainer>
           <p>Copyright @ Hindu Media Bureau</p>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/advertising">Advertise with us</StyledLink>
        <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
        <StyledLink to="/terms-and-conditions">Terms and Conditions</StyledLink>

       </BottomBarContainer> 
    )
}

export default BottomBar;