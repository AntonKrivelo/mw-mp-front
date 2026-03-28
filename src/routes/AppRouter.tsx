import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AccountSettingsPage = lazy(() => import('../pages/AccountSettingsPage/AccountSettingsPage'));

const Loader = () => <div>Loading...</div>;

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* доступен всем */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />

        {/* защищённый */}
        <Route path="/account-settings" element={<AccountSettingsPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
