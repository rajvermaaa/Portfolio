import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Weather from "../../Assets/Project/Weather.png";
import ChitChat from "../../Assets/Project/ChitChat.png";
import TicTacToe from "../../Assets/Project/TicTacToe.png";
import WanderStay from "../../Assets/Project/WanderStay.png";
import SkinSegmentation from "../../Assets/Project/SkinSegmentation.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChitChat}
              isBlog={false}
              title="ChitChat"
              description="A real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for instant, bidirectional communication. ChitCHat enables users to register, log in, create chat rooms, and engage in live messaging. Key features include real-time message delivery, typing indicators, responsive design, and styled-components for polished UI. The app also supports user avatars and persistent message history, making it a strong showcase of full-stack, event-driven development."
              ghLink="https://github.com/rajvermaaa/CHIT_CHAT"
              demoLink="https://chit-chat-indol.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WanderStay}
              isBlog={false}
              title="WanderStay"
              description="WanderStay is a full-stack accommodation rental platform built with MongoDB, Express.js, Node.js, EJS, and Bootstrap. It allows hosts to list tourist accommodations and travelers to explore, book, and review stays. Key features include secure user authentication, session management, RESTful API architecture, server-side rendering with EJS, and dynamic listing management. The platform also supports user-generated reviews and responsive UI design, making it a comprehensive showcase of full-stack development with real-world travel tech functionality."
              ghLink="https://github.com/rajvermaaa/WanderStay-Project"
              demoLink="https://wanderlust-project-k6wa.onrender.com/listings?"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="A sleek and responsive weather forecast application built with React.js and Material-UI. It allows users to search for any city and view real-time weather data such as temperature, humidity, feels like, and a short weather description. The app fetches live data using the OpenWeatherMap API and dynamically updates the UI, including a beautiful background image that changes based on the weather condition. Ideal for learning API integration, React hooks, and responsive UI design."
              ghLink="https://github.com/rajvermaaa/Weather-App"
              demoLink="https://weather-rc4efozo9-raj-vermas-projects-d278d23c.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A browser-based two-player Tic Tac Toe game built with HTML, CSS, and JavaScript. The game features a dynamic UI with hover effects, responsive player turns, and win detection logic based on pre-defined winning combinations. Key functionalities include real-time turn updates, visual win highlighting with animated lines, and color-coded moves for clarity."
              ghLink="https://github.com/rajvermaaa/TIC-TAC-TOE-GAME"
              demoLink="https://tic-tac-toe-game-six-indol.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SkinSegmentation}
              isBlog={false}
              title="Skin Segmentation"
              description="An image processing project leveraging Python, OpenCV, and AI/ML techniques to accurately detect skin regions in static images. The model applies advanced segmentation algorithms using multiple color spaces—RGB, HSV, and YCbCr—to isolate facial and limb areas with precision."
              ghLink="https://github.com/rajvermaaa/Skin-Segmentation"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
