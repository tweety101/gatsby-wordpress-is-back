import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';


const BottomBarContainer = styled.div`
    width: 100%;
    background-color: grey;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    a {
        color: white;
        text-decoration: none;
    }

`

const StyledLink = styled(Link)`
    padding: 0 3em;
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