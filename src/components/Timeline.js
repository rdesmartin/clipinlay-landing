import React from 'react'
import Container from 'react-bootstrap/Container';
import { Chrono } from "react-chrono";


export default function Timeline(props) {
  const items = [{
    title: "Mars 2018",
    cardTitle: "Project week 2018",
    cardSubtitle:"Naissance de Clip Inlay",
    cardDetailedText: "Le projet naît suite à la demande du partenaire FranceTV Publicité aux étudiants de trois écoles IONIS de solutions pour réinventer la publicité.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/timeline/projectweek.jpg"
      }
    }
  },
  {
    title: "Octobre 2019",
    cardTitle: "Moonshot 2019",
    cardSubtitle:"Création de l'équipe",
    cardDetailedText: "Dans le cadre de la Moonshot, le projet Clip Inlay est repris et retravaillé avec des nouveaux membres d'équipe.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1604&q=80"
      }
    }
  },
  {
    title: "Janvier 2020",
    cardTitle: "Epitech Experience Tek3",
    cardSubtitle:"Clip Inlay reçoit deux prix",
    cardDetailedText: "Le projet est présenté lors d'Epitech Experience Tek3 à Strasbourg et remporte les prix du meilleur pitch et de la meilleure idée.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/gradient.png"
      }
    }
  },
  {
    title: "Mars-Juin 2020",
    cardTitle: "R&D",
    cardDetailedText:"Etude de l'état de l'art, recherche et développement. L'équipe se consacre à une montée en compétence sur la vision par ordinateur et le streaming vidéo.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/gradient.png"
      }
    }
  },
  {
    title: "Mai 2020",
    cardTitle: "Retour de FranceTV Publicité",
    cardDetailedText:"Entretien avec le responsable innovation digitale de FranceTV Publicité sur les problématiques concrètes rencontrées, afin d'aiguiller le projet.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/gradient.png"
      }
    }
  },
  {
    title: "2020 - 2021",
    cardTitle: "Développement",
    cardDetailedText:"L'équipe de Clip Inlay travaille sur l'implémentation des fonctionnalités de détection et de remplacement dans le but de sortir une Beta.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/gradient.png"
      }
    }
  },
  {
    title: "Aout 2021",
    cardTitle: "Beta Release",
    cardDetailedText:"La version 0.1 de Clip Inlay est testée par les premiers utilisateurs.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/gradient.png"
      }
    }
  }];
  return (
    <Container style={{textAlign: "left"}}>
      <h3>Timeline</h3>
        <Chrono
          useReadMore={false}
          borderLessCards={true}
          hideControls={true}
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "lightgrey",
            secondary: "#2d292d",
            cardBgColor: "#111111",
            cardForeColor: "lightgrey",
            titleColor: "lightgrey"
          }}
        />
    </Container>
  )
}
