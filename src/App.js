import React from 'react';
import Header from './components/Header'
import Routes from './config/routes'

function App() {
  return (
    <div className="container">
      {/* Use our Routes exported in Router and set them under Header,
	    We can use Links to later call those routes*/}
      <Header />
        { Routes }
    </div>
  )
}

export default App;
