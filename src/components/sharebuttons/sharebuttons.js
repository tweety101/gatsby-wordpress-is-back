import React from 'react';
import styled from 'styled-components';
import FacebookIcon from './facebookicon';
import GoogleplusIcon from './googleplusicon';
import TwitterIcon from './twittericon';




const Sharebuttons = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
    background-color: #f5f5f5;
    margin: 3rem 0 1rem 0;
  
`
const Sharetext = styled.p`
    justify-self: start;
`


const sharebuttons = (props) => {
    return (
        <Sharebuttons>
        <Sharetext>Easy sharing:</Sharetext>
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



