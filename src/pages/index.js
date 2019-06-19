import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home Page</h1>
    <p>Hello Frontend Masters!!!</p>
    <Link to="/about/">About &rarr;</Link>
  </Layout>
);
