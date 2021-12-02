import React from 'react'
import VideoFileInput from '../components/VideoFileInput';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Demo() {
  const handleSubmit = (event) => {
    console.log(event.target)
  }  

  return (
    <div>
      <Container md={8}>
        <h3>Demo</h3>
        <VideoFileInput className="w-50" handleSubmit={handleSubmit}/>
        <Button disabled={true}>Téléverser</Button>
      </Container>
    </div>
  )
}
