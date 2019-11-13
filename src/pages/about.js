import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div>
        <h1>About VoVo and her family recipes</h1>
        <p>Vovo was my grandmother. She was a typical grandmother who showed her love in many ways, one of those being with food. This site is to share her recipes with others to spread her love.</p>
        <p>If you would like to read about Vovo's favorite recipes, <Link to='/blog'>click here!</Link></p>
      </div>
    </>
  )
}

export default AboutPage;