import {useState} from 'react'
import React from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

export const Tabs = (props) => {
    const [current, setCurrent] = useState('Булки')    
    return (
        <>            
            <div className='BurgerIngredientsTabs' style={{display: "flex", justifyContent:'center'}}>
                <Tab value="Булки" active={current === 'Булки'} onClick={()=>{props.Scroling('bun'); setCurrent('Булки');}}>
                    Булки
                </Tab>
                <Tab value="Соус" active={current === 'Соус'} onClick={()=>{props.Scroling('sauce'); setCurrent('Соус');}}>
                    Соус
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={()=>{props.Scroling('main'); setCurrent('Начинки');}}>
                    Начинки
                </Tab>
            </div>
            <p className='IngredientsHeader mt-10 mb-6 text text_type_main-medium'>{current}</p>
        </>
    )
}
Tabs.protoTypes={
    Scroling: PropTypes.func
}