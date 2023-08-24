import { Spinner } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  // Check if the user is authenticated by checking if the token is present
  const isAuthenticated = !!localStorage?.getItem('token');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/user/signin'); // Redirect unauthenticated users to login page
    }
    setIsLoading(false); // Set loading state to false once the check is done
  }, [isAuthenticated, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner className="h-16 w-16 text-gray-900/50" />;
      </div>
    );
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
