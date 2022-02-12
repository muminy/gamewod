import type {
  GetServerSidePropsContext,
  NextPage,
  NextPageContext,
} from "next";
import useSWR from "swr";
import { motion } from "framer-motion";

import { NextSeoProps } from "next-seo";

// ** components
import Layout from "components/core/Layout";
import STYLE from "constants/style";
import UserProfile from "components/ui/Sections/User";
import NotFound from "components/ui/NotFound";

import { fetcherV2 } from "lib/fetcher";
import { find_user } from "services/user/config";
import { ProfileSkeleton } from "components/Skeleton/Profile";
import { ApiV2 } from "services/apis";
import { IUser } from "constants/types";

interface IProps {
  user: IUser;
}

const Profile = (props: IProps) => {
  const { user } = props;

  return (
    <Layout
      seo={{
        description: `${user.username} Gamewod Profili`,
        title: `${user.name} | Gamewod.com`,
      }}
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={STYLE.paddingHorizontal}
      >
        <UserProfile.Header {...user} />
        <UserProfile.Cover {...user} />
        <UserProfile.Tab {...user} />
      </motion.div>
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apipath = find_user(context.query.username as string);
  const user = await ApiV2.get(apipath);

  if (user.data.user) {
    return { props: { user: user.data.user } };
  }

  return {
    notFound: true,
  };
}

export default Profile;
