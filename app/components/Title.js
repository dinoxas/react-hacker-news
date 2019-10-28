import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaRegClone } from 'react-icons/fa';

export default function Title ({ url, title, id }) {
  return url
    ? <a className='link' href={url} target='_blank' rel='nofollow'>{title} <FaRegClone size='20' color='rgb(187, 46, 31)' /></a>
    : <Link className='link' to={`/post?id=${id}`}>{title}</Link>
}

Title.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}