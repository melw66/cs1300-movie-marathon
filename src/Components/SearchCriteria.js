import React from 'react';
import Form from 'react-bootstrap/Form';
import { BsChevronLeft } from "react-icons/bs";
import '../style/SearchCriteria.css';

// Component that holds all the radio buttons and checkboxes of the filter/sort criteria
export default class SearchCriteria extends React.Component {
    render() {
        // takes in callback functions when the radio buttons / checkboxes change, as well as the state of whether a radio button or checkbox should be selected or not
        const {sortRadioButtonChange, genreCheckboxChange, languageCheckboxChange, setAllLanguages, setAllGenres, languageChecks, genreChecks} = this.props;
        return (
            <div>
                <div className="Search-section">
                    <div className="Search-title">Sort by</div>
                    <Form.Check type="radio" name="sortRadios" label="Rating, High to Low" value="Rating, High to Low" defaultChecked onChange={sortRadioButtonChange}/>
                    <Form.Check type="radio" name="sortRadios" label="Rating, Low to High" value="Rating, Low to High" onChange={sortRadioButtonChange}/>
                    <Form.Check type="radio" name="sortRadios" label="Year, High to Low" value="Year, High to Low" onChange={sortRadioButtonChange}/>
                    <Form.Check type="radio" name="sortRadios" label="Year, Low to High" value="Year, Low to High" onChange={sortRadioButtonChange}/>
                </div>

                <div className="Search-section">
                    <div className="Search-title">Language</div>
                    <div className="Flex-row">
                        <BsChevronLeft />
                        <button onClick={setAllLanguages} className="All-button">All Languages</button>
                    </div>
                    <Form.Check type="checkbox" label="English" value="English" checked={languageChecks["English"]} onChange={languageCheckboxChange}/>
                    <Form.Check type="checkbox" label="Foreign" value="Foreign" checked={languageChecks["Foreign"]} onChange={languageCheckboxChange}/>
                </div>

                <div>   
                    <div className="Search-title">Genre</div>
                    <div className="Flex-row">
                        <BsChevronLeft />
                        <button onClick={setAllGenres} className="All-button">All Genres</button>
                    </div>
                    <Form.Check type="checkbox" label="Action" value="Action" checked={genreChecks["Action"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Adventure" value="Adventure" checked={genreChecks["Adventure"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Animation" value="Animation" checked={genreChecks["Animation"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Biography" value="Biography" checked={genreChecks["Biography"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Comedy" value="Comedy" checked={genreChecks["Comedy"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Drama" value="Drama" checked={genreChecks["Drama"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Horror" value="Horror" checked={genreChecks["Horror"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Music" value="Music" checked={genreChecks["Music"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Mystery" value="Mystery" checked={genreChecks["Mystery"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Romance" value="Romance" checked={genreChecks["Romance"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Sci-Fi" value="Sci-Fi" checked={genreChecks["Sci-Fi"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="Thriller" value="Thriller" checked={genreChecks["Thriller"]} onChange={genreCheckboxChange}/>
                    <Form.Check type="checkbox" label="War" value="War" checked={genreChecks["War"]} onChange={genreCheckboxChange}/>
                </div>
            </div>
        );
    }
}