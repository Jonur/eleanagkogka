import { SESSION_STORAGE_KEY } from 'src/constants';

const startUserSession = () => {
  const session: Record<string, string | boolean> = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || '{}');

  sessionStorage.setItem(
    SESSION_STORAGE_KEY,
    JSON.stringify({
      ...session,
      loggedIn: true,
    })
  );
};

export default startUserSession;
