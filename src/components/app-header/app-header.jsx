import '../../css/app-header.css'
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import {NavigationButton} from '../navigation-button/navigation-button'

export default function AppHeader() {
  return (
    <nav className='navigationPanel' >
      <div className='navigationMenu ml-5 mr-5'>
        <NavigationButton navigationButtonClass='navigationActive mr-2' 
          icon='BurgerIcon' type='primary' Text='Конструктор' />

        <NavigationButton navigationButtonClass='navigationInActive'
          icon='ListIcon' type='secondary' Text='Лента заказов'/>
      </div>

      <div className='logo'><Logo /></div>
            
      <NavigationButton navigationButtonClass='navigationLink ml-5 mr-5'
        icon='ProfileIcon'  type='secondary' Text='Личный кабинет'/>
    </nav>
  );  
};