import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';

const AppPreferencesContext = createContext(null);

const LANGUAGE_KEY = 'portfolio-language';
const THEME_KEY = 'portfolio-theme';

function getInitialLanguage() {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  return stored === 'en' ? 'en' : 'es';
}

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return globalThis.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function AppPreferencesProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.dataset.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      toggleLanguage: () => setLanguage((prev) => (prev === 'es' ? 'en' : 'es')),
      toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [language, theme],
  );

  return (
    <AppPreferencesContext.Provider value={value}>
      {children}
    </AppPreferencesContext.Provider>
  );
}

AppPreferencesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppPreferencesContext;
