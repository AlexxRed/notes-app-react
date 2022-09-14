import { ButtonEdit, ButtonIcon } from './ButtonEdit.styled';

const EditButton = ({ todo }: { todo: object }) => {
  console.log(todo);
  return (
    <ButtonEdit>
      <ButtonIcon />
    </ButtonEdit>
  );
};

export default EditButton;
