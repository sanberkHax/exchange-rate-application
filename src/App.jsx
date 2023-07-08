import { Suspense } from 'react';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <p>Loading...</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
