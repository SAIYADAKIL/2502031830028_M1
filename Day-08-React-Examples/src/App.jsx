import { useState } from 'react';
import Header from './components/Header.jsx';
import Counter from './components/Counter.jsx';
import ProductList from './components/ProductList.jsx';
import StudentCard from './components/StudentCard.jsx';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app">
      <Header />

      <nav className="nav">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('counter')}>Counter</button>
        <button onClick={() => setPage('products')}>Products</button>
        <button onClick={() => setPage('student')}>Student</button>
      </nav>

      {page === 'home' && (
        <section className="card">
          <h2>React Practice Home</h2>
          <p>This example shows components, props, useState, list rendering and conditional rendering.</p>
        </section>
      )}

      {page === 'counter' && <Counter />}
      {page === 'products' && <ProductList />}
      {page === 'student' && (
        <StudentCard name="Akil Saiyad" course="Web Development" city="Ahmedabad" />
      )}
    </div>
  );
}

export default App;
