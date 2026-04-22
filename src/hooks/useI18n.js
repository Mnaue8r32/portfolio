import { useMemo } from 'react';
import { translations } from '../i18n/translations';
import useAppPreferences from './useAppPreferences';

export default function useI18n() {
  const preferences = useAppPreferences();

  const t = useMemo(() => translations[preferences.language] ?? translations.es, [preferences.language]);

  return {
    ...preferences,
    t,
  };
}
