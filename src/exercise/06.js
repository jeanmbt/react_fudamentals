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
  const usernameInputRef = React.useRef();
  // const fullNameInputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // onSubmitUsername(usernameInputRef.current.value)
    // onSubmitFullName(fullNameInputRef.current.value)
    // console.log(event.target.elements[0].value)
    onSubmitUsername(event.target.elements[0].value)
    // event.target.elements[1].value

  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id='usernameInput' type="text" ref={usernameInputRef} />
      </div>
      {/* <div>
        <label htmlFor='fullNameInput'>Full Name:</label>
        <input id='fullNameInput' type="text" ref={fullNameInputRef} />
      </div> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  // what is this? function?
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  //  const onSubmitFullName = fullName => alert(`${fullName}`)

  return <UserForm onSubmitUsername={onSubmitUsername} 
  // FullNameForm onSubmitFullName={onSubmitFullName} 

  />
}

export default App
