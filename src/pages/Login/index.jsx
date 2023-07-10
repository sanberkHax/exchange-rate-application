import { LoginForm } from '@/components/LoginForm';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Exchange Rate Application - Login</title>
        <meta name="description" content="Exchange Rate Application" />
      </Helmet>
      <div className="flex flex-col m-auto gap-10 justify-center items-center text-center">
        <h1 className="text-black font-bold text-3xl">
          Exchange Rate Application
        </h1>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
