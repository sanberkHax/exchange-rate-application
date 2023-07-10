import { LoginForm } from '@/components/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col m-auto gap-10 justify-center items-center text-center">
      <h1 className="text-black font-bold text-3xl">
        Exchange Rate Application
      </h1>
      <LoginForm />
    </div>
  );
};

export default Login;
