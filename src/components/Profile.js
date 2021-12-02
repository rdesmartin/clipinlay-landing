import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import './Profile.scss';


export default function Profile(props) {
  const {name} = props
  const imagePath = process.env.PUBLIC_URL + "/images/profiles/" + name.replace(/\s/g, '') + ".jpg"
  // const imagePath = process.env.PUBLIC_URL + "/images/profiles/SimonMeyerBis.png"
  return (
    <Container>
      <img className="pp" src={imagePath} alt="profile"/>
    <div className="font-mont mt-2">{name}</div>
      <p>{props.children}</p>
    </Container>
  )
}
