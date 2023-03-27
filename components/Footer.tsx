// import {
//   Box,
//   chakra,
//   Container,
//   Stack,
//   Text,
//   useColorModeValue,
//   VisuallyHidden,
// } from "@chakra-ui/react"
// import { FaTwitter, FaYoutube } from "react-icons/fa"
// import { ReactNode } from "react"

// const SocialButton = ({
//   children,
//   label,
//   href,
// }: {
//   children: ReactNode
//   label: string
//   href: string
// }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
//       rounded={"full"}
//       w={8}
//       h={8}
//       cursor={"pointer"}
//       as={"a"}
//       href={href}
//       target="_blank"
//       display={"inline-flex"}
//       alignItems={"center"}
//       justifyContent={"center"}
//       transition={"background 0.3s ease"}
//       _hover={{
//         bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
//       }}
//     >
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   )
// }

// export default function Footer() {
//   return (
//     <Box
//       bg={useColorModeValue("gray.50", "gray.700")}
//       color={useColorModeValue("gray.700", "gray.200")}
//     >
//       <Container
//         as={Stack}
//         maxW={"6xl"}
//         py={4}
//         direction={{ base: "column", md: "row" }}
//         spacing={4}
//         justify={{ base: "center", md: "space-between" }}
//         align={{ base: "center", md: "center" }}
//       >
//         <Text>© 2023 Thankful Thoughts.</Text>
//         <Stack direction={"row"} spacing={6}>
//           <SocialButton label={"Twitter"} href={"https://twitter.com/hqasmei"}>
//             <FaTwitter />
//           </SocialButton>
//           <SocialButton
//             label={"YouTube"}
//             href={"https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"}
//           >
//             <FaYoutube />
//           </SocialButton>
//         </Stack>
//       </Container>
//     </Box>
//   )
// }

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { ReactNode } from "react"

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.700")}
      color={useColorModeValue("gray.700", "gray.200")}
     
    
    >
      <Container
        as={Stack}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 Oss Dev.</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"LinkedIn"} href={"https://www.linkedin.com/in/oscar-alatrista/"}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"GitHub"}
            href={"https://github.com/OssFit"}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}