import { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';
// import { useHistory } from 'react-router-dom';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Box, CreateNote, FormTitle, FormButton } from './CreateForm.styled';
import InputField from '../Input/Input.component';
import createdNoteValidation from '../../services/consts/validation/createdNoteValidation';
import { INote } from '../../services/types/note.types';
// import { ROUTER_KEYS } from '../../consts/app-keys.const';

interface IProps {
    data: INote;
    onSave: (item: INote) => void;
    title: string;
}

const CreateTodoFormComponent: FC<IProps> = ({ data, onSave, title }) => {
//   const history = useHistory();

    const handleSubmit = (values: INote, { resetForm }: FormikHelpers<INote>) => {
    onSave(values);
    resetForm();
    // history.push(`${ROUTER_KEYS.ROOT}`);
    };

    return (
    <Box>
        <FormTitle>{title}</FormTitle>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
                validationSchema={createdNoteValidation}>
                
            <CreateNote autoComplete="off">
            <InputField name="name" title="Name" type="text" />
            <InputField name="content" title="Description" type="textarea" />
            <InputField name="date" title="Year" type="date" />
            <InputField name="public" title="Public" type="checkbox" />
            <InputField name="completed" title="Completed" type="checkbox" />
            {title === 'Create new Note' ? (
                <FormButton type="submit">Create</FormButton>
            ) : (
                <FormButton type="submit">Edit</FormButton>
            )}
            </CreateNote>
        </Formik>
        </Box>
    );
};

export default CreateTodoFormComponent;