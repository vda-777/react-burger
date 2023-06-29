import { useState, useMemo} from 'react';
import {Tabs} from '../burger-ingredients-tabs/burger-ingredients-tabs';
import style from './burger-ingredients.module.css';
import {useSelector, shallowEqual} from 'react-redux';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

export default function BurgerIngredients() {
  const { burgerIngredients } = useSelector((store) => ({
    burgerIngredients: store.burgerIngredients.burgerIngredients
  }), shallowEqual);

  const [activeTab, setActiveTab] = useState('bun');

  const Filtered = useMemo(() => {
    if (activeTab === 'buns') {
      return burgerIngredients.filter((item) => item.type === 'bun');
    } else {
      return burgerIngredients.filter((item) => item.type === activeTab);
    }
  }, [activeTab, burgerIngredients]);

  const content = useMemo(() => {
    return Filtered.map((item) => {
      return <BurgerIngredient key={item._id} {...item} />;
    });
  }, [Filtered]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={style.BurgerIngredients + ' mr-5'}>
      <span className={style.BurgerIngredientsTitle + ' mt-10 mb-5 text text_type_main-large'}>
        Собери бургер
      </span>
      <Tabs activeTab={activeTab} clickTab={handleTabClick} />
      <div className={style.BurgerIngredientsElements + ' custom-scroll ml-4 mr-4'}>{content}</div>
    </section>
  );
}