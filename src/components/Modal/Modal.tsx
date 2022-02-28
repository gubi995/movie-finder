import { Close } from '@mui/icons-material';

import { useStore } from '@/hooks/useStore';

import { CloseButton, ModalContent, StyledModal } from './Modal.styles';

const Modal = () => {
  const { modalContent, setModalContent } = useStore(({ modalContent, setModalContent }) => ({
    modalContent,
    setModalContent,
  }));

  const closeModal = () => setModalContent(null);

  return (
    <StyledModal open={!!modalContent} onClose={closeModal}>
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <Close />
        </CloseButton>
        {modalContent}
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
