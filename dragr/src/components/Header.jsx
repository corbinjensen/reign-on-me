import React from 'react';

export default function Header() {
  const styles = {
    container: {
      // height: '12vh',
      width: '100vw',
      backgroundColor: '#58429d',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navigation: {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
    },
    item: {
      padding: '2vw',
      margin: '0',
      color: 'white',
    },
    logo: {
      maxWidth: '10vw',
      padding: '2vw',
    },
    wordMark: {
      color: 'white',
    },
  }

  const navItems = [
    'Home',
    'Performers',
    'Local Events',
    'Support Artists'
  ]

  return (
    <header style={styles.container}>
      
        <svg 
          style={styles.logo}
          id="Layer_1" 
          data-name="Layer 1" 
          viewBox="0 0 170 114.67">
              <defs>  
                  <linearGradient 
                      id="linear-gradient" 
                      x1="15" 
                      y1="87.66" 
                      x2="185" 
                      y2="87.66" 
                      gradientUnits="userSpaceOnUse"
                  >
                          <stop offset="0" stopColor="#887de0"/>
                          <stop offset="0.05" stopColor="#8086e5"/>
                          <stop offset="0.15" stopColor="#6ba0f3"/>
                          <stop offset="0.21" stopColor="#57b7ff"/>
                          <stop offset="0.25" stopColor="#5dbaed"/>
                          <stop offset="0.32" stopColor="#6dc3bd"/>
                          <stop offset="0.42" stopColor="#85d078"/>
                          <stop offset="0.47" stopColor="#9ed271"/>
                          <stop offset="0.57" stopColor="#ddd961"/>
                          <stop offset="0.62" stopColor="#fddc58"/>
                          <stop offset="0.82" stopColor="#ffac35"/>
                          <stop offset="0.99" stopColor="#ff533f"/>
                  </linearGradient>
              </defs>
              <path 
              fill='url(#linear-gradient)'
              className="cls-1" 
              d="M185,129.89V45h0L142.45,69.56,100,30.34h0L57.48,69.62,15.72,45.51,15,45V145H185V129.89Zm-23.11,0L107.93,98.75l33.35-19.26,35.51,32.82v17.58Zm-16,0H54l45.92-26.51ZM176.79,59v42.3l-28.18-26ZM100,41.34,135.12,73.8,99.91,94.12,64.81,73.85Zm-48.68,34-28,25.87v-42Zm-28,36.88L58.64,79.55,91.9,98.75,38,129.89H23.32Z" 
              transform="translate(-15 -30.33)"
              />
          </svg>
          <h2 style={styles.wordMark}>Reign on Me</h2>
        
      
      <nav style={styles.navigation}>
        {navItems.map((item, i) => {
          return (
            <p key={i} style={styles.item}>{item}</p>
          )
        })}
      </nav>
    </header>
  );
}
