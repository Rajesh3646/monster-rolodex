import React from 'react';

export const SearchBox = ({placeholder, changeHandler}) => {
    return (<input type="search" className="search" placeholder={placeholder} onChange= {changeHandler} />);
}