import '../styles/globals.scss'
import '../styles/fonts.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

const noise = () => {
	let canvas, ctx;

	let wWidth, wHeight;

	const noiseData = [];
	let frame = 0;

	let loopTimeout;

	// Create Noise
	const createNoise = () => {
		const idata = ctx.createImageData(wWidth, wHeight);
		const buffer32 = new Uint32Array(idata.data.buffer);
		const len = buffer32.length;

		for (let i = 0; i < len; i++) {
			if (Math.random() < 0.95) {
				buffer32[ i ] = 0xff000000;
			}
		}

		noiseData.push(idata);
	};

	// Play Noise
	const paintNoise = () => {
		if (frame === 9) {
			frame = 0;
		} else {
			frame++;
		}

		ctx.putImageData(noiseData[ frame ], 0, 0);
	};

	// Loop
	const loop = () => {
		paintNoise(frame);

		loopTimeout = window.setTimeout(() => {
			window.requestAnimationFrame(loop);
		}, (1000 / 25));
	};

	// Setup
	const setup = () => {
		wWidth = window.innerWidth;
		wHeight = window.innerHeight;

		canvas.width = wWidth;
		canvas.height = wHeight;

		for (let i = 0; i < 10; i++) {
			createNoise();
		}

		loop();
	};

	// Reset
	let resizeThrottle;
	const reset = () => {
		window.addEventListener('resize', () => {
			window.clearTimeout(resizeThrottle);

			resizeThrottle = window.setTimeout(() => {
				window.clearTimeout(loopTimeout);
				setup();
			}, 200);
		}, false);
	};

	// Init
	const init = (() => {
		canvas = document.getElementById('noise');
		ctx = canvas.getContext('2d');

		setup();
	})();
};

if (typeof window !== "undefined") {
  // window.addEventListener("load", () => console.log("LOADED"));
  document.addEventListener("DOMContentLoaded", () =>
      noise()
  );
}

function MyApp({ Component, pageProps }) {
  return (

    <div className={styles.container}>
    <Head>

      <link rel="icon" href="/favicon.ico" />
      <link
          rel="preload"
          href="/fonts/PPNeueMontreal-Medium.otf"
          as="font"
          crossOrigin=""
          />
        <link
          rel="preload"
          href="/fonts/PPNeueMontreal-Bold.otf"
          as="font"
          crossOrigin=""
          />
        <link
          rel="preload"
          href="/fonts/PPNeueMontreal-Bold.otf"
          as="font"
          crossOrigin=""
          />
    </Head>
<Header />

<div className="viewport">
<div id="scroll-container" className="scroll-container">

<div className='container' data-barba="container" data-barba-namespace="home">
  <main className="home">
  <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
  <Component {...pageProps}  />
  </AnimatePresence>
  </main>
  </div>
    </div>
    </div>
   
    </div>

  )
}

export default MyApp
