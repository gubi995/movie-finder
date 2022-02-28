import styled from '@emotion/styled';
import { Modal, ButtonBase } from '@mui/material';

import { BACKGROUND } from '@/styles/linear-gradients';

export const StyledModal = styled(Modal)`
  display: grid;
  place-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  max-width: min(50vw, 700px);
  min-width: 250px;
  max-height: 80vh;
  background-color: white;
  border-radius: 3px;
  padding: 3rem;
`;

export const CloseButton = styled(ButtonBase)`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(20%, -20%);
  background: ${BACKGROUND};
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
