import style from'./header.module.css'
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import {NavigationButton} from '../navigation-button/navigation-button'

export default function Header() {
  return (
    <header className={style.navigationPanel} >
      <nav className={style.navigationMenu + ' ml-5'}>
        <NavigationButton 
          navigationButtonClass='mr-1'
          icon='BurgerIcon'
          type='primary'
          Text='Конструктор'/>

        <NavigationButton
          navigationButtonClass='ml-1'
          icon='ListIcon'
          type='secondary'
          Text='Лента заказов'/>
      </nav>

      <Logo />
            
      <NavigationButton 
        navigationButtonClass='mr-5'
        icon='ProfileIcon'
        type='secondary'
        Text='Личный кабинет'/>
    </header>
  );  
};