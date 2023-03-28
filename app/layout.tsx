
"use client"
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link rel="image/x-icon" href="favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="logo.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="logo.png"/>
</head>
      
      <title>Meal Genius</title>
      <body><ChakraProvider>
        <Navbar/>
        {children}
        <Footer/>
        </ChakraProvider></body>
    </html>
  )
}
