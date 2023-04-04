import cn from 'classnames';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {ForgotPasswordForm} from '../../components/secure/forgot-password-form/forgot-password-form';
import forgotPageStyles from './forgot-password.module.css';

export const ForgotPasswordPage = () => {
  return (
      <section className={forgotPageStyles.page}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <ForgotPasswordForm/>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</span>
          <Button extraClass={cn(forgotPageStyles.button, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Войти
          </Button>
        </div>
      </section>
  )
}
