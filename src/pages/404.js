import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <div>Page Not Found</div>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <Seo title="Page Not found" />;
