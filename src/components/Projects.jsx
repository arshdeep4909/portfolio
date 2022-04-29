import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";
function Projects() {
  return (
    <ProjectSection id="projects">
      <h2>projects</h2>
      <p className="semi-heading">My Work</p>
      <ProjectGrid>
        <PorjectBlock>
          <img src="image/capture.png" alt="project-cover" />
          <div className="project-description">
            <p>Business Website</p>
            <button>
              <a
                href="https://625d9ce094cca8025d06302c--cerulean-sunburst-0a32ee.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineEnter />
              </a>
            </button>
            <button>
              <a
                href="https://github.com/arshdeep4909/capture.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </button>
          </div>
        </PorjectBlock>
        <PorjectBlock>
          <img src="image/music.png" alt="project-cover" />
          <div className="project-description">
            <p>Music App</p>
            <button>
              <a
                href="https://625da86037f5c310f288224f--fanciful-unicorn-864891.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineEnter />
              </a>
            </button>
            <button>
              <a
                href="https://github.com/arshdeep4909/the-music-player.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </button>
          </div>
        </PorjectBlock>

        <PorjectBlock>
          <img src="image/todo.png" alt="project-cover" />
          <div className="project-description">
            <p>Todo App</p>
            <button>
              <a
                href="https://625ddbb08efb2300c40a02b9--vermillion-duckanoo-e69668.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineEnter />
              </a>{" "}
            </button>
            <button>
              <a
                href="https://github.com/arshdeep4909/to-do.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>{" "}
            </button>
          </div>
        </PorjectBlock>
      </ProjectGrid>
    </ProjectSection>
  );
}

const ProjectSection = styled.div`
  max-width: 1400px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  text-align: center;
  margin: 4rem 4rem 0 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: minmax(350px, 55vh);
  grid-gap: 20px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }
`;

const PorjectBlock = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s ease;
  p {
    font-weight: bold;
  }
  &:hover {
    background-image: linear-gradient(
      to right top,
      #051937,
      #024267,
      #007195,
      #00a3be,
      #3dd7de
    );

    background-color: #1e5397;

    img {
      visibility: hidden;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .project-description {
    position: absolute;
    top: 70%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    text-align: center;
    a {
      color: white;
      border: none;
      border: 1px solid white;
      border-radius: 3px;
      transition: all 0.3s ease;
      padding: 5px;

      &:hover {
        background: white;
        color: black;
        border: 1px solid black;
      }
    }
    button {
      font-size: 20px;
      margin: 30px 10px;
      background: transparent;
      border: none;
    }
  }
  @media screen and (max-width: 768px) {
    height: 50vh;
    .project-description {
      top: 50%;
    }
  }
`;
export default Projects;
