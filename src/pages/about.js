import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>Welcome to the website about things of interest.</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
)