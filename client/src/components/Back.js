import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router'
const Back = () => {
 const history = useHistory()
 return (
  <>
   <IconButton
    bg="brand.500"
    rounded="full"
    icon={<FaArrowLeft />}
    color="white"
    size="lg"
    onClick={() => history.goBack()}
   />
  </>
 )
}

export default Back
