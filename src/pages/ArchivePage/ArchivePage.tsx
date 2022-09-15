import { useSelector } from 'react-redux';
import { Box, Text } from './ArchivePage.styled';
import { getArchiveList } from '../../redux/notesSlice';
import { NoteList } from '../../components/NoteList/NoteList.component';

function ArchivePage() {
    const notesArchive = useSelector(getArchiveList)
    return (
        <Box>
            <Text>Archive</Text>
            <NoteList data={notesArchive} />
        </Box>
        
    )
};

export default ArchivePage;