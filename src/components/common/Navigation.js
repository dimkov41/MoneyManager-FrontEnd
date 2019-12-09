import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ContextWrapper from './ContextWrapper';

const Navigation = () => {
  return (
    <ContextWrapper>
      <Router>
        <Switch>
        </Switch>
      </Router>
    </ContextWrapper>
  )
}

export default Navigation