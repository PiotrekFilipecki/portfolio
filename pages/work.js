import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const title = "Some of my projects"
const subtitle = "I'm a software developer living in Cracow, Poland."

export default function Work() {
  return (
    <Layout title="Work" description={`${title} - ${subtitle}`}>
      <div className="section section-main">
        <div className="left-content">
          <div className="header-wrapper"><h1>work</h1></div>
          <img className="mainphoto" src="/images/workburgundy.png" />
        </div>
        <div className="bottom-content">
          <div className="eye__item gs_reveal">
            <button className="button-about button--surtur scrollToForm">
                <svg className="textcircle" viewBox="0 0 500 500">
                    <title>Zapisz się już dziś!</title>
                    <defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"/></defs>
                    <text><textPath xlinkHref="#textcircle" fontWeight="light" aria-label="Zapisz się już dziś!" textLength="900">See more See more</textPath></text>
                </svg>
                <svg aria-hidden="true" className="eye" width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
                    <path className="eye__outer" d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z"/>
                    <path className="eye__lashes-up" d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192" />
                    <path className="eye__lashes-down" d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z" />
                    <circle fill="#8c0000" className="eye__iris" cx="35" cy="35.31" r="5.221" />
                    <circle className="eye__inner" cx="35" cy="35.31" r="10.041" />
                </svg>
            </button>
        </div>
          <p>PLEASE CHECK MY WORK AND LET ME KNOW IF YOU FIND ANY OF THESE INSPIRING IN TERMS OF YOUR PROJECT.</p>
          <h2></h2>
        </div>
      </div>
      <div className="section section-1 section-1_work">
          <div className="projectCards">
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/tohi.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">TOHI</h4>
                <div className="project-content_details">
                  <span>Wordpress | WooCommerce | Subscriptions | ACF | GSAP | Lottie</span>
                  <p>E-commerce website for new suppliments company from poland.</p>
                </div>
              </div>
              <Link className="more-link" target="_blank" href="https://tohisuplementy.pl">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/sayos.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">SAYOS</h4>
                <div className="project-content_details">
                  <span>Gatsby.js | Dato CMS | Headless | Netlify</span>
                  <p>Portfolio website for architecture design studio.</p>
                </div>
              </div>
              <Link className="more-link" href="https://www.sayos.eu/" target="_blank">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/iam.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">I&apos;AM</h4>
                <div className="project-content_details">
                  <span>Wordpress | ACF | gsap</span>
                  <p>Product website about app for prosthesis industry.</p>
                </div>
              </div>
              <Link className="more-link" href="https://iam.glazeprosthetics.com/" target="_blank">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/pstk.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">PSTK</h4>
                <div className="project-content_details">
                  <span>Wordpress | WPML | ACF | Google Maps API</span>
                  <p>Conference translators community web portal with user regsitration and user profile management.</p>
                </div>
              </div>
              <Link className="more-link" href="https://pstk.org.pl/" target="_blank">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/ekipa.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">Ekipa Holding</h4>
                <div className="project-content_details">
                  <span>Wordpress | ACF | GSAP</span>
                  <p>Corporate website for polish most known youtube creators holding company.</p>
                </div>
              </div>
              <Link className="more-link" href="https://ekipaholding.pl/" target="_blank">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/ryvu.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">RYVU</h4>
                <div className="project-content_details">
                  <span>Wordpress | ACF | WPML</span>
                  <p>Corporate website for medicine research company.</p>
                </div>
              </div>
              <Link className="more-link" href="https://ryvu.com/" target="_blank">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/streetpark.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">STREETPARK</h4>
                <div className="project-content_details">
                  <span>Wordpress | Polylang| ACF | GSAP</span>
                  <p>Company website for the biggest indoor skatepark in southern poland.</p>
                </div>
                
              </div>
              <Link className="more-link" href="https://streetpark.pl/" target="_blank">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/configurator.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">configurator</h4>
                <div className="project-content_details">
                  <span>React.js | Redux |</span>
                  <p>Prosthesis configurator for Glaze Prosthetics.</p>
                </div>
                
              </div>
              <Link className="more-link" href="https://configurator.glazeprosthetics.com/" target="_blank">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/crm.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">CRM System</h4>
                <div className="project-content_details">
                  <span>React.js | Redux | Ruby On Rails |</span>
                  <p>Custom CRM system for Glaze Prosthetics</p>
                </div>
                
              </div>
              <Link className="more-link" href="#" target="_blank">unfortunately cant display link</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/idrinq.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">idrinq</h4>
                <div className="project-content_details">
                  <span>Static website | gsap | kute.js</span>
                  <p>Creative product landing page.</p>
                </div>
                
              </div>
              <Link className="more-link" href="https://idrinq.fr/" target="_blank">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/inova.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">inovamed</h4>
                <div className="project-content_details">
                  <span>Gatsby.js | Dato CMS | Netlify</span>
                  <p>Corporate webiste for one of the biggest prosthesis products distributor in Poland</p>
                </div>
                
              </div>
              <Link className="more-link" href="https://inovamed.pl/" target="_blank">SEE WEBSITE</Link>
            </div>
            <div className="project">
              <div className="project-image">
                <img src="/images/projects/yba.png" />
              </div>
              <div className="project-content">
                <h4 className="project-content_name">Yba</h4>
                <div className="project-content_details">
                  <span>Wordress | ACF | GSAP</span>
                  <p>Company website for London based digital marketing agency.</p>
                </div>
                
              </div>
              <Link className="more-link" href="https://www.ybappc.co.uk/" target="_blank">SEE WEBSITE</Link>
            </div>
          </div>
      </div>
      <div className="section section-2">
        <p className="somemore">and some more</p>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://www.published-by.com/'>published by</Link>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://lukasiewicz.gov.pl/'>instytut łukasiewicza</Link>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://www.akademiamakijazu.pl/'>akademia makijażu</Link>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://dailygrind.pl/'>daily grind</Link>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://gulgulkrakow.pl/'>gul gul</Link>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://surowa.com/'>surowa.com</Link>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://www.e-venus.pl/'>Venus</Link>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://hutawnetrz.flywheelsites.com/'>huta wnętrz</Link>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://www.colgatetalks.com/'>colgate talks</Link>
        <Link className="hoverButton hoverButton-1" target="_blank" href='https://www.danklorix.de/'>dan klorix</Link>
      </div>
    </Layout>
  )
}
