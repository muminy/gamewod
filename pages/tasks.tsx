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
    <Layout className="mb-0 py-10" disableContainer>
      <div className={classNames(STYLE.paddingHorizontal)}>
        <div className="text-3xl font-bold text-gray-700 mb-3">
          Görev Panosu
        </div>
      </div>

      <Flexible
        className={classNames(styles.taskheader, STYLE.paddingHorizontal)}
      >
        <button className={styles.active}>Yapılması Gerekenler</button>
        <button>Kullanıcı İstekleri</button>
        <button>Gelecek Yenilikler</button>
      </Flexible>

      <Flexible className={classNames(STYLE.paddingHorizontal, styles.tasks)}>
        <div className={styles.taskarea}>
          <Flexible
            className="mb-4"
            alignItem="items-center"
            justifyContent="justify-between"
          >
            <div className="font-medium text-lg text-gray-700">Buglar</div>
            <button
              onClick={toggleBugModal}
              className="bg-white shadow-sm text-gray-500 flex items-center justify-center h-8 w-8 rounded-md"
            >
              <Flaticon paths={PlusIconPath} />
            </button>
          </Flexible>

          <div className={styles.task}>
            <div className="font-semibold mb-2 text-gray-700">
              Bugla karşılaşıldı
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Let us give you another sneak peek at the web design project we
              recently worked on.
            </div>

            <Flexible className="space-x-2">
              <span className="px-2 py-1 rounded-md text-red-900 bg-red-50 text-sm font-medium">
                Bug
              </span>
              <span className="px-2 py-1 rounded-md text-green-900 bg-green-50 text-sm font-medium">
                Forum
              </span>
              <span className="px-2 py-1 rounded-md text-blue-900 bg-blue-50 text-sm font-medium">
                Kullanıcı
              </span>
            </Flexible>
          </div>
        </div>

        <div className={styles.taskarea}>
          <div className="mb-4 font-semibold text-lg text-gray-500">
            İncelemede Olanlar
          </div>

          <div className={styles.task}>
            <div className="font-semibold mb-2 text-gray-700">
              Bugla karşılaşıldı
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Let us give you another sneak peek at the web design project we
              recently worked on.
            </div>

            <Flexible className="space-x-2">
              <span className="px-2 py-1 rounded-md text-red-900 bg-red-50 text-sm font-medium">
                Bug
              </span>
              <span className="px-2 py-1 rounded-md text-green-900 bg-green-50 text-sm font-medium">
                Forum
              </span>
              <span className="px-2 py-1 rounded-md text-blue-900 bg-blue-50 text-sm font-medium">
                Kullanıcı
              </span>
            </Flexible>
          </div>
        </div>

        <div className={styles.taskarea}>
          <div className="mb-4 font-semibold text-lg text-gray-500">
            Yapım Aşamasında Olanlar
          </div>

          <div className={styles.task}>
            <div className="font-semibold mb-2 text-gray-700">
              Bugla karşılaşıldı
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Let us give you another sneak peek at the web design project we
              recently worked on.
            </div>

            <Flexible className="space-x-2">
              <span className="px-2 py-1 rounded-md text-red-900 bg-red-50 text-sm font-medium">
                Bug
              </span>
              <span className="px-2 py-1 rounded-md text-green-900 bg-green-50 text-sm font-medium">
                Forum
              </span>
              <span className="px-2 py-1 rounded-md text-blue-900 bg-blue-50 text-sm font-medium">
                Kullanıcı
              </span>
            </Flexible>
          </div>
        </div>

        <div className={styles.taskarea}>
          <div className="mb-4 font-semibold text-lg text-gray-500">
            Son Değişiklikler
          </div>

          <div className={styles.task}>
            <div className="font-semibold mb-2 text-gray-700">
              Bugla karşılaşıldı
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Let us give you another sneak peek at the web design project we
              recently worked on.
            </div>

            <Flexible className="space-x-2">
              <span className="px-2 py-1 rounded-md text-red-900 bg-red-50 text-sm font-medium">
                Bug
              </span>
              <span className="px-2 py-1 rounded-md text-green-900 bg-green-50 text-sm font-medium">
                Forum
              </span>
              <span className="px-2 py-1 rounded-md text-blue-900 bg-blue-50 text-sm font-medium">
                Kullanıcı
              </span>
            </Flexible>
          </div>
        </div>

        <div className={styles.taskarea}>
          <div className="mb-4 font-semibold text-lg text-gray-500">
            Son Değişiklikler
          </div>

          <div className={styles.task}>
            <div className="font-semibold mb-2 text-gray-700">
              Bugla karşılaşıldı
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Let us give you another sneak peek at the web design project we
              recently worked on.
            </div>

            <Flexible className="space-x-2">
              <span className="px-2 py-1 rounded-md text-red-900 bg-red-50 text-sm font-medium">
                Bug
              </span>
              <span className="px-2 py-1 rounded-md text-green-900 bg-green-50 text-sm font-medium">
                Forum
              </span>
              <span className="px-2 py-1 rounded-md text-blue-900 bg-blue-50 text-sm font-medium">
                Kullanıcı
              </span>
            </Flexible>
          </div>
        </div>
      </Flexible>

      <Modal
        component={BugModal}
        toggle={toggleBugModal}
        open={bugModal}
        size="md"
      />
    </Layout>
  );
}
