import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '@/hooks/useAuth';

const InputWithError = fieldRenderProps => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

export const LoginForm = () => {
  const navigate = useNavigate();

  const auth = useAuth();

  const handleSubmit = async () => {
    // const { data } = await axios.post(
    //   'token',
    //   { grant_type: 'password', ...values },
    //   {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //   },
    // );
    // const data = await fetch('https://test.nakitakisimiz.com/wapi/token', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify({ grant_type: 'password', ...values }),
    // });

    auth.login();

    toast.success('Login succesfull');

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
              className="bg-slate-600 text-white hover:bg-slate-700 w-40 mx-auto"
            >
              Fill Test Credentials
            </Button>
            <Field
              name={'username'}
              validator={usernameValidator}
              component={InputWithError}
              label={'Username'}
            />

            <Field
              name={'password'}
              type="password"
              validator={passwordValidator}
              component={InputWithError}
              label={'Password'}
              minLength={6}
              maxLength={18}
            />
            <div className="flex justify-center flex-col gap-2">
              <Button
                type={'submit'}
                disabled={!formRenderProps.allowSubmit}
                className="bg-slate-600 text-white hover:bg-slate-700"
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
