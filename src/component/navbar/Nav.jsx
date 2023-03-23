import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../ui/SearchInput'
import logoImage from "../../assets/images/logo.svg"

export default function Nav() {
  return (
    <nav class="container relative py-3">
    <div class="flex items-center justify-between">
      <Link to="/">
        <img src={logoImage} />
      </Link>
      <SearchInput></SearchInput>
    </div>
  </nav>
  )
}
