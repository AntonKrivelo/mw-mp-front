import { Helmet } from 'react-helmet';
import './style.scss';

const AccountSettingsPage = () => {
  return (
    <>
      <Helmet>
        <title>Настройка аккаунта - MW Marketplace</title>
      </Helmet>
      <h1 className="settings__header-title">Настройки аккаунта</h1>
    </>
  );
};

export default AccountSettingsPage;
