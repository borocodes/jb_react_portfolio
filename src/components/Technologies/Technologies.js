import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaRegHandshake } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle style={{ marginTop: 20 }}>Technologies</SectionTitle>
    <SectionText>
      Here are some of the technologies that I have worked with:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            JavaScript ES6 <br />
            React.js <br />
            Vue.js <br />
            Next.js <br />
            HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express.js <br />
            MongoDB <br />
            PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaRegHandshake size="3rem" />
        <ListContainer>
          <ListTitle>Collaborative Tools</ListTitle>
          <ListParagraph>
            Github <br />
            Trello <br />
            Figma <br />
            Slack <br />
            Discord <br />
            Zoom/Hangouts/Teams
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
