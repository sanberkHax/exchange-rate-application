import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <>
      <ErrorBoundary
        fallback={
          <div
            className="text-red-500 w-screen h-screen flex flex-col justify-center items-center gap-4"
            role="alert"
          >
            <h2 className="text-lg font-semibold">
              {`Ooops, something went wrong :(`}
            </h2>
            <button
              className=" bg-red-500 p-4 text-white"
              onClick={() => window.location.assign(window.location.origin)}
            >
              Refresh
            </button>
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">
              <p>Loading...</p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
