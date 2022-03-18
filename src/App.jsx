import ReactDOM from 'react-dom'
import React from 'react'
import Login from './pages/login.jsx'

export default App = () => {
  return (
    ReactDOM.render(
      <React.StrictMode>
        <Login />
      </React.StrictMode>,
      document.getElementById('root')
    )
  );
}

