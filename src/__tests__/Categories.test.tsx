import { render, screen } from '@testing-library/react';
import { CategoryItem } from '../components/CategoryItem/CategoryItem.component';

import { Directory } from '../components/Directory/Directory.component';

import {
  defaultCTA,
  defaultCategories,
} from '../components/CategoryItem/defaultValue';

const categoryListCustom = [
  { id: 1, title: 'John', imageUrl: 'adsf' },
  { id: 2, title: 'Doe', imageUrl: 'adsf' },
  { id: 3, title: 'Great', imageUrl: 'adsf' },
];

const ctaCustom = 'Shop Now';

describe('Category Component', () => {
  const title = categoryListCustom[0].title;
  const imageUrl = categoryListCustom[0].imageUrl;

  beforeEach(() => {
    render(<CategoryItem title={title} cta={ctaCustom} imageUrl={imageUrl} />);
  });

  test('renders the title', () => {
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the cta', () => {
    const craElement = screen.getByText(ctaCustom);
    expect(craElement).toBeInTheDocument();
  });

  test('renders the imageUrl', () => {
    const imageElement = screen.getByTestId('category');
    const backgroundImage = imageElement.querySelector('.background-image');
    expect(backgroundImage).toHaveStyle(`backgroundImage: url(${imageUrl})`);
  });

});

describe('Categories Component With Argument', () => {
  beforeEach(() => {
    render(<Directory categoryList={categoryListCustom} cta={ctaCustom} />);
  });

  test('renders the correct number of category when accepting argument', () => {
    const categoryElements = screen.getAllByTestId('category');
    expect(categoryElements.length).toBe(categoryListCustom.length);
  });

  test('renders the correct title name & cta when accepting argument', () => {
    const categoryElements = screen.getAllByTestId('category');
    categoryElements.forEach((category, index) => {
      expect(category).toHaveTextContent(categoryListCustom[index].title);
      expect(category).toHaveTextContent(ctaCustom);
    });
  });

  test('renders the correct imageUrl when accepting argument', () => {
    const categoryElements = screen.getAllByTestId('category');
    categoryElements.forEach((category, index) => {
      const backgroundImage = category.querySelector('.background-image');
      expect(backgroundImage).toHaveStyle(`backgroundImage: url(${categoryListCustom[index].imageUrl})`);
    });
  });

});

describe('Categories Component Without Argument', () => {
  beforeEach(() => {
    render(<Directory />);
  });

  test('renders the correct number of default category', () => {
    const categoryElements = screen.getAllByTestId('category');
    expect(categoryElements.length).toBe(defaultCategories.length);
  });

  test('renders the correct default title  & cta', () => {
    const categoryElements = screen.getAllByTestId('category');
    categoryElements.forEach((category, index) => {
      expect(category).toHaveTextContent(defaultCategories[index].title);
      expect(category).toHaveTextContent(defaultCTA);
    });
  });

  test('renders the correct default imageUrl', () => {
    const categoryElements = screen.getAllByTestId('category');

    categoryElements.forEach((category, index) => {
      const backgroundImage = category.querySelector('.background-image');
      expect(backgroundImage).toHaveStyle(`backgroundImage: url(${defaultCategories[index].imageUrl})`);
    });
  });

});

