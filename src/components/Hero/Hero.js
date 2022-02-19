//TODO: add resume download button

import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, my name is Jon
        <br />
        I'm glad you're here
      </SectionTitle>
      <SectionText>
        I'm a fullstack developer who is passionate about creating professional,
        modern frontend designs and connecting them to powerful backend
        infastructure. I'd love to have a conversation about what I can do for
        you.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:jonborofsky@gmail.com")}
      >
        Get in touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
