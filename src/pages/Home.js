import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Link from 'react-router-dom/Link';
import Profile from '../components/Profile';
import Timeline from '../components/Timeline';


export default function Home() {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 66);
  // General scroll to element function
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <Container className="text-center w-100 mb-5">
      <div className="text-center align-middle d-flex flex-column justify-content-center" style={{height: "100vh" }}>
        <div>
          <div className="display-3">La publicité vous dérange ? </div>
          <div className="display-3">Nous aussi.</div>
          <div className="mt-4">
            <Button variant="outline-primary" className="btn-hover color-1" onClick={executeScroll}>Réinventons-la.</Button>
          </div>
        </div>
      </div>

      <Container ref={myRef} className="mt-5 w-100 text-start">
        <h2>
          Une solution d'intégration qui vos publicités moins invasives et plus impactantes.
        </h2>

        <div className="table row align-items-start">
          <div className="col-md">
            Intrusive, agressive et rebutante, la publicité d’aujourd’hui écœure et agace les consommateurs.
            Sa forme a souvent évolué en parallèle de celle du monde de l’audiovisuel et pourtant nous n’avons jamais
            été aussi réticents à la campagne publicitaire.
          </div>
          <div className="col-md">
            Notre  solution,  ClipInlay,  a  donc  pour  objectif  de  réinventer  le  format  publicitaire  afin d’enrichir notre
            rapport à l’écran. ClipInlay nous donne la possibilité d’intégrer de la publicité au sein même du contenu
            vidéo  visionné.  De  cette  façon,  notre  logiciel  transforme  des  campagnes  publicitaires  en  éléments  de
            décor  donnant l’impression qu’elles faisaient initialement partie de la vidéo.
          </div>
          <div className="col-md">
            Sélectionnées  en  fonction
            des préférences de l’utilisateur les publicités seront différentes d’un consommateur à un autre.
            ClipInlay nous permet donc de proposer une publicité moins envahissante, qui ne prend pas plus de temps
            à l’utilisateur et qui surtout, convient à ses attentes.
          </div>
        </div>
      </Container>

      <Container className="mt-5">
        <div style={{textAlign: "left"}}>
          <h2>Notre équipe</h2>
        </div>
        <div className="mt-3 row align-items-start">
          <div className="col">
            <Profile name="Guillaume Billerey">Lead developer</Profile>
          </div>
          <div className="col">
            <Profile name="Rémi Desmartin">Developer</Profile>
          </div>
          <div className="col">
            <Profile name="Léo Fornes">
              Developer
            </Profile>
          </div>
        </div>

        <div className="mt-3 row align-items-start">
          <div className="col">
            <Profile name="Jules Klakosz">Dev Ops Engineer</Profile>
          </div>
          <div className="col">
            <Profile name="Simon Meyer">Dev Ops Engineer</Profile>
          </div>
          <div className="col">
            <Profile name="Kevin Spegt">Team leader & developer</Profile>
          </div>
        </div>
      </Container>

      <Container className="mt-5">
        <Timeline />
      </Container>

      <Container className="mt-5">
        <Button className="btn-hover color-1">
            <a style={{textDecoration: "none", color: "#111"}} href="mailto:contact@clipinlay.com">
              Contact us
            </a>
        </Button>
      </Container>
    </Container>
  )
}
