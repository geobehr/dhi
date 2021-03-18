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
      Transaction Management Services TMS brings thorough, reliable, and current access to the B2B transactions of global retail energy markets
      </>
    ),
    imageUrl: `img/tms-logo.png`,
    title: 'B2B Transactions for Retail Energy',
  },
  {
    description: (
      <>
      Product-to-Cash P2C is a CIS & Billing solution tailored to the energy industry, with great extensibility
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

function Feature({imageUrl, title, description}) {
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
  const {siteConfig = {}} = context;
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
        <div className="homeContainer">
          <div className="homeSplashFade">
            <div className="wrapper homeWrapper">

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
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
