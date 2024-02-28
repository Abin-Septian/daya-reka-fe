import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

const SearchBar = ({ handleSearchChange }: any) => {
  return (
    <label
      htmlFor="input"
      className="flex w-full items-center space-x-4 rounded-lg bg-white p-1 focus-within:border-red-700"
    >
      <MagnifyingGlassIcon width={28} height={28} className="text-gray-400" />
      <input
        id="input"
        name="input"
        type="text"
        className="w-full text-gray-400 focus:outline-none"
        placeholder="Search Customer"
        onChange={handleSearchChange}
      />

      <Button className="h-8 rounded-xl bg-indigo-500">Search</Button>
    </label>
  );
};

export default SearchBar;
