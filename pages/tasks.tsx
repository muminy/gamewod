import classNames from "classnames";
import Layout from "components/core/Layout";
import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import Modal from "components/ui/Modal";
import BugModal from "components/ui/Modal/components/Bug.modal";
import { PlusIconPath } from "constants/flaticons";
import STYLE from "constants/style";
import useToggle from "hooks/useToggle";
import styles from "styles/tasks.module.css";

export default function Tasks() {
  const { value: bugModal, toggle: toggleBugModal } = useToggle();

  return (
    <Layout className="mb-0 py-10">
      <div className="max-w-5xl">asd</div>
    </Layout>
  );
}
