import React from 'react'

const SiteHeading = ({tagline, title, shadow, className}) => {
  return (
    <div className='site-custom-header'>
        <span className='custom-header-tagline'>{tagline}</span>

        <h2 className={'custom-header-title ' + className}>{title}</h2>

        <span className="custom-header-shadow-title"> {shadow}</span>
        
    </div>
  )
}

export default SiteHeading