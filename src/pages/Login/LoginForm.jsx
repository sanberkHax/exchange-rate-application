import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const InputWithError = fieldRenderProps => {
  const { validationMessage, touched, ...others } = fieldRenderProps;

  return (
    <div>
      <Input {...others} />
      {touched && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

export const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async values => {
    await auth.login(values);
    navigate('/');
  };

  const usernameValidator = value => (value ? '' : 'Please enter a username.');
  const passwordValidator = value => (value ? '' : 'Please enter a password.');

  const handleAutoFill = (e, formRenderProps) => {
    e.preventDefault();

    formRenderProps.onChange('username', {
      value: 'webapi@demosirketi',
    });
    formRenderProps.onChange('password', {
      value: 'Magnimore123.',
    });
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        render={formRenderProps => (
          <FormElement
            className="w-80 p-4 rounded-xl flex flex-col gap-4 h-[300px] justify-evenly"
            style={{
              border: 'solid 1px #424242',
            }}
          >
            <Button
              onClick={e => handleAutoFill(e, formRenderProps)}
              themeColor="tertiary"
              className=" w-30 mx-auto"
              disabled={!formRenderProps.allowSubmit || auth.loading}
            >
              Click to Auto Fill
            </Button>
            <Field
              name={'username'}
              autoComplete="username"
              validator={usernameValidator}
              component={InputWithError}
              label={'Username'}
            />

            <Field
              name={'password'}
              type="password"
              autoComplete="current-password"
              validator={passwordValidator}
              component={InputWithError}
              label={'Password'}
              minLength={6}
              maxLength={18}
            />
            <div className="flex justify-center flex-col gap-2">
              <Button
                themeColor="info"
                disabled={!formRenderProps.allowSubmit || auth.loading}
              >
                Login
              </Button>
            </div>
          </FormElement>
        )}
      />
    </>
  );
};
