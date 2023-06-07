import { useState, useEffect } from "react";
import style from './app.module.css';
import Header from '../header/header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';


function App() {
  const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status} description is ${response.statusText}`
          );
        }
        const resJson = await response.json();
        setAllData(resJson.data);
        setError(null);
      } catch(err) {
        setError(err.message);
        setAllData(null);
        //setFilteredData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])
  
  return (
    <div className={style.page}>
      <Header />

      <main className={style.context}>
        {loading && <p>Загружаем данные с сервера, боюсь с вашим интернетом надо будет подождать. Наберитесь терпения и ожидайте окончания загрузки...</p>}
        {error && (<p>{`Упс. Вознилка проблема с получением данных с сервера. Сообщение об ощибке: ${error}`}</p>)}
        {error && (console.log(`feching error - ${error}`))}
        
        {<BurgerIngredients allData={allData} />}

        <BurgerConstructor allData={allData}/>
      </main>
    </div>    
  );
}

export default App;