"use client"
import React, { useState } from "react"
import { Formik, Field } from "formik"
import * as Yup from "yup"

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Spinner,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react"

import { SelectControl } from "formik-chakra-ui"
import { CloseButton } from '@chakra-ui/react'

export default function Home() {
  const [recipie, setRecipie] = useState("")
  const [recipieLoading, setRecipieLoading] = useState(false)
  const [recipieLoadingError, setRecipieLoadingError] = useState(false)

  const initialValues = {
    category: "breakfast",
    aliments: "",
    }

  // const validationSchema = Yup.object({
  //   category: Yup.string().required(),
  //   personName: Yup.string().required(),
  //   personPronoun: Yup.string().required(),
  //   petType: Yup.string().required(),
  //   petName: Yup.string().required(),
  //   placeName: Yup.string().required(),
  //   thingName: Yup.string().required(),
  // })

  async function repeat(prompt: string) {
    setRecipie("")
    setRecipieLoadingError(false)
    setRecipieLoading(true)

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    // This data is a ReadableStream
    const data = response.body
    if (!data) {
      return
    }

    const reader = data.getReader()
    const decoder = new TextDecoder()
    let done = false

    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)
      setRecipie((prev) => prev + chunkValue)
    }

    setRecipieLoading(false)
  }

  async function handleSubmit(
    category: string,
    aliments: string,
     ) {
    const recipiePrompt =`Prepare a delicious and practical ${category} with the following ingredients: ${aliments}`

      if (category == "breakfast") {
      try {
        repeat(recipiePrompt)
      } catch (error) {
        console.error(error)
        setRecipieLoadingError(true)
      } finally {
        setRecipieLoading(false)
      }
    } else if (category == "lunch") {
      try {
        repeat(recipiePrompt)
      } catch (error) {
        console.error(error)
        setRecipieLoadingError(true)
      } finally {
        setRecipieLoading(false)
      }
    } else if (category == "dinner") {
      try {
        repeat(recipiePrompt)
      } catch (error) {
        console.error(error)
        setRecipieLoadingError(true)
      } finally {
        setRecipieLoading(false)
      }
    } else if (category == "dessert") {
      try {
        repeat(recipiePrompt)
      } catch (error) {
        console.error(error)
        setRecipieLoadingError(true)
      } finally {
        setRecipieLoading(false)
      }
    }
  }

  return (
    <main>
      <Flex
        bg={useColorModeValue("gray.50", "gray.700")}
        color={useColorModeValue("gray.700", "gray.200")}
        align="center"
        justify="center"
        h="83vh"
      >
        <VStack spacing={4} align="center" textAlign={"center"}>
          <Box p={{ base: 2, md: 6 }}>
            <Heading
              fontWeight={700}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              mt='-20'
            >
           Generate a recipie<br />
              <Text as={"span"} color={"purple.400"}>
              Delicious
              </Text>
              {" and "}
              <Text as={"span"} color={"orange.400"}>
                 Practice!
              </Text>
            </Heading>
          </Box>

          <Box p={6} rounded="md" w={80} bg="white" color="black" >
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(
                  values["category"],
                  values["aliments"],
                )

                resetForm()
              }}
              // validationSchema={validationSchema}
            >
              {({ handleSubmit, values, errors }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl isRequired>
                      <FormLabel htmlFor="category">Select an option</FormLabel>
                      <SelectControl name="category">
                        <option value="breakfast">BreakFast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="dessert">Dessert</option>
                      </SelectControl>
                      <FormErrorMessage>{errors.category}</FormErrorMessage>
                    </FormControl>
                    {values.category === "breakfast" && (
                      <>
                        <FormControl isRequired>
                          <FormLabel htmlFor="breakfast">
                          What ingredients would you like to include for breakfast?
                          </FormLabel>
                          <Field
                            as={Input}
                            id="breakfast"
                            name="breakfast"
                            type="name"
                            variant="filled"
                            bg="gray.200"
                          />
                          <FormErrorMessage>
                            {errors.category}
                          </FormErrorMessage>
                        </FormControl>

                       
                      </>
                    )}
                   
                    {values.category === "lunch" && (
                      <>
                        <FormControl isRequired>
                          <FormLabel htmlFor="lunch">
                          What ingredients would you like to include for lunch?
                          </FormLabel>
                          <Field
                            as={Input}
                            id="lunch"
                            name="lunch"
                            type="name"
                            variant="filled"
                            bg="gray.200"
                          />
                          <FormErrorMessage>
                            {errors.category}
                          </FormErrorMessage>
                        </FormControl>
                      </>
                    )}
                    {values.category === "dinner" && (
                      <>
                        <FormControl isRequired>
                          <FormLabel htmlFor="dinner">
                          What ingredients would you like to include for dinner?
                          </FormLabel>
                          <Field
                            as={Input}
                            id="dinner"
                            name="dinner"
                            type="name"
                            variant="filled"
                            bg="gray.200"
                          />
                          <FormErrorMessage>
                            {errors.category}
                          </FormErrorMessage>
                        </FormControl>
                      </>
                    )}
                     {values.category === "dessert" && (
                      <>
                        <FormControl isRequired>
                          <FormLabel htmlFor="dessert">
                          What ingredients would you like to include for dessert?
                          </FormLabel>
                          <Field
                            as={Input}
                            id="dessert"
                            name="dessert"
                            type="name"
                            variant="filled"
                            bg="gray.200"
                          />
                          <FormErrorMessage>
                            {errors.category}
                          </FormErrorMessage>
                        </FormControl>
                      </>
                    )}
                    <Button type="submit" colorScheme="purple" width="full">
                      Generate recipie
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
            {recipieLoading && (
              <Box py={4} >
                <Spinner />
              </Box>
            )}
            {recipieLoadingError && "Something went wrong. Please try again."}
          </Box>
          {recipie &&(<CloseButton onClick={()=>{setRecipie("")}}>X</CloseButton>)}
          {recipie && (
            <Box maxH='100px' overflow="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "10px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#465A7E66",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#D6BCFA",
                borderRadius: "24px",
                border: "3px solid #D6BCFA",
              },
            }}
             bg="white" p={6} rounded="md" w='70vw'>
              <Text fontWeight={700} color={"purple.400"}>
                {recipie} 
              </Text>
            </Box>
          )}
        </VStack>
      </Flex>
    </main>
  )
}