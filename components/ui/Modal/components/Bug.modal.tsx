import classNames from "classnames";
import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import Input from "components/ui/FormElements/Input";
import Select from "components/ui/FormElements/Select";

export default function BugModal() {
  return (
    <div className="p-6">
      <div className="font-semibold text-lg text-gray-800 mb-3">Bug Bildir</div>

      <label className="font-medium text-sm mb-1 block" htmlFor="bug-select">
        Bug içeriği
      </label>
      <Select id="bug-select" className="px-4 text-sm py-2 mb-4">
        <option>Bu bir</option>
      </Select>

      <label className="font-medium text-sm mb-1 block" htmlFor="bug-title">
        Başlık
      </label>
      <Input
        className="px-4 text-sm py-2"
        id="bug-title"
        placeholder="Bug Başlık"
      />
    </div>
  );
}
