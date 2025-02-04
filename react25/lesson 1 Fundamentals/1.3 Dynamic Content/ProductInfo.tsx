const ProductInfo = () => {
  const product = { name: 'Apple', price: 1000, availability: 'In stock' };
  return (
    <div>
      <hr />
      <h1>Product Info</h1>
      <h1>name: {product.name}</h1>
      <h1>current price: {product.price}</h1>
      <h1>availability: {product.availability}</h1>
    </div>
  );
};

export default ProductInfo;
