import React from 'react'

import {
  Button,
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from '../components'

const About = () => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL style={{ fontFamily: '"Kaushan Script", cursive' }}>
          Filipe Herculano
        </HeadingXL>
        <TextBody>
          <p>
            Hi there, I currently{' '}
            <a
              data-tooltip="linkedin"
              href="https://ca.linkedin.com/in/filipeherculano"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>work</u>
            </a>{' '}
            as a Software Engineer III at{' '}
            <a
              data-tooltip="help us make healthcare better"
              href="https://www.phreesia.com/company/careers/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <u>Phreesia</u>
            </a>{' '}
            and as a Gymnastics Coach at{' '}
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
        <Button href="mailto:dev&#64;filipeherculano.me?subject=Hi 👋&body=( ⧉ ⦣ ⧉ )">
          Get in touch
        </Button>
      </Layout>
    </>
  )
}

export default About
