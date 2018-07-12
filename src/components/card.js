import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';

const Post = styled.li`

`

const Title = styled.h2`
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
                height="300"
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