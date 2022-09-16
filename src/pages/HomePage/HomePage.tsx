import { useSelector } from 'react-redux';

import { getNotesList} from '../../redux/notesSlice';
import { Box, Text } from './HomePage.styled'
import { NoteList } from '../../components/NoteList/NoteList.component';
import { CreateButton } from '../../components/CreateButton/CreateButton.component';


function HomePage() {
    const notesList = useSelector(getNotesList);

    return (
        <Box>
            <Text>Notes</Text>
            <CreateButton/>
            <NoteList data={notesList}/>
        </Box>
    )
};

export default HomePage;