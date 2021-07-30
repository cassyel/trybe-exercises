import React from 'react'
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Sobre mim</h1>
        <Link to="/">Voltar á home</Link>
      </div>
    )
  }
}

export default About;
