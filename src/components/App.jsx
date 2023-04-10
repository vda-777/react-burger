import { useState, useEffect } from "react"
import AppHeader from './app-header/app-header'
import {BurgerIngredients} from './burger-ingredients/burger-ingredients'
import {BurgerConstructor} from './burger-constructor/burger-constructor'


function App() {
  const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);  
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
        let resJson = await response.json();
        setAllData(resJson.data);
        setFilteredData(resJson.data);
        //if(allData.count > 0) {setFilteredData(allData.filter((data) => data.type.includes('bun')));}
        //else {setFilteredData(allData);}
  
        setError(null);
      } catch(err) {
        setError(err.message);
        setAllData(null);
        setFilteredData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])
  
  return (
    <>
      <AppHeader />

      <div className='context' style={{display: 'flex', justifyContent: 'center', maxHeight: '87vh', minHeight: '87vh'}}>
        {loading && <p>Загружаем данные с сервера, боюсь с вашим интернетом надо будет подождать. Наберитесь терпения и ожидайте окончания загрузки...</p>}
        {error && (<p>{`Упс. Вознилка проблема с получением данных с сервера. Сообщение об ощибке: ${error}`}</p>)}
        {error && (console.log(`feching error - ${error}`))}
        
        {<BurgerIngredients setFilteredData={setFilteredData} filteredData={filteredData} allData={allData} />}

        <BurgerConstructor allData={allData}/>
      </div>
    </>
  );
}

export default App;