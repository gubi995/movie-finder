import { Close } from '@mui/icons-material';

import { useStore } from '@/hooks/useStore';

import { CloseButton, ModalContent, StyledModal } from './Modal.styles';

const Modal = () => {
  const { content, setContent } = useStore(({ content, setContent }) => ({ content, setContent }));

  const closeModal = () => setContent(null);

  return (
    <StyledModal open={!!content} onClose={closeModal}>
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <Close />
        </CloseButton>
        {content}
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
