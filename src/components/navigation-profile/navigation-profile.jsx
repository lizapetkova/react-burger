import cn from 'classnames';
import {NavLink} from 'react-router-dom';
import navProfileStyles from './navigation-profile.module.css';

export const NavigationProfile = () => {

  return (
      <nav className={navProfileStyles.nav} aria-label='Личный кабинет пользователя'>
        <NavLink className={navProfileStyles.link}
                 end={true}
                 to='/profile'>
          <span className='text text_type_main-medium'>Профиль</span>
        </NavLink>
        <NavLink className={navProfileStyles.link}
                 end={true}
                 to='/profile/orders'>
          <span className='text text_type_main-medium'>История заказов</span>
        </NavLink>
        <NavLink className={navProfileStyles.link}
                 to='/login'>
          <span className='text text_type_main-medium'>Выход</span>
        </NavLink>
        <span className={cn(navProfileStyles.info, 'text text_type_main-default text_color_inactive mt-20')}>
            В этом разделе вы можете<br></br>изменить свои персональные данные
          </span>
      </nav>
  )
}
