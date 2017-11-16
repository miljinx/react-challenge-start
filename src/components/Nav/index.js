import React from 'react'

const Nav = (props) => {
  return (
    <ul className='nav-ul'>
      <li><a href='#menu'><button className='button'>Menu</button></a></li>
      <li><a href='#gallery'><button className='button'>Gallery</button></a></li>
      <li><a href='#location'><button className='button'>Location</button></a></li>
      <li><a href='#our-story'><button className='button'>Our Story</button></a></li>
      {
        props.signedIn
          ? <div className='sign-in'>
              <li><button className='button' onClick={props.handleEditMenuClick}>Edit Menu</button></li>
              <li><button className='button' onClick={props.handleSignOutClick}>Sign-out</button></li>
            </div>
          : <div className='sign-in'>
              <li><button className='button' onClick={props.handleSignInClick}>Sign-in</button></li>
            </div>
      }
    </ul>
  )
}

export default Nav
