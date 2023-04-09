import React from 'react';
//import logo from './logo.svg';
import '../css/App.css';
import { Logo, ProfileIcon, BurgerIcon, ListIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

export function AppHeader() {
  return (
    <nav className='navigationPanel '>
        <div className='content'>
            <div className='navigationMenu'>
                <div className='navigationActive'>
                    <div className='icon24x24'>
                        <div className='vector'>
                            <BurgerIcon type="primary" />
                        </div>
                    </div>
                    <div className='name'>
                        <p className='textActive'>Конструктор</p>
                    </div>
                </div>                
                <div className='navigationInActive'>
                    <div className='icon24x24'>
                        <div className='vector'>
                            <ListIcon type="secondary" />
                        </div>
                    </div>
                    <div className='name'>
                        <p className='text'>Конструктор</p>
                    </div>
                </div>
            </div>

            <div className='logo'><Logo /></div>
            
            <div className='navigationLink'>
                <div className='icon24x24'>
                    <div className='vector'>
                        <ProfileIcon type="secondary" />
                    </div>
                </div>
                <div className='name'>
                    <p className='text'>Личный кабинет</p>
                    <Button htmlType="button" type="secondary" size="small">Нажми</Button>
                </div>
            </div>


        </div>
    </nav>
  );
};

//export default AppHeader;