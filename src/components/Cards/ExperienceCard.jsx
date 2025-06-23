import React from "react";
import styled from "styled-components";

import {
  Document,
  Description,
  Span,
  Card,
  Image,
  Body,
  Role,
  Company,
  Top,
  Date,
  Skills,
  Skill,
  ItemWrapper,
} from "./ExperienceCardStyle";

const ExperienceCard = ({ experience, darkMode, setDarkMode }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
