import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import style from './burger-ingredients-tabs.module.css'


export const Tabs = (props) => {
    return (
        <>            
            <div className={style.BurgerIngredientsTabs}>
                <Tab value="Булки" active={props.activeTab === 'bun'} onClick={()=>{props.clickTab('bun');}}>
                    Булки
                </Tab>
                <Tab value="Соус" active={props.activeTab === 'sauce'} onClick={()=>{props.clickTab('sauce');}}>
                    Соус
                </Tab>
                <Tab value="Начинки" active={props.activeTab === 'main'} onClick={()=>{props.clickTab('main');}}>
                    Начинки
                </Tab>
            </div>
            <span className='mt-10 mb-6 text text_type_main-medium'>{props.activeTab}</span>
        </>
    )
}
Tabs.protoTypes={
    TabClick: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired
}