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
  const [resetFilterState, setResetFilterState] = useState(false);

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

  const applyFilters = useCallback(
    (priceValues, color) => {
      const colors = ["#000000", "#0088cc", "#ab6e6e", "#4e5b7b", "#777"];
      const filterData = [...originalProductDatas];
      const filteredData = filterData
        .map((product, index) => ({
          ...product,
          color: colors[index % colors.length],
        }))
        .filter((curElem) => {
          const priceInRange =
            (!priceValues[0] || curElem.price >= priceValues[0]) &&
            (!priceValues[1] || curElem.price <= priceValues[1]);

          const colorMatch = !color || color.includes(curElem.color);
          return priceInRange && colorMatch;
        });
      setFilteredProductDatas(filteredData);
    },
    [originalProductDatas]
  );

  useEffect(() => {
    console.log(price, colorValue);
    if (price.length === 0 && !colorValue) {
      setFilteredProductDatas(originalProductDatas);
      console.log("original", originalProductDatas);
    } else {
      applyFilters(price, colorValue);
    }
  }, [price, colorValue, originalProductDatas, applyFilters]);

  const handlePriceFilter = useCallback(
    (priceValues) => {
      setPrice(priceValues);
      applyFilters(priceValues, colorValue);
    },
    [setPrice, applyFilters, colorValue]
  );

  const handleColorFilter = useCallback(
    (color) => {
      setColorValue(color);
      applyFilters(price, color);
    },
    [setColorValue, applyFilters, price]
  );

  const clearFilter = useCallback(() => {
    setResetFilterState((prevState) => !prevState);
  }, [setResetFilterState]);

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
          clearFilter,
          resetFilterState,
          setResetFilterState,
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
