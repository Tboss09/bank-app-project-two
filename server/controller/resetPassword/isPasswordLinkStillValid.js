import mongoose from 'mongoose'
import User from '../../models/SignUp.js'
import ResetUserPassword from '../../models/ResetPassword.js'

const ResetPassword = async (req, res) => {
 try {
  const { _id, secretCode } = req.params
  const isUserValid = await User.findById({
   _id: mongoose.Types.ObjectId(`${_id}`),
  })
  if (!isUserValid) {
   res.status(400).json({ success: false, err: 'User not found ' })
   console.log('User not found')
  }
  console.log('User found')

  const isUserSecretCodeStillValid = await ResetUserPassword.exists({
   email: isUserValid.email,
  })
  if (!isUserSecretCodeStillValid) {
   res.status(400).json({ success: false, err: 'Validation code has expired ' })
   console.log('User not found')
  }

  console.log(isUserSecretCodeStillValid)
  res.status(200).json({ success: true, message: 'User code still valid' })
  
 } catch (err) {}
}

export default ResetPassword
