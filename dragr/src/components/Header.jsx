import React from 'react';
import Logo from '../img/Logo';

export default function Header() {
  const styles = {
    container: {
      // height: '12vh',
      width: '100vw',
      backgroundColor: '#4f3f81',
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
   
  }

  const navItems = [
    'Home',
    'Performers',
    'Local Events',
    'Support Artists'
  ]

  return (
    <header style={styles.container}>
      
       <Logo  />
      
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
