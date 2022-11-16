import styles from '../styles/home.module.scss';
import cl from 'classnames';

import { Logo } from '../components/Logo';
import { SocialNetworks } from '../components/SocialNetworks';
import { ButtonClip } from '../components/ButtonClip';
import { ButtonSVG } from '../components/ButtonSVG';
import { ButtonSVG2 } from '../components/ButtonSVG2';
import { ButtonSVG3 } from '../components/ButtonSVG3';
import { Navigation } from '../components/Navigation';
import { Title } from '../components/Title';

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header
          className={styles.header}
        >
          <Logo />
          <SocialNetworks />
          <ButtonSVG onClick={() => {}}>
            Whitepaper
          </ButtonSVG>
        </header>
        <Navigation />
        <div>
          <Title>
            From dust to&nbsp;dawn
          </Title>
          <ul className={styles.buttonList}>
            <li>
              <ButtonClip onClick={() => {}}>
                Clip
              </ButtonClip>
            </li>
            <li>
              <ButtonSVG onClick={() => {}}>
                SVG 3 pieces
              </ButtonSVG>
            </li>
            <li>
              <ButtonSVG2 onClick={() => {}}>
                SVG 2 pieces
              </ButtonSVG2>
            </li>
            <li>
              <ButtonSVG3 onClick={() => {}}>
                Large text
              </ButtonSVG3>
            </li>
            <li>
              <ButtonSVG3 onClick={() => {}}>
                Super Large text
              </ButtonSVG3>
            </li>
          </ul>
        </div>
      </section>
      <section className={cl(styles.section, styles.sectionEarth)}>
        <Title size="Large">
          Factions
        </Title>
      </section>
      <section className={cl(styles.section, styles.sectionRoadMap)}>
    
      </section>
    </div>
  )
}
