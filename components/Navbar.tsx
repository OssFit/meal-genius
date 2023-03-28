import {
  Box,
  Flex,
  Button,
  Text,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import Image from "next/image"



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
        <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        px={{ base: 4, md: 300 }}
        py={4}
       
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            
            <Text
              fontWeight={650}
              lineHeight={1.2}
              fontSize={{ base: "lg", md: "3xl" }}
            >
              Meal Genius 
            </Text>
            
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={1}>
              <Image alt='logo' width={80} height={80} src='/logo.png'></Image>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}