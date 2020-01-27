import fromPairs from "lodash/fromPairs";

export const getGuidFromCookies = () => {
  const cookies = fromPairs([document.cookie.split("=")]);
  return cookies.guid;
}