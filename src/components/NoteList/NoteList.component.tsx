import { INote } from '../../services/types/note.types';
import { NoteItem } from '../NoteItem/NoteItem.component';
import { StyledTodoList } from './NoteList.styled';

export const TodoList = ({data}: {data: INote[];}) => (
  <>
    <StyledTodoList>
      {data.map((note: INote) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </StyledTodoList>

  </>
);
