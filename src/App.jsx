import ReactDOM from 'react-dom'
import React from 'react'
import Login from './pages/LoginPage/index.jsx'

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

