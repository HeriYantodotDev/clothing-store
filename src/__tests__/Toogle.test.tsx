import { render, screen, fireEvent } from '@testing-library/react';
import { Toogle } from '../Toogle';

describe('<Toggle />', () => {
  it('renders OFF by default', () => {
    render(<Toogle />);
    expect(screen.getByText(/OFF/)).toBeInTheDocument();
  });

  it('should render ON when clicked', () => {
    render(<Toogle />);
    fireEvent.click(screen.getByText(/OFF/));
    expect(screen.getByText(/ON/)).toBeInTheDocument();
  });
});