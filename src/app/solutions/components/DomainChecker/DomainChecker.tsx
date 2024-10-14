"use client";

import { BaseSyntheticEvent, useState } from "react";
import { checkDomain } from "./actions";

export const DomainChecker = () => {
  const [domain, setDomain] = useState("");

  return (
    <div>
      <form className="flex gap-4 text-lg">
        <input
          type="text"
          value={domain}
          onChange={(e: BaseSyntheticEvent) => {
            setDomain(e.target.value);
          }}
          className="border-2 rounded-lg p-2 px-4 w-full outline-none focus:outline focus:border-slate-500"
          placeholder="my-cool-domain.com"
        ></input>
        <button
          onClick={async (e: BaseSyntheticEvent) => {
            e.preventDefault();
            console.log(domain);
            const status = await checkDomain(domain);
            console.log(status);
          }}
          className="bg-blue-accent text-white px-4 rounded-lg text-nowrap"
        >
          Check Domain
        </button>
      </form>
    </div>
  );
};
