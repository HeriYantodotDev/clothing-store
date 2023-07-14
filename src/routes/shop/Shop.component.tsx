import { Routes, Route } from 'react-router-dom';
import './Shop.styles.scss';
import { CategoriesPreview } from '../categoriesPreview/CategoriesPreview.component';
import { Category } from '../category/Category.component';

export function Shop() {


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>

  );
}
