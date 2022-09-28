import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { ReactElement } from 'react';

interface PrivateRouterProps {
  children?: ReactElement;
  authentication: boolean;
}

export default function PrivateRouter({
  authentication,
}: PrivateRouterProps): any {
  const [cookies] = useCookies(['userToken']);
  const isAuthenticated = cookies.userToken && true;
  if (authentication) {
    return isAuthenticated === true ? <Outlet /> : <Navigate to="/signin" />;
  }
}
