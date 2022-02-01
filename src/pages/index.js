import { projects } from "../data/projects";
import Head from "next/head";
import { cdnImage } from "../components/utils";
import Fade from "react-reveal/Fade";
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
                    I develop web applications with an eye for simple design, aesthetics and user experience.
                  </p>
                                </Fade>
              </div>

              <div className="col">
                  <div className="projects">
                    {projects.map((item) => (
                      <Fade bottom key={item.name}>
                        <a href={item.repo} className="card" >
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