import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const characteristics = [
  {
    description: (
      <>
        Digital communities can carve out their space, know what they have, who has borrowed it, when it will be returned, how it's being used
      </>
    ),
    imageUrl: `img/undraw_Security_on_ff2u.svg`,
    title: 'Community Security & Privacy',
  },
  {
    description: (
      <>
        Friends, lots of them, engaging in many different ways, on many different platforms. And knowing that good fences make good neighbors!
      </>
    ),
    imageUrl: `img/undraw_agreement_aajr.svg`,
    title: 'Communities of Trust',
  },
];

const adoptionPaths = [
  {
    description: (
      <>
        Grass roots adoption of DHI by 2nd-tier social networks establishes an ecosystem of social networks that provide today's social media consumers with the promise privacy, portability and competition of DHI, while also positioning them to compete better against the giants. With moderate momentum the grass roots efforts could inspire the 800-pound social media giants to adopt the DHI frameworks.
      </>
    ),
    imageUrl: `img/undraw_flowers_vx06.svg`,
    title: 'Organic Adoption',
  },
  {
    description: (
      <>
        Government agencies may force the 800-pound social media giants to adopt DHI frameworks, creating the ultimate ecosystem of social media and consumer privacy.
      </>
    ),
    imageUrl: `img/undraw_judge_katerina_limpitsouni_ny1q.svg`,
    title: 'Regulated Adoption',
  },
  {
    description: (
      <>
        Modern digital communities 'vote with their feet', to upgrade! They break free from the restraints of silo-based social frameworks.
      </>
    ),
    imageUrl: `img/undraw_adventure_4hum.svg`,
    title: 'Community Portability',
  },
];

const features = [
  {
    description: (
      <>
        Land and home ownership is a hallmark of any advanced civilization. The Digital Home Initiative establishes 'digital home ownership' by creating control, privacy and security conventions needed by individuals, families & communities to thrive in cyberspace, where they can gather freely without unwanted surveillance.
      </>
    ),
    imageUrl: `img/favicon.png`,
    title: 'The Digital Home',
  },
  {
    description: (
      <>
        Physical communities take for granted the roads and services that connect us: road and car standards e.g. the stop sign; the USPS for seamless communication; POTS telephone service to talk to anybody, anywhere, anytime.
      </>
    ),
    imageUrl: `img/undraw_town_r6pc.svg`,
    title: 'Roads & Services for Digital Communities',
  },
  {
    description: (
      <>
        DHI helps establish digital communities that value security, privacy, and portability.
      </>
    ),
    imageUrl: `img/undraw_urban_design_kpu8.svg`,
    title: 'Architecture Changing the Digital Social Landscape',
  },
  {
    description: (
      <>
        Today's tech standards like REST, JSON and others make it easy for social networks to connect, while maintaining their proprietary innovation that separates them from others.
      </>
    ),
    imageUrl: `img/undraw_server_status_5pbv.svg`,
    title: 'Opinionated-Yet-Short Tech Stack prioritizes solutions over tech debate',
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function AdoptionPath({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Characteristic({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.characteristic)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.characteristicImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ESG Help & Documentation">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/p2c/titanium/v3-titanium-basics')}>
              Get Started with Titanium!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )},
        {characteristics && characteristics.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {characteristics.map((props, idx) => (
                  <Characteristic key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )},
        {adoptionPaths && adoptionPaths.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {adoptionPaths.map((props, idx) => (
                  <AdoptionPath key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
