/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Calculater from './Calculater';
export default function HomePage() {
  return ( 
    <div>
      <FormattedMessage {...messages.header} />
      <Calculater />
    </div>  
  );
}
