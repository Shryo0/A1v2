// SettingsPage.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStore, { toggleNotifications } from './useStore'; // Importação correta

const SettingsPage: React.FC = () => {
  const settings = useSelector((state: any) => state.settings);
  const dispatch = useDispatch();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(useStore.getState().changeTheme(e.target.value));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(useStore.getState().changeLanguage(e.target.value));
  };

  const handleNotificationChange = () => {
    dispatch(toggleNotifications()); // Agora a importação deve funcionar corretamente
  };

  return (
    <div>
      <h1>Configurações</h1>
      <div>
        <h2>Tema</h2>
        <select value={settings.theme} onChange={handleThemeChange}>
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
        </select>
      </div>
      <div>
        <h2>Idioma</h2>
        <select value={settings.language} onChange={handleLanguageChange}>
          <option value="en">Inglês</option>
          <option value="pt">Português</option>
        </select>
      </div>
      <div>
        <h2>Notificações</h2>
        <input type="checkbox" checked={settings.notificationsEnabled} onChange={handleNotificationChange} />
        <label>Ativar notificações</label>
      </div>
    </div>
  );
};

export default SettingsPage;
