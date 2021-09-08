import { Button } from '@chakra-ui/button'
import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { useHistory } from 'react-router-dom'
import FulLogo from '../../assets/img/logo/FulLogo'

const ResetPasswordSuccess = () => {
 const history  = useHistory()
 return (
  <Box pl="7">
   <Box py="7">
    <FulLogo
     w={'8'}
     h={'8'}
     fs="xl"
     fill="brand.600"
     spacing={1}
     color="brand.600"
    />
   </Box>
   <VStack py="8" spacing ={2}>
    <Heading fontSize={'2xl'} color="brand.900">
     Successfull
    </Heading>
    <Text
     fontSize={'md'}
     fontWeight={'semibold'}
     color="gray.500"
     textAlign="center"
    >
     Password successfully updated
    </Text>
    <Button
     h="12"
     bg="brand.500"
     fontSize="sm"
     onClick={() => history.push('/login')}
    >
     Log in
    </Button>
   </VStack>
  </Box>
 )
}

export default ResetPasswordSuccess
