import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Flex p={'1%'} color={'white'} bgColor={'blue.400'} justifyContent={'space-around'}>
        <Link to={'/post'}><Text>Post Jobs</Text></Link>
        <Link to={'/'}><Text>Get Jobs</Text></Link>
      
    </Flex>
  )
}

export default Nav
