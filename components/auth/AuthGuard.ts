import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AuthGuard = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return children;
};

export default AuthGuard;