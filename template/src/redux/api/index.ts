import {
  create
} from 'apisauce';
import {
  getAppLanguage
} from '../../Local/i18n';
export const API = create({
  baseURL: "",
  headers: {
    'Content-Type': 'application/json',
    "Accept-Language": getAppLanguage()
  },
});
API.addMonitor(() => {
});
