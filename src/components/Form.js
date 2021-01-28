import React from 'react';


const Form = ({inputCity, setInputCity, findCity, setFindCity}) => {

    const onChangeHandler = (e) => {
        setInputCity(e.target.value);
    };

    const findCityHandler = (e) => {
        e.preventDefault();
        setFindCity({
            value: inputCity,
            date: '',
            city: '',
            sunrise: '',
            sunset: '',
            temp: '',
            pressure: '',
            wind: '',
            err: ''
        });
        console.log(findCity.value);
        setInputCity('');
    }

    return(
        <form onSubmit={findCityHandler}>
            <input placeholder="Type city to find..." type="text" onChange={onChangeHandler} value={inputCity}></input>
            <button type="submit">Find city</button>
        </form>
    );

};

export default Form;