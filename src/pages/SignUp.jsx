import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { name, email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form>
        <input 
            type='name'
            id='name'
            className='nameInput'
            placeholder='Name'
            value={name}
            onChange={onChange}
          />

          
          <input 
            type='email'
            id='email'
            className='emailInput'
            placeholder='Email'
            value={email}
            onChange={onChange}
          />

          <div className='passwordInputDiv'>
            <input 
              type={showPassword ? 'text' : 'password'} 
              className='passwordInput'
              placeholder='password'
              id='password'
              value={password}
              onChange={onChange}
            />

            <img 
              src={visibilityIcon} 
              alt="Show Password" 
              className='showPassword' 
              onClick={() => setShowPassword((prevState)=>!prevState)} 
            />
          </div>

          <div className='signUpBar'>
            <p className='signUpText'>
              Sign Up
            </p>
            <button className='signUpButton'>
              <ArrowRightIcon fill='ffffff' width='34px' height='34px'/>
            </button>
          </div>
        </form>

        {/* Google Oauth */}

        <Link to='/sign-in' className='registerLink'>
          Sign In Instead
        </Link>
      </div>
    </>
  )
}

export default SignUp