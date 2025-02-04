const ProductList = () => {
  const products = [
    { id: 1, name: 'Phone', price: '$699' },
    { id: 2, name: 'Laptop', price: '$1200' },
    { id: 3, name: 'Headphones', price: '$199' },
  ];
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <ul key={product.id}>
          <li>name: {product.name} </li>
          <li>age: {product.price} </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
