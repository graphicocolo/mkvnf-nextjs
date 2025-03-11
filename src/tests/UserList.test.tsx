import { render, screen, waitFor } from '@testing-library/react';

import UserList from '@/components/UserList';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ name: 'John Doe' }, { name: 'Jane Doe' }]),
  }),
) as jest.Mock;

describe('UserList component', () => {
  test('displays a list of users after fetching', async () => {
    render(<UserList />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Fetch が完了するのを待機
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });
});
