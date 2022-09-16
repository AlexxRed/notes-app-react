import { useDispatch, useSelector } from 'react-redux';
import { Box } from './EditPage.styled'
import  CreateFormComponent from '../../components/CreateNoteForm/CreateForm.component'
import { INote } from '../../services/types/note.types';
import { editNote, getActive, setActiveNote } from '../../redux/notesSlice';


function EditPage() {
    const dispatch = useDispatch();
    const data = useSelector(getActive)


    const onSave = (values: INote): void => {
        dispatch(editNote(values));
        dispatch(setActiveNote(''));
    }

    return (
        <Box>
            <CreateFormComponent data={ data } onSave={ onSave } title='Edit Note' />
        </Box>
    )
};

export default EditPage;