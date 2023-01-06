import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const title = "Get in touch"
const subtitle = "I'm a software developer living in Cracow, Poland."

export default function Services() {
  return (
    <Layout title="Services" description={`${title} - ${subtitle}`}>
  <div className={styles.container}>
      <div className="section section-main">
        <div className="left-content">
          <div className="header-wrapper"><h1>services</h1></div>
          <img className="mainphoto" src="/images/skills.png" />
        </div>
        <div className="bottom-content">
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
          <p>DURING THE YEARS I'VE TRIED MANY THINGS IN WEB DEVELOPMENT FIELD. THAT'S WHY I AM ABLE TO PROVIDE PRODUCTS AND SERVICES LIKE:</p>
          <h2></h2>
        </div>
      </div>
      <div className="section section-1">
        <div className="point">
          <span>01/</span>
        </div>
        <div className="content">
          <div className="content-paragraph">
            <p>Landing Pages</p>
            <p>Wordpress and Woocommerce Custom Themes</p>
            <p>React.js/Next.js Web Applications</p>
            <p>Fullstack headless CMS web applications (firebase, nest.js, various content management systems)</p>
            <p>React Native based hybrid mobile apps</p>
            <p>Project planning/architecture design</p>
            <p>E-commerce/business/design consultations</p>
            <p>Web performacne audits</p>
            <p>3rd party services integrations</p>
            <p>process automations (baselinker, airtable etc.)</p>
            <p>digital product maintenance</p>
            <p>staff training in digital solutions usage</p>
          </div>
          
          <div className="content-paragraph-2">
            <div className="header4">
              <h4>A blend of UI and product engineering.</h4>
            </div>
            <div className="content-paragraph-2_content">
              <p>Design, good looking things, aesthetics, architecture and random signs of beauty in everyday life are the things that inspire me the most. That's why I am always looking for a way to transport values from things that I admire to projects I deliver.</p>
              <p>I have strong belief that there are plenty ways to communicate valuable things - that's why I love to work on good looking projects where communication is led not only by content, images but animations and non obvious interactions too.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Layout>
    

  )
}
