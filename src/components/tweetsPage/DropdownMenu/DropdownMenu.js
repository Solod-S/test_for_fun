import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { SelectDrop } from "./DropdownMenu.styled";

const options = [
  { value: "show all", label: "show all" },
  { value: "follow", label: "follow" },
  { value: "followings", label: "followings" },
];

export function DropdownMenu({ selectedOption, setSelectedOption }) {
  const [searchQuery, setSearchQuery] = useSearchParams();

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSearchQuery({ query: selectedOption.value });
  };

  useEffect(() => {
    setSelectedOption(
      options.find((option) => option.value === searchQuery.get("query"))
        ? {
            value: searchQuery.get("query"),
            label: searchQuery.get("query"),
          }
        : selectedOption
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <SelectDrop
        value={
          options.find((option) => option.value === searchQuery.get("query"))
            ? {
                value: searchQuery.get("query"),
                label: searchQuery.get("query"),
              }
            : selectedOption
        }
        onChange={handleChange}
        options={options}
        placeholder="Select an option"
      />
    </div>
  );
}
