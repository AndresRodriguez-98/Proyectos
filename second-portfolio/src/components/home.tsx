import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';


const StyledHeroSection = styled.section`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  background-color: #0a192f;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: #64ffda;
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    color: #e6f1ff
  }

  h3 {
    margin-top: 5px;
    color: #a8b2d1;
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
    color: #8892b0;
  }

  .email-link {
    margin-top: 50px;
  }
`;

const Hero = () => {

    const one = <h1>Hi, my name is</h1>;
    const two = <h2 className="big-heading">Andrés Rodríguez.</h2>;
    const three = <h3 className="big-heading">I build things for the web.</h3>;
    const four = (
        <>
            <p>
                I'm a web developer specializing in frontend with React and Tailwind Css. Currently, I'm focused on building own projects to improve my personal skills.
            </p>
        </>
    );

    const items = [one, two, three, four];

    return (
        <StyledHeroSection>
            <TransitionGroup component={null}>
                {
                    items.map((item, i) => (
                        <CSSTransition key={i} classNames="fadeup" timeout={200}>
                            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </StyledHeroSection>
    );
};

export default Hero;