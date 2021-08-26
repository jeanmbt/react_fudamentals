// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UserForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // React.useRef() gets info from usernameInputRef? default?
  const [error, setError] = React.useState('');
  // const fullNameInputRef = React.useRef();
  const [username, setUsername] = React.useState('');

  

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username)
    // onSubmitFullName(fullNameInputRef.current.value)
    // console.log(event.target.elements[0].value)
    // onSubmitUsername(event.target.elements[0].value)
    // event.target.elements[1].value
  }

  // let allStates = []
  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())

    // const {value} = event.target
    // const isLowerCase = value === value.toLowerCase();
    // setError(isLowerCase ? null : 'Username must be lower case')

    // onChange(event.target.value.toLowerCase())
    // const value = event.target.value
    // const isValid = value === value.toLowerCase()
    // console.log(event.nativeEvent.data)
    // allStates.push(event.nativeEvent.data)
    // console.log(allStates)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input 
          id='usernameInput'
          type="text"
          // ref={usernameInputRef}
          onChange = {handleChange}
          value = {username}
          />
      </div>
      {/* <div>
        <label htmlFor='fullNameInput'>Full Name:</label>
        <input id='fullNameInput' type="text" ref={fullNameInputRef} />
      </div> */}
      {/* <button disabled={Boolean(error)} type="submit">Submit</button> */}
      <p>{error}</p>
      <button type="submit">Submit</button>

    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  //  const onSubmitFullName = fullName => alert(`${fullName}`)

  return <UserForm onSubmitUsername={onSubmitUsername} 
  // FullNameForm onSubmitFullName={onSubmitFullName} 

  />
}

export default App
