import { PageContainer } from '@/components/PageContainer';
import { LoginForm } from '@/components/LoginForm';

const Login = () => {
  return (
    <PageContainer>
      <div className="flex flex-col gap-10 justify-center items-center text-center">
        <h1 className="text-black font-bold text-3xl">
          Exchange Rate Application
        </h1>
        <LoginForm />
      </div>
    </PageContainer>
  );
};

export default Login;
