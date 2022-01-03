import type { NextPage } from "next";

import Layout from "components/core/Layout";
import STYLE from "constants/style";
import UserProfile from "components/ui/Sections/User";

const Profile: NextPage = () => {
  return (
    <Layout className="relative">
      <div className={STYLE.paddingHorizontal}>
        <UserProfile.Header />

        <UserProfile.Cover />
        <UserProfile.Tab />
      </div>
    </Layout>
  );
};

export default Profile;
