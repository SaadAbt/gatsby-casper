import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
      <script src="termynal.js"></script>
      <link rel="stylesheet" type="text/css" href="https://thibaud-robin.fr/css/termynal.css">
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  Atla's CyberSecurity Personal blog & Portefolio <br /> 
                </h5>
                
                
                <p>
    <Helmet>
    <div id="termynal">
        <span data-ty="input" data-ty-prompt="[th1b4ud@th1b4ud-pc ~]$" data-ty-cursor="▋">python3</span>
        <span data-ty data-ty-delay="700">Python 3.8.1 - [GCC 8.1.1] on linux - Type "help", "copyright", "credits" or "license" for more information</span>
        <span data-ty="input" data-ty-delay="300"  data-ty-prompt=">>>" data-ty-cursor="▋">import platform</span>
        <span data-ty="input" data-ty-delay="300"  data-ty-prompt=">>>" data-ty-cursor="▋">os = platform.system()</span>
        <span data-ty="input" data-ty-prompt=">>>" data-ty-cursor="▋">def whoami():</span>
        <span data-ty="input" data-ty-prompt="..." data-ty-cursor="▋">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if os == "Windows":</span>
        <span data-ty="input"  data-ty-delay="700" data-ty-prompt="..." data-ty-cursor="▋">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Cool guy ! Windows it's a usefull tool in internal penetration test :)")</span>
        <span data-ty="input" data-ty-prompt="..." data-ty-cursor="▋">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif os == "Linux":</span>
        <span data-ty="input" data-ty-prompt="..." data-ty-cursor="▋">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if "ARCH" in platform.uname()[2]:</span>
        <span data-ty="input" data-ty-delay="700" data-ty-prompt="..." data-ty-cursor="▋">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Haha the best ! Yeah ArchLinux is the best distrib :D")</span>
        <span data-ty="input" data-ty-prompt="..." data-ty-cursor="▋">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:</span>
        <span data-ty="input" data-ty-prompt="..." data-ty-cursor="▋">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Nice guy ! But why don't have a better distrib ? :)")</span>
        <span data-ty="input" data-ty-delay="1000" data-ty-prompt="..." data-ty-cursor="▋"></span>
        <span data-ty="input" data-ty-prompt=">>>" data-ty-cursor="▋">whoami()</span>
        <span data-ty data-ty-delay="100">Haha the best ! Yeah ArchLinux is the best distrib :D</span>
    </div>

    <script>
    var termynal = new Termynal('#termynal', { 
        startDelay: 600,
        typeDelay: 50,
        lineDelay: 150
    });
    </script>
    </Helmet>
                
                
                
                <p>
                  
                </p>
                <p>
                  
                </p>
                <p>
                  
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
