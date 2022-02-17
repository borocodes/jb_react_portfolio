//TODO: add resume download button

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Jon<br />
        I'm glad you're here
      </SectionTitle>
      <SectionText>
      Lucas ipsum dolor sit amet ackbar wicket vader solo moff cade bothan han kashyyyk binks. Solo jar wampa dagobah tatooine coruscant owen jade owen. Qui-gon organa calamari leia.
      </SectionText>
      <Button>Get in touch</Button> 
    </LeftSection>
  </Section>
);

export default Hero;