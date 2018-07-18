import React from 'react';
import styled from 'styled-components';
import FacebookIcon from './facebookicon';
import GoogleplusIcon from './googleplusicon';
import TwitterIcon from './twittericon';




const Sharebuttons = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    font-size: 1.5rem;
    background-color: #f5f5f5;
  
`


const sharebuttons = (props) => {
    return (
        <Sharebuttons>
        <p>Share:</p>
            <a
                href={"https://www.facebook.com/sharer.php?u="+ props.posturl}
                target="_blank">
                <FacebookIcon/>
            </a>
            <a
                href={"https://plus.google.com/share?url="+ props.posturl}
                target="_blank">
                <GoogleplusIcon/>
            </a>
            <a
                href={"https://twitter.com/share?url="+ props.posturl + "&text=Simple Share Buttons"}
                target="_blank">
                <TwitterIcon/>
            </a>
        </Sharebuttons>
    )
}

export default sharebuttons



