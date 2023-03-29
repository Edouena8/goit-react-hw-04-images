import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';
import SearchForm from "components/SearchForm";
import { SearchHeader } from "./Searchbar.styled";

export default function Searchbar({onSubmit}) {
    const [imageName, setImageName] = useState('');
 
    const handleNameChange = evt => {
        setImageName(evt.currentTarget.value.toLowerCase());
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        if(!imageName.trim()) {
            toast.error('Enter name of the pictures.');
            return;
        }

        onSubmit(imageName);
        setImageName('');
    };

    return (
        <SearchHeader>
            <SearchForm 
                handleSubmit={handleSubmit} 
                handleNameChange={handleNameChange}
                imageName={imageName}
            />
        </SearchHeader>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};