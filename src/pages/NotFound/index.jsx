import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-10 justify-center m-auto items-center text-center">
      <h1 className="text-black font-bold text-3xl">Page Not Found</h1>
      <Link to="/" className="font-bold text-primary">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
