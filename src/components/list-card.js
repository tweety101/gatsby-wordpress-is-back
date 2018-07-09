import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';


const Card = styled.li`
    height: 100px;
    border: solid 1px;
    list-style: none; 
`

const ListCard = props => {
    return (
        <Card><a
        href={props.slug}>
            <p>This is a list card for {props.title}</p>
        </a>
        </Card>
    )
}






export default ListCard