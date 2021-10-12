import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Doniyor's Portfolio
      </SectionTitle>
      <SectionText>
        Front End Developer who focuses on writing clean, elegant and efficient
        code. Love JavaScript, ReactJS as well as modern and unordinary web
        designes. <br /> Want to work with me? Do not hesitate, contact me!
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://www.linkedin.com/in/doniyor-umarov-a94679140/')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
