function ProductList() {
  const items = [
    { id: 1, title: 'HTML Practice' },
    { id: 2, title: 'CSS Practice' },
    { id: 3, title: 'React Practice' }
  ];

  return (
    <section className="card">
      <h2>List Rendering Example</h2>
      <div className="product-grid">
        {items.map((item) => (
          <article className="product-card" key={item.id}>
            <h3>{item.title}</h3>
            <p>This card is rendered using map.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
