import { render, screen } from '@testing-library/react';
import CustomStack from '.';

describe('<CustomStack>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <CustomStack>
        <h1>Hello world</h1>
      </CustomStack>
    );

    expect(screen.getByRole('heading', { name: /hello world/i }));

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="css-g31w50-MuiStack-root"
      >
        <h1>
          Hello world
        </h1>
      </div>
    `);
  });
});
