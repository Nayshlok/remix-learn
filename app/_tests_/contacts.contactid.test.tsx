import {
  render
} from '@testing-library/react';
import { RouteObject, RouterProvider, createMemoryRouter } from 'react-router-dom';
import EditContact from '../components/contacts/editContact';

test('renders loader data', () => {
  const fakeContact = {
    first: 'Paul'
  };
  const routes: RouteObject[] = [
    {
      path: '',
      element: <EditContact contact={fakeContact} />,
    }
  ];
  const router = createMemoryRouter(routes);
  const rendered =  render(
    <RouterProvider router={router} />
  );
  const firstName = rendered.getByRole('textbox', {name: 'First name'});
  expect(firstName).toBeVisible();
  expect((firstName as HTMLInputElement).value).toBe('Paul');
});
