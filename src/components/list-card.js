import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';

const Mycard = styled.article`
    height: 100px;
    display: flex;
    margin: 0px 0px 20px 0px;
`
const Cardimage = styled.div`
    width: 200px;
    margin-right: 10px;
`
const Cardinfo = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        font-family: inherit;
        font-size: 0.6em;
    }
`
const Cardtitle = styled.h4`
    font-family: inherit;
    font-size: .8em;
    text-transform: capitalize;
    margin: .2em;
`


const ListCard = props => {
    return (
        <Link
            to={`/${props.slug}/`}>
            <Mycard>
                <Cardimage>
                    <Image cloudName="dkeudosjel"
                        publicId={props.image.replace("http://cms.hindumediabureau.com/wp-content/uploads","hmb-media")}
                        src={props.image}
                        responsive
                        secure
                    >
                        <Transformation
                            width="auto"
                            height="80"
                            dpr="auto"
                            crop="fill"
                            gravity="face:center"
                            responsive_placeholder="blank"
                        />
                    </Image></Cardimage>
                    <Cardinfo>
                <Cardtitle>{props.title}</Cardtitle>
                <p>{props.date}</p>
                    </Cardinfo>
            </Mycard>
        </Link>
    )
}






export default ListCard