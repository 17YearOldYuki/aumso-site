import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Paragraph1 from '../components/paragraph1'

const Home = () => (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          p={4}
          textAlign="center"
        >
        </Box>
  
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" fontFamily="Fira Code" fontSize="25px">
              Nikita
            </Heading>
            <Box borderRadius="lg" p={0} textAlign="center"/>
            <Paragraph1>aumso ( back-end developer | Streamer )
            </Paragraph1>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="Newaumso.png"
              alt="Profile image"
            />
          </Box>
        </Box>
  
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" fontFamily="Fira Code" fontSize="18px">
            About
          </Heading>
          <Paragraph fontFamily="Fira Code" fontSize="16px">
          Greetings my name is Nikita my alias aumso. I'm 16 years old. 
          I'm a back-end developer. I'm in college 1 a course at a Web developer. 
          I live in Russia in the city of Rostov-on-Don. 
          I like to read manga, books and play video games.
          </Paragraph>
          <Paragraph font-family="Fira Code" fontSize="16px">
          Favorite game Dead Cells and series of games Masyanya (olds will understand;))). 
          Of the manga, only the Wolf and spice are beloved. 
          Favorite JS yap. Favorite framework Chakra UI/Tailwindcss. 
          I like strawberries, banana, figs from fruits.
          </Paragraph>
          <Paragraph fontFamily="Fira Code" fontSize="16px">
          I am currently studying React and the work of Java. 
          I am also going to collect setup well will take about 3-5 years :/( maybe less),
          if it is interesting then at the end there will be a button.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="https://t.me/aumso">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue.800">
              Communication with me
              </Button>
            </NextLink>
          </Box>
        </Section>
        </Container>
    </Layout>
)

export default Home
