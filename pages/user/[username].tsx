import type { NextPageContext } from "next";
import { motion } from "framer-motion";

// ** components
import Layout from "components/core/Layout";
import UserProfile from "components/ui/Sections/User";
import NotFound from "components/ui/NotFound";

import { find_user } from "services/user/config";
import { ApiV2 } from "services/apis";
import { IUser } from "constants/types";

interface IProps {
  user?: IUser;
}

const Profile = ({ user }: IProps) => {
  // if not found user data then return not found data
  if (!user) return <NotFound />;

  return (
    <Layout
      seo={{
        description: `${user?.username} Gamewod Profili`,
        title: `${user?.name || "Bulunamadı"} | Gamewod.com`,
      }}
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={""}
      >
        <UserProfile.Header {...user} />
        <UserProfile.Cover {...user} />
        <UserProfile.Tab {...user} />
      </motion.div>
    </Layout>
  );
};

interface InitialProps extends NextPageContext {
  query: {
    username: string;
  };
}

Profile.getInitialProps = async (ctx: InitialProps) => {
  const result = await ApiV2.get(find_user(ctx.query?.username));
  return { user: result.data.user };
};

export default Profile;
