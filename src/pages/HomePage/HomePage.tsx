import { useSelector } from 'react-redux';

import { getNotesList} from '../../redux/notesSlice';
import { Box, Text } from './HomePage.styled'
import { NoteList } from '../../components/NoteList/NoteList.component';


function HomePage() {
    const notesList = useSelector(getNotesList);

    return (
        <Box>
            <Text>Notes</Text>
            <NoteList data={notesList}/>
        </Box>
    )
};

export default HomePage;