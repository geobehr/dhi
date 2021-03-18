import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    description: (
      <>
        Land and home ownership is a hallmark of any advanced civilization. The Digital Home Initiative establishes 'digital home ownership' by creating control, privacy and security conventions needed by individuals, families & communities to thrive in cyberspace, where they can gather freely without unwanted surveillance.

        Like the US Bill of Rights, rights of people in their digital homes must be protected. Occupation and surveillance by unwanted parties - ad bots, IoT, smart speakers, etc. - should be known, and expelled if desired.

        While not directly related to IoT, smart homes, smart speakers, etc, these devices contribute to the challenge by opening digital back doors into our lives.        ABC
      </>
    ),
    imageUrl: `img/dhi-logo.png`,
    title: 'The Digital Home',
  },
  {
    description: (
      <>
        DEF
      </>
    ),
    imageUrl: `img/p2c-logo.png`,
    title: 'Energy CIS & Billing',
  },
  {
    description: (
      <>
        iSigma is a CIS & Billing Billing solution tailored to the energy industry, with great extensibility
      </>
    ),
    imageUrl: `img/isigma-logo.png`,
    title: 'Energy CIS & Billing',
  },
  {
    description: (
      <>
        Wholesale Energy Solutions enables rapid entry to wholesale electric markets in the US & Japan
      </>
    ),
    imageUrl: `img/wes-logo.png`,
    title: 'Wholesale solutions for Retail Energy',
  },
  {
    description: (
      <>
        Ascent quoting and channel management features are tailored to the unique needs of electric and gas energy markets
      </>
    ),
    imageUrl: `img/ascent-logo.png`,
    title: 'Energy Sales & Channel Management',
  },
  {
    description: (
      <>
        The CentreStage data warehouse & data lake features enable centralized visibility and access, specializing in energy markets
      </>
    ),
    imageUrl: `img/centrestage-logo-tag.png`,
    title: 'CentreStage Energy Data Warehouse & Data Lake',
  },
  {
    description: (
      <>
        The Latitude suite is a comprehensive set of products focused on pipelines and storage
      </>
    ),
    imageUrl: `img/latitude-logo2.png`,
    title: 'Latitude Pipelines & Storage',
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
        )}
      </main>
    </Layout>
  );
}

export default Home;
