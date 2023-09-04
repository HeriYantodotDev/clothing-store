import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Shop.styles.scss';
import CategoriesPreview from '../categoriesPreview/CategoriesPreview.component';
import Category from '../category/Category.component';
import { getCategoriesAndDocuments } from '../../services/firebase/db/categories.db';
import { setCategories } from '../../store/category/category.action';

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const categoriesData = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesData));
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
