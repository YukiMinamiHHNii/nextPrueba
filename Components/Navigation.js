import React from 'react';
import Link from 'next/link';

const ulStyle = {
  display: 'flex',
  background: 'lilac'
}
const liStyle = {
  diplay: 'inline-block',
  marginLeft: '3em'
}

const Navigation = () => {
  return (
    <ul style={ulStyle}>
      <li style={liStyle}>
        <Link href="/">Home</Link>
      </li>
      <li style={liStyle}>
        <Link href="/About">About</Link>
      </li>
      <li style={liStyle}>
        <Link href="/blog/Notas">Notas</Link>
      </li>
      <li style={liStyle}>
        <Link href="/Test">Test</Link>
      </li>
      <li style={liStyle}>
        <Link href="/Ejercicio">Ejercicio</Link>
      </li>
    </ul>
  )
}

export default Navigation;