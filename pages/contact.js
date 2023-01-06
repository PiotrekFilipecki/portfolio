import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import useCopyToClipboard from '../components/CopyToClipboard';

const title = "Get in touch"
const subtitle = "I'm a software developer living in Cracow, Poland."

export default function Contact() {
  const [value, copy] = useCopyToClipboard()
  const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  }

  const handleMouseOut = () => {
    setIsShown(false);
  }

  return (
<>
      <Layout title="Contact" description={`${title} - ${subtitle}`}>
        <div className="section section-main">
          <div className="left-content">
              <div className="header-wrapper"><h1>send me<br />a message</h1></div>
              <img className="mainphoto" src="images/contact.png" />
          </div>
          <div className="bottom-content">
              <div className="eye__item gs_reveal">
                  <button className="button-about button--surtur scrollToForm">
                      <svg className="textcircle" viewBox="0 0 500 500">
                          <title>Zapisz się już dziś!</title>
                          <defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" /></defs>
                          <text><textPath xlinkHref="#textcircle" fontWeight="light" aria-label="Social Media" textLength="900">Media Social</textPath></text>
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
              <p>We are stronger when we listen, and smarter when we share.</p>
              <h2 
                onClick={() => copy('p.filipecki@blossom-is.online')} 
                className="email"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                >p.filipecki@blossom-is.online</h2>
              
          </div>
          
      </div>
      <div className="section section-1">
              <span></span>

              <div className="content">
                  <div className="content-paragraph contact-links">
                      <a href="https://www.linkedin.com/in/piotr-filipecki-526796aa/" target="_blank" rel="noreferrer">Linked In</a>
                      <a href="https://github.com/PiotrekFilipecki" target="_blank" rel="noreferrer">Github</a>
                      <a href="https://www.instagram.com/tuoszi/" target="_blank" rel="noreferrer">Instagram</a>
                      <a href="https://twitter.com/tuoszi?lang=en" target="_blank" rel="noreferrer">Twitter</a>
                  </div>
              </div>
          </div>

          </Layout>
          <div class={isShown ? 'illustration visible': 'illustration'}>
            <div className="speechBubble">
                <img src="images/speech.png" />
                <p className=''>{value ? "Copied!" : "Click to copy!"}</p>
            </div>
            
            <img className="illustrationImage" src="images/contactillustration.png" />
          </div>
          
          </>

  )
}
