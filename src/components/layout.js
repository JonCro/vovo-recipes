import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Submenu from '../components/submenu';

import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children[0].props.title === 'Recipes' ? <Submenu /> : null}
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;