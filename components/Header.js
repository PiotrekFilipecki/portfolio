import Link from 'next/link'

const Header = () => (
    <><header>
        <Link className="logo" href="/">pf<span className="ball"></span></Link>
        <nav className="nav">
            <Link href='/services'>Services</Link>
            {/* <Link href='/process'>Process</Link> */}
            <Link href='/work'>Work</Link>
            <Link href='/contact'>Contact</Link>
        </nav>
    </header><canvas id="noise" className="noise"></canvas></>
)

export default Header;