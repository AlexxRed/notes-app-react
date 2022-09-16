import { useDispatch } from 'react-redux';
import { Box } from './CreateNotePage.styled'
import  CreateFormComponent from '../../components/CreateNoteForm/CreateForm.component'
import { INote } from '../../services/types/note.types';
import { addNote } from '../../redux/notesSlice';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';


function CreateNotePage() {
    const dispatch = useDispatch();

    const data = {
        name: '',
        content: '',
        category: '',
    };

    const onSave = (values: INote): void => {
        const newNote = {
        category: values.category,
        name: values.name,
        content: values.content,
        dates: moment(values.dates).subtract(10, 'days').calendar() ,
        created: moment().format('MMMM DD, YYYY'),
        id: uuidv4(),
    };

        dispatch(addNote(newNote))
    }

    return (
        <Box>
            <CreateFormComponent data={ data } onSave={ onSave } title='Create Note' />
        </Box>
    )
};

export default CreateNotePage;