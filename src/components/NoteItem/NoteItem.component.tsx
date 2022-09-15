import { useDispatch, useSelector } from 'react-redux';
import { INote } from '../../services/types/note.types';
import {
    ItemContainer,
    ItemHeader,
    ItemInfo,
    ButtonBox,
    ItemName,
    ItemCreated,
    IdeaIcon,
    ThoughtIcon,
    TasksIcon,
    Wrapper
} from './NoteItem.styled';
import DeleteButton from '../ButtonDelete/ButtonDelete.component';
import EditButton from '../ButtonEdit/ButtonEdit.component';
import ButtonArchive from '../ButtonArchive/ButtonArchive.component';
import  ButtonUnarchive  from '../ButtonUnarchive/ButtonUnarchive.component';
import { getArchiveList } from '../../redux/notesSlice';
import { removeNote, addToArcchive, unarchiveNote } from '../../redux/notesSlice';


export const NoteItem = ({ note }: { note: INote }) => {
    const notesArchive = useSelector(getArchiveList)
    const dispatch = useDispatch();

    const deleteNote = (id: string) => {
        dispatch(removeNote(id))
    };

    const pushToArchive = (note: INote) => {
        dispatch(addToArcchive(note))
    }

    const unArchiveNote = (note: INote) => {
        dispatch(unarchiveNote(note))
    }

    const isArchive = notesArchive.find((item: INote) => item.id === note.id)

    return (
        <ItemContainer>
            <ItemHeader>
                <Wrapper>
                    {note.category === 'Idea' && <IdeaIcon />}
                    {note.category === 'Task' && <TasksIcon />}
                    {note.category === 'Random Thought' && <ThoughtIcon/>}
                    <ItemName>{note.name}</ItemName>
                </Wrapper>
                <ItemCreated>{note.created}</ItemCreated>
            
                <ButtonBox>
                    {isArchive && <ButtonUnarchive onClick={() => unArchiveNote(note)} />}
                    {!isArchive && (
                        <>
                    <EditButton onClick={()=> console.log('edit') } />
                    <ButtonArchive onClick={() => pushToArchive(note)}/>    
                    <DeleteButton onClick={() => deleteNote(note.id)} />
                        </>)}
                </ButtonBox>

            </ItemHeader>
            <ItemInfo>{note.content}</ItemInfo>
            <ItemInfo>{note.category}</ItemInfo>
            <ItemInfo>{note.dates && `${note.dates}`}</ItemInfo>
        </ItemContainer>
    );
};