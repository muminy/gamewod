import classNames from "classnames";
import Layout from "components/core/Layout";
import NotFound from "components/ui/NotFound";
import Settings from "components/ui/Sections/User/settings";
import SettingLayout from "components/ui/Sections/User/settings/Layout";
import STYLE from "constants/style";
import useUserdata from "hooks/useUserdata";
import { useRouter } from "next/router";

export default function SettingPage() {
  const router = useRouter();
  const { user } = useUserdata();

  return (
    <Layout className={classNames(STYLE.paddingHorizontal, "mb-0 py-10")}>
      {user.user ? (
        <SettingLayout>
          {router.query.slug === "profile" ? (
            <Settings.Profile />
          ) : router.query.slug === "security" ? (
            <Settings.Security />
          ) : null}
        </SettingLayout>
      ) : (
        <NotFound />
      )}
    </Layout>
  );
}
