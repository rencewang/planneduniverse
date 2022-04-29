import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import useLocalStorage from 'use-local-storage'

import Menu from './menu'
import style from '../styles/header.module.css'

const Header = props => {

  const {
    siteLogo,
    logoText,
    mainMenu,
    mainMenuItems,
    defaultTheme,
  } = props

  // const defaultThemeState =
  //   (typeof window !== 'undefined' && window.localStorage.getItem('theme')) ||
  //   null
  // const [userTheme, changeTheme] = useState(defaultThemeState)
  const defaultDark = (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) || null 
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  const [isMobileMenuVisible, toggleMobileMenu] = useState(false)

  const onChangeTheme = () => {
    // console.log("hi")
    // console.log(theme)
    const opositeTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(opositeTheme)

    // typeof window !== 'undefined' &&
    //   window.localStorage.setItem('theme', opositeTheme)
  }
  const onToggleMobileMenu = () => toggleMobileMenu(!isMobileMenuVisible)

  return (
    <>
      <Helmet>
        <body data-theme={theme} className={theme === 'light' ? 'light-theme' : 'dark-theme'}/>
      </Helmet>

      <header className={style.header}>
        <div className={style.inner}>

          <Link to="/">
            <div className={style.logo}>
              <span className={style.text}>{logoText}</span>
              <span className={style.cursor} />
            </div>
          </Link>

          <span className={style.right}>
            <Menu
              mainMenu={mainMenu}
              mainMenuItems={mainMenuItems}
              isMobileMenuVisible={isMobileMenuVisible}
              onToggleMobileMenu={onToggleMobileMenu}
              onChangeTheme={onChangeTheme}
            />
          </span>
          
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteLogo: PropTypes.object,
  logoText: PropTypes.string,
  defaultTheme: PropTypes.string,
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
  mainMenuItems: PropTypes.number,
}

export default Header
