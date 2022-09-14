import { ErrorMessage } from 'formik';
import { LableForm, Box, InputForm } from './Input.styled';
import { COLORS } from '../../services/theme/colors.const';

interface IInput {
    name: string;
    title?: string;
    type?: 'text' | 'textarea' | 'input' | 'checkbox' | 'password' | 'radio'| 'date';
    placeholder?: string | boolean;
}
const InputField = ({ name, title, type, placeholder }: IInput) => {
    const renderError = (message: string) => <div style={{ color: COLORS.red }}>{message}</div>;

    return (
    <Box>
        <LableForm htmlFor={name}>
            {title ?? name}
            {type === 'text' && <InputForm name={name} placeholder={placeholder} />}
            {type === 'input' && <InputForm name={name} placeholder={placeholder} />}
            {type === 'radio' && <InputForm name={name} placeholder={placeholder} type={type} />}
            {type === 'date' && <InputForm name={name} placeholder={placeholder} type={type} />}    
            {type === 'textarea' && (<InputForm name={name} placeholder={placeholder} rows="5" component={type} />)}
            <ErrorMessage name={name} render={renderError} />
        </LableForm>
        </Box>
    );
};

export default InputField;