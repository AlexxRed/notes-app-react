import { ButtonArchive, ButtonIcon } from './ButtonArchive.styled';

const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <ButtonArchive type="button" onClick={onClick}>
    <ButtonIcon />
  </ButtonArchive>
);

export default DeleteButton;