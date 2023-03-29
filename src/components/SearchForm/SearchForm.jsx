import { FcSearch } from 'react-icons/fc';
import PropTypes from "prop-types";
import { 
    FormWrap, 
    FormButton, 
    ButtonLabel, 
    FormInput 
} from "./SearchForm.styled";

const SearchForm = ({handleSubmit, handleNameChange, imageName}) => {
    return (
        <FormWrap onSubmit={handleSubmit}>
            <FormButton type="submit">
                <FcSearch width={40} height={40}/>
                <ButtonLabel>Search</ButtonLabel>
            </FormButton>

            <FormInput
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={imageName}
                onChange={handleNameChange}
            />
        </FormWrap>
    )
};

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    imageName: PropTypes.string.isRequired,
}

export default SearchForm;