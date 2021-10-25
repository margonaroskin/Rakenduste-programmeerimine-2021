import ItemList from '../components/ItemList';
import CategoryList from '../components/CategoryList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../mainstyle.css'

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);
  const [loadedCategories, setLoadedCategories] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:8080/items').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data);
      setIsLoading(false);
      setLoadedItems(data);
    });
  },[])

  useEffect(()=>{
    fetch('http://localhost:8080/categories').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data);
      setIsLoading(false);
      setLoadedCategories(data);
    });
  },[])

  if (isLoading) {
    return (<div>Laeb...</div>); 
  }

  return (
    <div>

      <h2>Lisatud esemed</h2>
      <ItemList items={loadedItems} />
      <Link to="add-item">
        <button>Lisa uus ese</button>
      </Link>
      <br />

      <h2>Lisatud kategooriad</h2>
      <CategoryList categories={loadedCategories} />
      <Link to="add-category">
        <button>Lisa uus kategooria</button>
      </Link>
    </div>
  )
}

export default Home;