import userEvent from '@testing-library/user-event';

import { screen, render, waitFor, cleanup } from '@/utils/custom-render';
import * as hooks from '@/hooks/useStore';

import Search from './Search';

const updateSearchTermMock = jest.fn();

jest.spyOn(hooks, 'useStore').mockReturnValue(updateSearchTermMock);

describe('Search component', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('should search button be disabled when the text field is empty', () => {
    render(<Search />);

    const button: HTMLButtonElement = screen.getByRole('button');

    expect(button.value).toBe('');
    expect(button).toBeDisabled();
  });

  test('should search button be enabled when the text field has value', async () => {
    const fieldValue = 'Fight Club';

    render(<Search />);

    const button: HTMLButtonElement = screen.getByRole('button');
    const searchField: HTMLInputElement = screen.getByRole('textbox');

    userEvent.type(searchField, fieldValue);

    await waitFor(() => {
      expect(searchField.value).toBe(fieldValue);
      expect(button).not.toBeDisabled();
    });
  });

  test('should search work on button click', async () => {
    const fieldValue = 'Fight Club';
    render(<Search />);

    const button: HTMLButtonElement = screen.getByRole('button');
    const searchField: HTMLInputElement = screen.getByRole('textbox');

    userEvent.type(searchField, fieldValue);

    await waitFor(() => userEvent.click(button));

    await waitFor(() => {
      expect(updateSearchTermMock).toBeCalledTimes(1);
      expect(updateSearchTermMock).toBeCalledWith(fieldValue);
    });
  });

  test('should search work on enter', async () => {
    const fieldValue = 'Fight Club';
    render(<Search />);

    const searchField: HTMLInputElement = screen.getByRole('textbox');

    userEvent.type(searchField, `${fieldValue}{enter}`);

    await waitFor(() => {
      expect(updateSearchTermMock).toBeCalledTimes(1);
      expect(updateSearchTermMock).toBeCalledWith(fieldValue);
    });
  });
});
