import { SESSION_STORAGE_KEY } from 'src/constants';

const isUserLoggedIn = () => {
  const session: Record<string, string | boolean> = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || '{}');
  return Boolean(session.loggedIn);
};

export default isUserLoggedIn;
