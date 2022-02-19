import type { GetStaticPropsContext } from "next";
import { motion } from "framer-motion";

// ** components
import Layout from "components/core/Layout";
import UserProfile from "components/ui/Sections/User";

import { find_user } from "services/user/config";
import { ApiV2 } from "services/apis";
import { IUser } from "constants/types";
import { handleGetUsers } from "services/user";

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
        className={""}
      >
        <UserProfile.Header {...user} />
        <UserProfile.Cover {...user} />
        <UserProfile.Tab {...user} />
      </motion.div>
    </Layout>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const apipath = find_user(context.params?.username as string);
  const user = await ApiV2.get(apipath);

  if (user.data.user) {
    return {
      props: { user: user.data.user },
      revalidate: 3,
    };
  }

  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const data = await handleGetUsers();
  const paths = data.users.map((item: IUser) => `/user/${item.username}`);
  return {
    paths: paths || [],
    fallback: false,
  };
}

export default Profile;
