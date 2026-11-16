import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-1.png";
import projImg2 from "../assets/img/project-2.jpe";
import projImg3 from "../assets/img/project-3.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project1 = [
    {
      title: "Logo Making",
      description: "A creative logo design project showcasing branding, color selection, and visual identity.",
      imgUrl: projImg1,
    },
    {
      title: "Digital Art",
      description: "A digital artwork created using digital illustration techniques, colors, and creative composition.",
      imgUrl: projImg2,
    },
    {
      title: "Typography Poster",
      description: "A typography project focused on font selection, visual hierarchy, and creative text arrangement.",
      imgUrl: projImg3,
    },
  ];

  const project2 = [
    {
      title: "Project Title",
      description: "Project Description..",
      // imgUrl: projImg1,
    },
    {
      title: "Project Title",
      description: "Project Description..",
      // imgUrl: projImg2,
    },
    {
      title: "Project Title",
      description: "Project Description.",
      // imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
        
      <Container>
        <Row>
          <Col size={12}>
          
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                
                <h2>Recent Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <p>A collection of my recent creative work, featuring original digital illustrations, graphic designs, and visual posters. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Solo Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Group Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">All Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          project1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                      <Row>
                        {
                          [...project1, ...project2].map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>

                </Tab.Container>

              </div>}
            </TrackVisibility>

          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2}></img>
    
    </section>
  )
}