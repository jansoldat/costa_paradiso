import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from '@remix-run/react'
import { Link } from 'react-scroll'
import { gsap } from 'gsap';
import cs from 'classnames'
import { useRootContext } from '~/context/root-context'
import { useWindowSize } from '~/hooks/useWindowSize'
import { FlagCz, FlagEn, FlagIt, Hamburger } from './icons'

const translations = {
  "cs-CZ": {
    showcaseQuote: "skrytý klenot v srdci Středomoří neboli Sardinie",
    about: "Oblast",
    apartment: "Apartmán",
    gallery: "Galerie",
    nearby: "Okolí",
    payment: "Platba",
    contact: "Kontakt",
  },
  "en-US": {
    showcaseQuote: "a hidden gem in the heart of Mediterranean",
    about: "Location",
    apartment: "Apartment",
    gallery: "Gallery",
    nearby: "Surroundings",
    payment: "Payment",
    contact: "Contact",
  },
  "it-IT": {
    showcaseQuote: "gioiello nascosto nel cuore del Mediterraneo",
    about: "Zona",
    apartment: "Appartamento",
    gallery: "Galleria",
    nearby: "Nelle vicinanze",
    payment: "Pagamento",
    contact: "Contatto",
  }
}

const Hero = () => {
  const { language, supportsWebP } = useRootContext()

  const size = useWindowSize();
  const [, setSearchParams] = useSearchParams();
  const showcaseContentRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const tl = useRef(null)
  const navbar = useRef(null)

  const handleClick = () => setIsActive(prev => !prev)

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(navbar.current, { height: "100%", width: '350px', duration: 0.6, borderRadius: "0 0 0 10em" })
      .to(showcaseContentRef.current, { opacity: 0, duration: 1 })
      .to(".navbar__link", { display: "block", duration: 0.1 }, "-=1")
      .to(".navbar__item", { opacity: 1, duration: 0.2, stagger: 0.2 }, "-=0.6")

    return () => {
      tl.current.kill();
    };
  }, [])

  useEffect(() => {
    isActive ? tl.current.play() : tl.current.reverse()
  }, [isActive])


  useEffect(() => {
    if (size.width < 568) {
      showcaseContentRef.current.style.transform = `translate3d(-50%, -50%, 0px)`;
      return
    }
    showcaseContentRef.current.style.transform = `translate3d(0, 0, 0px)`;
  }, [size.width])

  const animate = useCallback(() => {
    let scrolled = window.scrollY;
    const rate = scrolled * 2.3;
    showcaseContentRef.current.style.transform = `translate3d(0px, ${rate}px, 0px)`;
  }, [])

  const handleScroll = useCallback(
    () => {
      if (size.width > 568 && window.scrollY < 250) {
        requestAnimationFrame(animate);
      }
    },
    [animate, size.width],
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);


  return (<>
    <header className="showcase">

      <div className="showcase__content" ref={showcaseContentRef}>
        <h1 className="showcase__heading">Costa Paradiso</h1>
        <p className="showcase__quote">{translations[language].showcaseQuote}</p>
      </div>
      <div className="showcase__bg">
        <div className="showcase__beach" style={{ background: `no-repeat top center/cover ${supportsWebP ? "url('https://res.cloudinary.com/dsnfelexc/image/upload/v1682765430/Hero/background_xrtylw.webp')" : "url('https://res.cloudinary.com/dsnfelexc/image/upload/v1682765386/Hero/background_ch1wfm.png')"}` }} />
        <div className="showcase__sky" style={{ background: `no-repeat center center/cover ${supportsWebP ? "url('https://res.cloudinary.com/dsnfelexc/image/upload/v1682765771/Hero/sky_kmxygm.webp')" : "url('https://res.cloudinary.com/dsnfelexc/image/upload/v1682765385/Hero/sky_gqcnrd.jpg')"}` }} />
      </div>
      <svg className="showcase__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 195.18"><path className="showcase__curve" d="M1400,195.18V97.59c-256.86,63.57-283.79,112-713.14,34.46C273.76,57.47,0,183.94,0,183.94v11.24Z"></path>
      </svg>
      {/* <div className="lang-flag">
        {language !== "cs-CZ" && <FlagCz className="flag-icon" onClick={() => handleFlagClick("cs-CZ")} />}
        {language !== "en-US" && <FlagEn className="flag-icon" onClick={() => handleFlagClick("en-US")} />}
        {language !== "it-IT" && <FlagIt className="flag-icon" onClick={() => handleFlagClick("it-IT")} />}
      </div> */}
    </header>

    <nav className={cs("navbar", { active: isActive })} ref={navbar}>
      <div className={cs("navbar__icon", { active: isActive })}>
        <Hamburger onClick={handleClick} style={{ cursor: "pointer" }} />
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" onClick={() => setIsActive(false)} to="section__about" spy={true} smooth={true} offset={50} duration={500}>
            {translations[language].about}
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" onClick={() => setIsActive(false)} to="section__apartment" spy={true} smooth={true} offset={50} duration={500}>
            {translations[language].apartment}
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" onClick={() => setIsActive(false)} to="section__gallery" spy={true} smooth={true} offset={50} duration={500}>
            {translations[language].gallery}
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" onClick={() => setIsActive(false)} to="section__nearby" spy={true} smooth={true} offset={50} duration={500}>
            {translations[language].nearby}
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" onClick={() => setIsActive(false)} to="section__payment" spy={true} smooth={true} offset={50} duration={500}>
            {translations[language].payment}
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" onClick={() => setIsActive(false)} to="section__contact" spy={true} smooth={true} offset={50} duration={500}>
            {translations[language].contact}
          </Link>
        </li>
      </ul>
    </nav>
  </>
  )
}

export default Hero
