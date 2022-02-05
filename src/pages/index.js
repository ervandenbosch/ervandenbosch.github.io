import { projects } from "../data/projects";
import Head from "next/head";
import { cdnImage } from "../components/utils";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ezra van den Bosch Portfolio </title>
      </Head>
      <div className="homepage">
        <main>
          <div className="container">
            <div className="row">
              <div className="col">
                <Fade left>
                  <div className="profile-image">
                  <h1>Hi,
                  <br />I am Ezra</h1>
                  <img src={cdnImage("photo.png", false, "")}  />
                  </div>
                  <p className="info">
                    I am an aspiring front-end developer with a preference for clean design while using the latest technologies.
                  </p>
                  <p className="icons">
                    <Bounce delay={1000}>
                      <a href="https://github.com/ervandenbosch">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </Bounce>
                    <Bounce delay={1000}>
                      <a href="https://www.linkedin.com/in/ezravandenbosch/">
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Bounce>
                    <Bounce delay={1000}>
                      <a href="https://www.freecodecamp.org/Aestheticdev">
                        <i
                          className="fa fa-free-code-camp"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Bounce>
                    <Bounce delay={1000}>
            <a href="mailto:ezravdb@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i></a>
          </Bounce>
                  </p>
                  </Fade>
              </div>

              <div className="col">
                <h2>Projects</h2>
                  <div className="projects">
                    {projects.map((item) => (
                      <Fade bottom key={item.name}>
                        <a href={item.link} className="card" target={item.target}>
                          <div>
                            <div className="name">{item.name}</div>
                            <div className="info">{item.description}</div>
                            {item.tags.map((tag) => (
                              <div key={tag} className="tag">
                                {tag}
                              </div>
                            ))}
                          </div>
                        </a>
                      </Fade>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}