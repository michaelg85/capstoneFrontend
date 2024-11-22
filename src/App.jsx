import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<FilterableTable />} />
        <Route path='/addMovie' element={<CreateForm />} />
        <Route path='/updateMovie/:id' element={<UpdateForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
