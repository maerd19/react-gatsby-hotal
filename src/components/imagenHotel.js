import React from "react"
// Estos paquetes permitiran hacer consultas a la API con GraphQL
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

// Styled Component para componente de gatsby
const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`
const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 39, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    margin: 0%;

    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }
  p {
    font-size: 2rem;

    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // console.log(image.sharp.fluid)

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextoImagen>
        <h1>Bienvenido a Hotel Gatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </TextoImagen>
    </ImageBackground>
  )
}

export default ImagenHotel
