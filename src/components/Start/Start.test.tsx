import { render, screen } from '@testing-library/react';
import Start from '.';

describe('<Start />', () => {
  it('should render correctly', () => {
    render(<Start />);

    expect(
      screen.getByRole('heading', { name: /WA Project Quiz/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/How many questions do you want to answer?/i)
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
  });

  it('should have a numeric input', () => {
    render(<Start />);
    const input = screen.getByLabelText(/number of questions/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('inputMode', 'numeric');
  });
});
