import { useState } from 'react';
import Header from './components/Header.jsx';
import Counter from './components/Counter.jsx';
import ProductList from './components/ProductList.jsx';
import ProfileCard from './components/ProfileCard.jsx';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app">
      <Header />

      <nav className="nav">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('counter')}>Counter</button>
        <button onClick={() => setPage('products')}>List</button>
        <button onClick={() => setPage('profile')}>Profile</button>
      </nav>

      {page === 'home' && (
        <section className="card">
          <h2>React Practice Home</h2>
          <p>This example shows components, props, useState, list rendering and conditional rendering.</p>
        </section>
      )}

      {page === 'counter' && <Counter />}
      {page === 'products' && <ProductList />}
      {page === 'profile' && (
        <ProfileCard name="Akil Saiyad" course="Web Development" location="Ahmedabad" />
      )}
    </div>
  );
}

export default App;
