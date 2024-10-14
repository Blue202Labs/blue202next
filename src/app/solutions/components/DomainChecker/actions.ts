"use server";

export const checkDomain = async (domain: string) => {
  const DOMAINR_URL = process.env.DOMAINR_ENDPOINT
    ? process.env.DOMAINR_ENDPOINT
    : "https://domainr.p.rapidapi.com/v2";

  const API_KEY = process.env.RAPID_API_KEY;

  if (!API_KEY) {
    throw Error("No Rapid API Key Defined");
  }

  const domainStatus = await fetch(
    DOMAINR_URL +
      "/status" +
      "?" +
      new URLSearchParams({
        "mashape-key": API_KEY,
        domain: domain,
      })
  );

  const status = await domainStatus.json();

  return status;
};
