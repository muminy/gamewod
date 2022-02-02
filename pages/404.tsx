import type { NextPage } from "next";

import Layout from "components/core/Layout";
import NotFound from "components/ui/NotFound";

const NotFoundPage: NextPage = () => {
  return (
    <Layout className="relative">
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
