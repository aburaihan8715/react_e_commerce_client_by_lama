/* eslint-disable react/prop-types */
import styled from 'styled-components';
import ProductListItem from './ProductListItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/v1/products?categories=${cat}`
            : 'http://localhost:5000/api/v1/products'
        );
        // console.log(res.data.data);
        setProducts(res.data.data);
      } catch (error) {
        // TODO: error should be displayed on ui
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        // NOTE: here
        // 1) Object.entries(filters) return a multidimensional array like [["key","value"],["key","value"]]
        // 2) every() get each inside array [["key","value"]]
        // 3) after destructuring [key,value] = ["key","value"]
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <ProductListItem item={item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <ProductListItem item={item} key={item._id} />)}
    </Container>
  );
};

export default ProductList;
