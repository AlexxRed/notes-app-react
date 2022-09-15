import { INote } from '../../services/types/note.types';
import { NoteItem } from '../NoteItem/NoteItem.component';
import { StyledNoteList } from './NoteList.styled';

export const NoteList = ({data}: {data: INote[];}) => (
  <>
    <StyledNoteList>
      {data.map((note: INote) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </StyledNoteList>
  </>
);
