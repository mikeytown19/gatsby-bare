import React from 'react'

import { Box, Text, Heading, Container, Button} from "@chakra-ui/react";
import {Layout} from '../components'

const index = () => {
  return (

    <Layout >
        <Box  bg="linear-gradient(to left,#6c63ff 4%,#afa2ff 97%)" >
          <Container  maxWidth={1200}>
                <Box maxW={["100%", "100%", "50%"]}  py={50}>
                  <Heading  as="h1" fontSize={["5xl","5xl", "7xl"]} color="white">
                    Kodia creates fast, secure, and scalable web experiences.
                  </Heading>
                  <Text as="h6" size="md" pt={10} color="white">The web is competitive - Kodia builds with the JAMstack to give you the advantage.</Text>
                </Box>
                <Button color="#6c63ff" mb={10}>Contact us</Button>
        </Container>
        </Box>
    </Layout>


  )
}

export default index