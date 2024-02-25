import React from 'react'

import {
  Button,
  HeaderBack,
  HeadingXL,
  Layout,
  Seo,
  TextBody,
} from '../components'

const About = () => {
  return (
    <>
      <Seo title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL style={{ fontFamily: '"Kaushan Script", cursive' }}>
          Filipe Herculano
        </HeadingXL>
        <TextBody>
          <p>
            Hi there, currently I am{' '}
            <a
              data-tooltip="linkedin"
              href="https://ca.linkedin.com/in/filipeherculano"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>working</u>
            </a>{' '}
            as a fractional CTO in a few startup projects. Previously, I worked as an Associate Architect at{' '}
            <a
              data-tooltip="Help Phreesia make healthcare better"
              href="https://www.phreesia.com/company/careers/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>Phreesia</u>
            </a>
            , and as an Engineering Director at{' '}
            <a
              data-tooltip="Building next-generation market intelligence for cannabis"
              href="https://www.linkedin.com/company/pistil-data"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>Pistil Data</u>
            </a>
            . Aside from that, I occasionally run warmups as a Gymnastics Coach at{' '}
            <a
              data-tooltip="backflips and stuff"
              href="https://www.ottawagymnasticscentre.ca/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>Ottawa Gymnastics Centre</u>
            </a>
            .
          </p>
          <p>I enjoy web development, music creation, gymnastics and coffee.</p>
        </TextBody>
        <Button href="mailto:fifo&#64;duck.com?subject=Hi 👋&body=( ⧉ ⦣ ⧉ )">
          Get in touch
        </Button>
      </Layout>
    </>
  )
}

export default About
