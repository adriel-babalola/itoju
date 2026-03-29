import fs from 'fs';
import { Leaf } from '@phosphor-icons/react';
import * as ReactDOMServer from 'react-dom/server';
import React from 'react';

const svgStr = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Leaf, { weight: 'fill', color: '#2ECC71', size: 64, xmlns: "http://www.w3.org/2000/svg" })
);

fs.writeFileSync('public/favicon.svg', svgStr);
