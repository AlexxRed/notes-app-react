import { useDispatch, useSelector } from 'react-redux';

import { getNotesList, getStatistic, getArchiveList} from '../../redux/notesSlice';
import { Box, Text } from './HomePage.styled'
import { NoteList } from '../../components/NoteList/NoteList.component';


function HomePage() {
    const dispatch = useDispatch();
    const notesList = useSelector(getNotesList);
    console.log(notesList)

    return (
        <Box>
            <Text>Notes</Text>
            <NoteList data={notesList}/>
        </Box>
    )
};

export default HomePage;