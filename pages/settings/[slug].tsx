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
  const { data } = useUserdata();

  return (
    <Layout className={classNames(STYLE.paddingHorizontal, "mb-0 py-10")}>
      {data.loading ? (
        "loading"
      ) : data.user ? (
        <SettingLayout>
          {router.query.slug === "profile" ? (
            <Settings.Profile />
          ) : router.query.slug === "security" ? (
            <Settings.Security />
          ) : router.query.slug === "general" ? (
            <Settings.General />
          ) : null}
        </SettingLayout>
      ) : (
        <NotFound />
      )}
    </Layout>
  );
}
