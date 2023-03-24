import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../ui/SearchInput'
import logoImage from "/images/logo.svg"

export default function Nav() {
  return (
    <nav className="container relative py-3">
    <div className="flex items-center justify-between">
      <Link to="/">
        <img src={logoImage} />
      </Link>
      <SearchInput></SearchInput>
    </div>
  </nav>
  )
}
