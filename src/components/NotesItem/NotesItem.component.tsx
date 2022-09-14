import { Link } from 'react-router-dom';
import { INote } from '../../services/types/note.types';
import { ItemContainer, ItemHeader, ItemInfo, ButtonBox } from './NotesItem.styled';
import DeleteButton from '../ButtonDelete/ButtonDelete.component';
import EditButton from '../ButtonEdit/ButtonEdit.component';

export const TodoItem = ({ note }: { note: INote }) => {

    return (
        <ItemContainer>
        <ItemHeader>
            {`${note.name} ${note.created}`}
            <ButtonBox>
            <Link to={`/${note.id}`}>
                <EditButton todo={note} />
            </Link>
            <DeleteButton onClick={() => console.log('delete')} />
            </ButtonBox>
        </ItemHeader>
        <ItemInfo>{note.content}</ItemInfo>
        <ItemInfo>{note.category ? 'Completed, ' : 'Not completed, '}</ItemInfo>
        <ItemInfo>{note.dates && `${note.dates}`}</ItemInfo>
        </ItemContainer>
    );
};