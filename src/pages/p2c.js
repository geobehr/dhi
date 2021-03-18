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
      <>The Titanium Tech Stack data is powered via REST APIs</>
    ),
    content: 'The Titanium Tech Stack data is powered via REST APIs',
    imageUrl: `img/p2c/rest-api-icon.png`,
    title: 'Data by REST APIs',
  },
  {
    description: (<>The Titanium Tech Stack uses ReactJS and Ant to create modern and extensible UI componetry
      </>
    ),
    imageUrl: `img/react-ant.png`,
    title: 'UI Componentry by ReactJS & Ant',

  },
  {
    description: (<>Tight Integration with ESG's TMS, bringing thorough, reliable, and current access to global retail energy markets</>),
    imageUrl: `img/tms-logo-tag.png`,
    title: 'TMS Integration',
  },
  {
    description: (<>'Integration with dozens of external pay, print, correspondence, and other vendors</>),
    imageUrl: `img/p2c/digitization-icon.png`,
    title: 'Integration',
  },
  {
    description: (<>'Localized market intel brings visibility and optimization to operations</>),
    imageUrl: `img/p2c/wq-icon.png`,
    title: 'Visibility via Watch Queues',
  },
  {
    description: (<>'PricePlan extensible componentry - like legos - to support all energy billing products</>),
    imageUrl: `img/p2c/priceplan-legos-icon.png`,
    title: 'Bill Any Product Using Lego-like Building Blocks',
  },
  {
    description: (<>'P2C Branding features enables energy retailers to sell multiple brands from a single CIS/CRM billing solution</>),
    imageUrl: `img/p2c/p2c-branding-v.png`,
    title: 'P2C Multi-Brand Support',
  },
  {
    description: (<>'Nationwide Net-metering support built-in</>),
    imageUrl: `img/p2c/net-metering-icon.png`,
    title: 'Nationwide Net-Metering',
  },
  {
    description: (<>'Non-commodity products like thermostats and service plans, even without energy!</>),
    imageUrl: `img/p2c/thermostat-icon.png`,
    title: 'Non-commodity Products',
  },
  {
    description: (<>'Promotions combine with any product to easily include $ or % discounts or fees, gift cards and more!</>),
    imageUrl: `img/p2c/special-promotion-icon.png`,
    title: 'Promotions',
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
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Help for P2C & Titanium</h1>
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
