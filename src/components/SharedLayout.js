import { Suspense } from 'react';
import UserMenu from './UserMenu/UserMenu';

const { Outlet } = require('react-router-dom');

const { MeinContainer } = require('./Appstyles/App.styles');

const SharedLayout = () => {
  return (
    <MeinContainer>
      <UserMenu />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </MeinContainer>
  );
};

export default SharedLayout;
