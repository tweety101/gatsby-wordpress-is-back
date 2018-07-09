import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';

const Post = styled.li`
  border: 1px solid black;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  list-style:none;
  transition: background 0.2s;
  @media screen and (min-width: 500px) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: 700px) {
    flex: 0 0 32%;
  }
  &:hover {
    background: grey;
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: blue;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Card = props => {
  return (
    <Post>
      <Link to={`/${props.slug}/`}>
      <Image cloudName="dkeudosjel"
              publicId={props.image.split('/').slice(-1)[0]}
              src={props.image}
              responsive
              secure
            >s
            <Transformation
                width="auto"
                dpr="auto"
                crop="fill"
                gravity="face:center"
                placeholder="blank"
              />
            </Image>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
      </Link>
    </Post>
  )
}

export default Card