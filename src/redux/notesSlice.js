import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initialState = {
    notesItems: [
    { id: '1', name: 'Shopping', created: 'September 12, 2022', category: 'Task',  content: 'buy some products', dates: '12/11/2021, 13/12/2022'},
    { id: '2', name: 'write', created: 'September 12, 2022', category: 'Task', content: 'create my notes', dates: '12/11/2021, 23/12/2022' },
    { id: '3', name: 'Hmm', created: 'September 12, 2022', category: 'Random Thought', content: 'Universe is big', dates: '12/11/2021, 23/12/2022' },
    { id: '4', name: 'Personal', created: 'September 12, 2022', category: 'Random Thought', content: 'Learn French', dates: '12/11/2021, 23/12/2022'},
    { id: '5', name: 'Cleaning', created: 'September 12, 2022', category: 'Task', content: 'clean my room', dates: '12/11/2021, 13/12/2022' },
    { id: '6', name: 'Create', created: 'September 12, 2022', category: 'Idea', content: 'create my own app', dates: '12/11/2021, 13/12/2022' },
    { id: '7', name: 'Stop', created: 'September 12, 2022', category: 'Idea',  content: 'do not watch movies', dates: '12/11/2021, 13/12/2022'},
    ],

    archiveItems: [],

    statistic: {
        totalIdeas: 0,
        totalArciveIdeas: 0,
        totalTasks: 0,
        totalArciveTasks: 0,
        totalThought: 0,
        totalArciveThought: 0,
    }
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action) {
            state.notesItems.push(action.payload);
        },
        removeNote(state, action) {
            state.notesItems = state.notesItems.filter(
            ({ id }) => id !== action.payload
            );
        },
        filterNote(state, action) {
            state.notesItems.filter((item) => item.id !== action.payload);
        },
        allStatistic(state) {
            state.statistic.totalIdeas = state.notesItems.filter(item => item.category === "Idea").length || 0
            state.statistictotalArciveIdeas = state.archiveItems.filter(item => item.category === "Idea").length || 0

            state.statistictotalTasks = state.notesItems.filter(item => item.category === "Task").length || 0
            state.statistictotalArciveTasks = state.archiveItems.filter(item => item.category === "Task").length || 0

            state.statistictotalThought = state.notesItems.filter(item => item.category === "Random Thought").length || 0
            state.statistictotalArciveThought = state.archiveItems.filter(item => item.category === "Random Thought").length || 0
        },
        editNote(state, action) {
            state.notesItems = state.notesItems.filter((item) => item.id !== action.payload.id);
            state.notesItems = state.notesItems.push(action.payload);
        },
        addToArcchive(state, action) {
            state.archiveItems.push(action.payload);
            state.notesItems = state.notesItems.filter((item) => item.id !== action.payload.id);
        },
        unarchiveNote(state, action) {
            state.notesItems.push(action.payload);
            state.archiveItems = state.archiveItems.filter((item) => item.id !== action.payload.id);
        }

    }
});

const persistConfig = {
    key: 'notes',
    storage,
};
export const notesReducer = persistReducer(
    persistConfig,
    notesSlice.reducer
);

export const {
    addNote,
    removeNote,
    filterNote,
    allStatistic,
    editNote,
    addToArcchive,
    unarchiveNote
} = notesSlice.actions;

export const getNotesList = state => state.notes.notesItems;
export const getArchiveList = state => state.notes.archiveItems;
export const getStatistic = state => state.notes.statistic


    //     [
    //     {
    //         category: 'Idea',
    //         active: 0,
    //         archived: 0
    //     },
    //     {
    //         category: 'Task',
    //         active: 0,
    //         archived: 0
    //     },
    //     {
    //         category: 'Random Thought',
    //         active: 0,
    //         archived: 0
    //     }
    // ]