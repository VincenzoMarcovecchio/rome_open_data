import React from 'react';

import styles from './Landing.module.scss';

const {
  wrapper,
  landing,
  landingText,
  landingImage,
  landingNavigationWrapper
} = styles;

export default function Landing(): JSX.Element {
  return (
    <div className={ wrapper }>
      <div className={ landing }>
        <div className={ landingText }>
          <h1>La dashboard di Roma</h1>
          <p>
                      Con in mente la necessità di risolvere i problemi dei cittadini<br />
                 I dati di Roma capitale per capire meglio le nostre prossime mosse
          </p>
        </div>
        <div className={ landingNavigationWrapper }>
          <a
            href="https://github.com/tomburgs/pwa-boilerplate"
            target="_blank"
            rel="noreferrer"
          >
                       Vedi codice sorgente su GitHub
          </a>
      
        </div>
   
      </div>
    </div>
  );
}
