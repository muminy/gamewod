import type { NextPage, NextPageContext } from "next";
import useSWR from "swr";
import { motion } from "framer-motion";

import Layout from "components/core/Layout";
import STYLE from "constants/style";
import UserProfile from "components/ui/Sections/User";
import { fetcherV2 } from "lib/fetcher";
import { find_user } from "services/user/config";
import { ProfileSkeleton } from "components/Skeleton/Profile";
import NotFound from "components/ui/NotFound";
import { useAppSelector } from "store/hooks";
import useCurrentUser from "hooks/useCurrentUser";

interface IProps {
  username: string;
}

const Profile: NextPage<IProps> = (props) => {
  const { data, error } = useSWR(find_user(props.username), fetcherV2);

  // const [currentUser] = useCurrentUser({ username: props.username });

  if (error) {
    return <div>Lütfen bunu bize bildirin</div>;
  }

  return (
    <Layout
      metas={
        data &&
        data.user && {
          description: data.user.username + "Gamewod Profili",
          title: `${data.user.name} | Gamewod.com`,
        }
      }
      className="relative"
    >
      {data ? (
        data.user ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={STYLE.paddingHorizontal}
          >
            <UserProfile.Header />
            <UserProfile.Cover {...data.user} />
            <UserProfile.Tab {...data.user} />
          </motion.div>
        ) : (
          <NotFound />
        )
      ) : (
        <ProfileSkeleton />
      )}
    </Layout>
  );
};

interface InitialProps extends NextPageContext {
  query: {
    username: string;
  };
}

Profile.getInitialProps = async (ctx: InitialProps) => {
  return { username: ctx.query.username };
};

export default Profile;
