import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'

const App = () => {
  return (
    <Router>
      <div className='grid-container'>
        <Navbar />
        {/* <main className='container'> */}
        <Switch>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Switch>
        {/* </main> */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
