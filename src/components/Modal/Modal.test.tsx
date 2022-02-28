import userEvent from '@testing-library/user-event';

import { screen, render, cleanup } from '@/utils/custom-render';
import * as hooks from '@/hooks/useStore';

import Modal from './Modal';

const modalMock = { modalContent: <div>Modal content</div>, setModalContent: jest.fn() };

jest.spyOn(hooks, 'useStore').mockReturnValue(modalMock);

describe('Modal component', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('should render with content', () => {
    const { baseElement } = render(<Modal />);

    expect(baseElement).toMatchSnapshot();
  });

  test('should hide modal on close button click', () => {
    render(<Modal />);

    const closeButton = screen.getByRole('button');

    userEvent.click(closeButton);

    expect(modalMock.setModalContent).toHaveBeenCalledTimes(1);
    expect(modalMock.setModalContent).toHaveBeenCalledWith(null);
  });
});
