import { ButtonEdit, ButtonIcon } from './ButtonEdit.styled';

const EditButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <ButtonEdit>
      <ButtonIcon />
    </ButtonEdit>
  );
};

export default EditButton;
