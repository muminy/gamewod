import { useState } from "react";

export default function useToggle(initial: boolean = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue((prev) => !prev);

  return { value, toggle };
}
