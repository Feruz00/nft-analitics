import Head from 'next/head';
import React from 'react';

const Title = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content="NFT analytics web site" />
    <link rel="icon" href="/Logo.ico" />
    {/* <link rel="stylesheet" type="text/css" href="/nprogress.css" /> */}
  </Head>
);

export default Title;
