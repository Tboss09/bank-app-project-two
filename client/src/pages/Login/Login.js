import {
 Box,
 Button,
 Center,
 Flex,
 FormControl,
 FormErrorMessage,
 FormLabel,
 Heading,
 Input,
 Link,
 Stack,
 Text,
 VStack,
} from '@chakra-ui/react'
import React from 'react'
import { Link as Navigator, Redirect } from 'react-router-dom'
import FulLogo from '../../assets/img/logo/FulLogo'
import useAuth from '../../auth/useAuth'
import useLogin from '../../hooks/useLogin'
import useValidateForm from '../../hooks/useValidateForm'
import useStore from '../../zustand'

export default function SimpleCard() {
 const { handleSubmit, register, onSubmit, errors, isValid } = useLogin()
 const { setData } = useStore(state => state)
 const {
  isPasswordActive,
  isEmailActive,
  handleEmailChange,
  handlePasswordChange,
 } = useValidateForm()

 const { isSuccess, isUserInActive } = useAuth()
 if (isSuccess) {
  return <Redirect to="/dashboard"></Redirect>
 }

 return (
  <>
   <VStack minH={'100vh'} w="full" spacing="3">
    <Box w="full">
     <Center className="signup" h="48">
      <FulLogo w="12" h="12" fs="3xl" />
     </Center>
    </Box>

    <Stack w="full" spacing={0} pt={7} px="7">
     <Box>
      <Heading
       fontSize={'4xl'}
       color="brand.800"
       as="h2"
       fontWeight="bolder"
       fontSize={'2xl'}
       pb={'4'}
       w="90%"
      >
       Get right back in
      </Heading>
     </Box>
     {/* Login form here */}

     <Box>
      <Stack spacing={7} as="form" onSubmit={handleSubmit(onSubmit)}>
       <FormControl
        className="monsecure-form"
        id="email"
        isInvalid={errors.email}
       >
        <FormLabel
         color={errors.email ? '#a12000' : 'brand.600'}
         fontSize="sm"
         className={isEmailActive ? 'Active' : ''}
         opacity={errors.email ? '1' : '.80'}
         fontWeight={errors.email ? 'bold' : 'bold'}
        >
         Email address
        </FormLabel>
        <Input
         variant="flushed"
         type="email"
         name="email"
         {...register('email', {
          required: 'A valid password is required',
          pattern: {
           value:
            /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
           message: 'Please Enter your email in this format youremail@xxx.com',
          },
          // validate: {
          //  email: email => handleValidateEmail(email, 'email'),
          // },
         })}
         onChange={e => {
          handleEmailChange(e.target.value)
          setData(e.target.value)
         }}
        />
        <FormErrorMessage
         className="monsecure_error"
         fontWeight="bold"
         color="rgba(221, 44, 0, 0.87)"
        >
         {errors.email && errors.email.message}
        </FormErrorMessage>
       </FormControl>
       <FormControl
        className="monsecure-form"
        id="password"
        isInvalid={errors.password}
       >
        <FormLabel
         color={errors.password ? '#a12000' : 'brand.600'}
         fontSize="sm"
         className={isPasswordActive ? 'Active' : ''}
         opacity={errors.password ? '1' : '.80'}
         fontWeight={errors.password ? 'bold' : 'bold'}
        >
         Password
        </FormLabel>
        <Input
         variant="flushed"
         type="password"
         name="password"
         {...register('password', {
          required: 'A valid password is required',
         })}
         onChange={e => handlePasswordChange(e.target.value)}
        />

        <FormErrorMessage
         className="monsecure_error"
         fontWeight="bold"
         color="rgba(221, 44, 0, 0.87)"
        >
         {errors.password && errors.password.message}
        </FormErrorMessage>
       </FormControl>

       <Stack spacing={10} mt=".8rem !important">
        <Stack
         direction={{ base: 'column', sm: 'row' }}
         align={'flex-end'}
         justify={'space-between'}
        >
         <Link
          variant="link"
          color={'brand.800'}
          fontWeight="semibold"
          fontSize="sm"
          as={Navigator}
          to="/reset-password"
          _focus={{ border: '0px' }}
         >
          Forgot password?
         </Link>
        </Stack>

        <Button
         isDisabled={!isValid}
         type="submit"
         textTransform="capitalize"
         fontSize="sm"
         colorScheme={'blue'}
         variant={'solid'}
        >
         Sign in
        </Button>

        <Center>
         <Text fontSize="sm" color="gray.500" fontWeight="normal">
          New User?
          <Link
           variant="link"
           pl="1"
           as={Navigator}
           to="/signup"
           fontWeight="bold"
           color="brand.500"
          >
           Create Account
          </Link>
         </Text>
        </Center>
       </Stack>
      </Stack>
     </Box>

     {/* Login form here */}
    </Stack>
   </VStack>
  </>
 )
}
