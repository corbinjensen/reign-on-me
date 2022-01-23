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
      // float: 'left',
    },
    navigation: {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
    },
    item: {
      padding: '2vw',
      margin: '0',
    }
  }

  const navItems = [
    'Home',
    'Performers',
    'Local Events',
    'Support Artists'
  ]

  return (
    <div style={styles.container}>
      <img src="https://source.unsplash.com/100x100/" alt="logo" />
      <div style={styles.navigation}>
        {navItems.map((item, i) => {
          return (
            <p key={i} style={styles.item}>{item}</p>
          )
        })}
      </div>
    </div>
  );
}
