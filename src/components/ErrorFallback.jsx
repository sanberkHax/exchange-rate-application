export const ErrorFallback = ({ message }) => {
  return (
    <div
      className="text-red-500 w-full m-auto min-h-screen flex flex-col justify-center items-center gap-4"
      role="alert"
    >
      <h2 className="text-lg font-semibold">
        {message ? message : `Ooops, something went wrong :(`}
      </h2>
      <button
        className=" bg-red-500 p-4 text-white"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};
