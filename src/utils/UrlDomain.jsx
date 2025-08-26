import { DEV_URL, PROD_URL } from "../config";

const UrlDomain = () => {
  return new RegExp(window.location.hostname, 'i').test(DEV_URL) ? DEV_URL : PROD_URL;
};
export default UrlDomain;