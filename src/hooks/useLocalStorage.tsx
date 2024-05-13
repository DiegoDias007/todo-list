import { useState } from "react";

function useLocalStorage<T>(item: string) {
  let storedValue;
  try {
    storedValue = JSON.parse(localStorage.getItem(item) || "");
  } catch (err) {
    storedValue = [];
  }
  const [value, setValue] = useState<T>(storedValue);

  function updateLocalStorage(newValue: T) {
    localStorage.setItem(item, JSON.stringify(newValue));
    setValue(newValue);
  }

  return { value, updateLocalStorage };
}

export { useLocalStorage };
