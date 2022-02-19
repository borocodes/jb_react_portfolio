import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';
import { SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    
    <FooterWrapper>
      <SectionTitle>Contact</SectionTitle>
      <LinkList>
        
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:jonborofsky@gmail.com'>jonborofsky@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Social Media</LinkTitle>
        <LinkItem>
        <SocialIcons href="https://github.com/borocodes">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/jonathan-borofsky/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/borocodes">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
        </LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Let's build something together!</Slogan>
        </CompanyContainer>
        {/* <SocialIcons href="https://github.com/borocodes">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/jonathan-borofsky/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/borocodes">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons> */}
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
