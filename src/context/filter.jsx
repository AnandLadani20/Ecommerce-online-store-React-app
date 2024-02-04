import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import productService from "../service/product.service";

const initialState = {};

const FilterProduct = createContext(initialState);

const FilterWrapper = ({ children }) => {
  const [originalProductDatas, setOriginalProductDatas] = useState([]);
  const [filteredProductDatas, setFilteredProductDatas] = useState([]);
  const [price, setPrice] = useState([]);
  const [colorValue, setColorValue] = useState(null);
  // const [loading, setLoading] = useState(true)

  const fetchAllProduct = useCallback(
    async (categoryName) => {
      try {
        const response = await productService.specifyCategory(categoryName);
        if (response) {
          setOriginalProductDatas(response.data);
          setFilteredProductDatas(response.data);
        }
      } catch (error) {
        alert(error);
      }
    },
    [setOriginalProductDatas]
  );


  const handlePriceFilter = useCallback(
    (priceValues) => {
      setPrice(priceValues);
      applyFilters(priceValues, colorValue);
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setPrice]);

  const handleColorFilter = useCallback(
    (color) => {
      setColorValue(color);
      applyFilters(price, color);
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setColorValue]);

  useEffect(() => {
    console.log(price, colorValue);
    if (price.length === 0 && !colorValue) {
      setFilteredProductDatas(originalProductDatas);
    } else {
      applyFilters(price, colorValue);
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, colorValue]);
  // originalProductDatas

  const applyFilters = (priceValues, color) => {
    const colors = ["#000000", "#0088cc", "#ab6e6e", "#fff", "#777"];
    const filterData = [...originalProductDatas];
    const filteredData = filterData
      .map((product, index) => {
        const productWithColor = {
          ...product,
          color: colors[index % colors.length],
        };
        return productWithColor;
      })
      .filter((curElem) => {
        const priceInRange =
          (!priceValues[0] || curElem.price >= priceValues[0]) &&
          (!priceValues[1] || curElem.price <= priceValues[1]);

        const colorMatch = !color || color.includes(curElem.color);
        return priceInRange && colorMatch;
      });
    setFilteredProductDatas(filteredData);
  };


  return (
    <>
      <FilterProduct.Provider
        value={{
          originalProductDatas,
          filteredProductDatas,
          fetchAllProduct,
          price,
          setPrice,
          handlePriceFilter,
          handleColorFilter,
          setColorValue,
        }}
      >
        {children}
      </FilterProduct.Provider>
    </>
  );
};
export default FilterWrapper;

export const useFilterContext = () => {
  return useContext(FilterProduct);
};
