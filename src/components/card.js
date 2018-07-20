import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';

const Post = styled.li`
  padding: 10px;
  margin-bottom: 5rem;
  a {
        text-shadow: none;
        background-image: none;
      }
`

const Title = styled.h2`
  text-transform: capitalize;
  margin: 0.2rem 0.5rem 1rem 0.5rem;
`

const Date = styled.h3`

  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`
const Card = props => {
  console.log(props.image);
  return (
    <Post>
      <Link to={`/${props.slug}/`}>
      <Image cloudName="dkeudosjel"
              publicId={props.image.replace("http://cms.hindumediabureau.com/wp-content/uploads","hmb-media")}
              src={props.image}
              responsive
              secure
            >
            <Transformation
                width="auto"
                height="350"
                dpr="auto"
                crop="fill"
                gravity="face:center"
                responsive_placeholder="blank"
              />
            </Image>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
      </Link>
    </Post>
  )
}

export default Card