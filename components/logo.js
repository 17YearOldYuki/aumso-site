import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
front-weigth= bold;
font-size= 10px;
display: inline-flex;
align-items: center;
height: 20px;
line-height: 20px;
padding: 10px;

&:hover img{
    transform: rotate(20deg);
}
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark').png}`
    
    return(
        <Link href="/">
            <a>
                <LogoBox>
                    <Text 
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily= 'Fira Code, monospace'
                    fontSize="26px"
                    fontWeight='bold'
                    ml={2}
                    >.aumso</Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo