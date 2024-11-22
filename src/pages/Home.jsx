import { useState, useEffect } from 'react';
import Form from '../components/form';
import MovieDisplay from '../components/MovieDiplay';
import { getMovies } from '../utilities/controller.mjs'


function Home() {
    const [movies, setmovies] = useState(null);
    const [formData, setFormData] = useState({
      searchParams: '',
      inStock: false,
    });
  
    async function getData() {
      let res = await getMovies();
      let newArr = res.sort((a, b) => a.category.localeCompare(b.category));
      setInventory(newArr);
    }
  
    useEffect(()=>{
      getData()
    }, [])


return (
    <>
      <SearchBar formData={formData} setFormData={setFormData} />
      {inventory ? (
        <Form
          searchParams={formData.searchParams}
          inStock={formData.inStock}
          produce={inventory}
          setInventory={setInventory}
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}



export default Home;
