import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { motion, Variants } from "framer-motion";

const title = "Hello, I'm Piotr 👋"
const subtitle = "I'm a software developer living in Cracow, Poland."

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.8
    }
  }
};

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, 0: 50 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <motion.div
    className="card-container"
    // initial="offscreen"
    // whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
  >
      <Layout title="Home" description={`${title} - ${subtitle}`}>

      <div className="section section-main">
      <div className="left-content">
        <div className="header-wrapper"><h1>Piotr<br />Filipecki</h1></div>
        <img className="mainphoto mainphoto-home" src="/images/lilosz.jpg" />
      </div>
      <div className="bottom-content">
        <div className="eye__item gs_reveal">
          <button className="button-about button--surtur scrollToForm">
            <svg className="textcircle" viewBox="0 0 500 500">
              <title>Zapisz się już dziś!</title>
              <defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" /></defs>
              <text><textPath xlinkHref="#textcircle" fontWeight="light" aria-label="Zapisz się już dziś!" textLength="900">See more See more</textPath></text>
            </svg>
            <svg aria-hidden="true" className="eye" width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
              <path className="eye__outer" d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z" />
              <path className="eye__lashes-up" d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192" />
              <path className="eye__lashes-down" d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z" />
              <circle fill="#8c0000" className="eye__iris" cx="35" cy="35.31" r="5.221" />
              <circle className="eye__inner" cx="35" cy="35.31" r="10.041" />
            </svg>
          </button>
        </div>
        <p>I SUPPORT COMPANIES AND AGENCIES PROVIDING VALUABLE DIGITAL EXPERIENCE</p>
        <h2>fullstack<br />developer</h2>
      </div>
    </div><div className="section section-1">
        <div className="point point-1">
          <span>01/</span>
        </div>
        <div className="content">
        <motion.div 
          className="show"
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y:0 }}
          duration={14}
          >
          <div className="content-paragraph">
            <p className="section1-up-paragraph">I am WEB TECHNOLOGIES and design PASSIONATE who LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES TO CREATE MEMORABLE WEB EXPERIENCES.</p>
            <p className="section1-up-paragraph">During my 10 year web development journey I had opportunity to provide projects for companies like Samsung, Lay&apos;s, Colgate, Palmolive, Microsoft, Ferrero as well as various startups and small businesess.</p>
            <p className="section1-up-paragraph">I believe that this experience combined with curiosity about entrepreneurship itself, led me to business awareness that brings essential value to services I offer.</p>
          </div>
          </motion.div>
          <div className="content-paragraph-2">
            <div className="header4 technologies">
              <h4>Technologies<br />and Tools</h4>
            </div>
            <div className="content-paragraph-2_content">
              <p className="technologies-paragraph">I feel comfortable in custom Wordpress/WooCommerce theme development, React.js, Redux, Redux Toolkit, React Native, Next.js, Gatsby.js, node.js, express.js, nest.js, firebase, airtable, gsap, barba.js</p>
              <p className="technologies-paragraph">I know a thing or two about development tools like webpack, cloud servers, container environments. Sometimes I use tools like figma or photoshop.</p>
              <p className="technologies-paragraph">I am a big enthusiast of design, headless cms movement, web3, nocode/lowcode tools, process automation, web performance, creative development, p5 and webgl shaders thing.</p>
            </div>
          </div>
        </div>
      </div><div className="section section-2">

        <div className="content">
          <div className="point point-2">
            <span>02/</span>
          </div>
          <div className="content-paragraph">
            <div className="header-wrapper header4"><h4 className="">Recent<br />projects.</h4></div>
          </div>
        </div>
        <div className="projects">
          <div className="project">
            <div className="project-content">
              <h4 className="project-content_name">TOHI</h4>
              <div className="project-content_details">
                <span>WORDPRESS | WOOCOMMERCE | SUBSCRIPTIONS | ACF | GSAP | LOTTIE</span>
                <p>E-commerce website for new suppliments company from poland.</p>
              </div>
              <Link className="more-link-home" target="_blank" href="https://tohisuplementy.pl">SEE WEBSITE</Link>
            </div>
            <div className="project-image">
              <img src="/images/projects/tohi.png" />
            </div>
          </div>

          <div className="project">
            <div className="project-content">
              <h4 className="project-content_name">Streetpark</h4>
              <div className="project-content_details">
                <span>Wordpress | Polylang | ACF | GSAP</span>
                <p>Company website for the biggest indoor skatepark in southern poland.</p>
              </div>
              <Link className="more-link-home" target="_blank" href="https://streetpark.pl/">SEE WEBSITE</Link>
            </div>
            <div className="project-image">
              <img src="/images/projects/streetpark.png" />
            </div>
          </div>

          <div className="project">
            <div className="project-content">
              <h4 className="project-content_name">Ekipa holding</h4>
              <div className="project-content_details">
                <span>Wordpress | ACF | GSAP</span>
                <p>Corporate website for polish most known youtube creators holding company.</p>
              </div>
              <Link className="more-link-home" target="_blank" href="https://ekipaholding.pl/">SEE WEBSITE</Link>
            </div>
            <div className="project-image">
              <img src="/images/projects/ekipa.png" />
            </div>
          </div>


          <Link className="hoverButton hoverButton-1" href='/work'>CHECK SOME MORE PROJECTS</Link>
          <Link className="hoverButton hoverButton-1 contactbutton" href='/contact'>GET IN TOUCH</Link>
        </div>
      </div>

      </Layout>
      </motion.div>
  )
}
