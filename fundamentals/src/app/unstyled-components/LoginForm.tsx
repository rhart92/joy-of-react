import React from 'react'

import styles from './LoginForm.module.css'

function LoginForm() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const id = React.useId()

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    console.log('Login function called')
  }

  return (
    <form className={`${styles.wrapper}`}>
      <div>
        <label htmlFor={`email-${id}`}>Email</label>
        <input
          className="border border-gray-600 rounded"
          type="email"
          id={`email-${id}`}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor={`password-${id}`}>Password</label>
        <input
          className="border border-gray-600 rounded"
          type="password"
          id={`password-${id}`}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default LoginForm
