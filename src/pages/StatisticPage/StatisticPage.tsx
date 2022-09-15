import { useSelector } from 'react-redux';
import { Box, Text } from './StatisticPage.styled';
import { StatisticList } from '../../components/StatisticList/StatisticList.component';
import { getNotesList, getArchiveList } from '../../redux/notesSlice';
import { INote } from '../../services/types/note.types';
import { IStatistic } from '../../services/types/statistic.type';



function StatisticPage() {
    const notesList = useSelector(getNotesList);
    const archiveList = useSelector(getArchiveList);

        const totalIdeas = notesList.filter((item: INote) => item.category === "Idea").length
    const totalArciveIdeas = archiveList.filter((item: INote) => item.category === "Idea").length

    const totalTasks = notesList.filter((item: INote) => item.category === "Task").length
    const totalArciveTasks = archiveList.filter((item: INote) => item.category === "Task").length

    const totalThought = notesList.filter((item: INote)=> item.category === "Random Thought").length
    const totalArciveThought = archiveList.filter((item: INote) => item.category === "Random Thought").length    
    
    const statistic : IStatistic[] = [
        {
            category: 'Idea',
            active: totalIdeas,
            archived: totalArciveIdeas
        },
        {
            category: 'Task',
            active: totalTasks,
            archived: totalArciveTasks
        },
        {
            category: 'Random Thought',
            active: totalThought,
            archived: totalArciveThought
        }
    ];

    return (
        <Box>
            <Text>Statistic</Text>
            <StatisticList data={statistic}/>
        </Box>
        
    )
};

export default StatisticPage;