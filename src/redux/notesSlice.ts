import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { INote } from '../services/types/note.types';


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

    archiveItems: [
        { id: '8', name: 'Personal Task', created: 'September 11, 2022', category: 'Random Thought', content: 'Help my brother', dates: '12/11/2021, 23/12/2022'},
        { id: '9', name: 'Create something', created: 'September 16, 2022', category: 'Task', content: 'clean my flat', dates: '12/11/2021, 13/12/2022' },
    ],
    active: ''

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
        editNote(state, action) {
            state.notesItems = state.notesItems.filter((item) => item.id !== action.payload.id);
            state.notesItems.push(action.payload);
        },
        addToArcchive(state, action) {
            state.archiveItems.push(action.payload);
            state.notesItems = state.notesItems.filter((item) => item.id !== action.payload.id);
        },
        unarchiveNote(state, action) {
            state.notesItems.push(action.payload);
            state.archiveItems = state.archiveItems.filter((item) => item.id !== action.payload.id);
        },
        setActiveNote(state, action) {
            state.active = action.payload
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
    editNote,
    addToArcchive,
    unarchiveNote,
    setActiveNote
} = notesSlice.actions;

interface IState {
    notesItems: INote[] | [];
    archiveItems: INote[] | [];
    active: any;
}

export const getNotesList = ({notes}:{notes: IState}) => notes.notesItems;
export const getArchiveList = ({notes}:{notes: IState}) => notes.archiveItems;
export const getActive = ({notes}:{notes: IState}) => notes.active;

