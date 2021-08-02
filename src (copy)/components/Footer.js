import React, {lazy, useState, Suspense, useEffect} from 'react';
import {Twitter, GitHub, Database, Mail, Send} from 'react-feather';
import {useTranslation} from 'react-i18next';
const Privacy = lazy(() => import('./Privacy'));

function Footer() {
  const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="https://civicdatalab.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          66A Tracker
        </a>
      </div>

      <h5>{t('We stand against 66A')}</h5>

      <div className="links">
        <a
          href="https://github.com/civcdatalab"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        {/*<a
          className="api"
          href="https://api.covid19india.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database />
        </a>*/}

        <a
          href="https://civicdatalab.in"
          className="telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a>

        <a
          href="https://twitter.com/civcdatalab"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <Twitter />
        </a>

        <a
          href="mailto:hello@civicdatalab.in"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
