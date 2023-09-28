import React, { useState } from 'react'
import './Dropdown.css'
import { useEffect } from 'react'
import Select from 'react-select'
import { fetchBrand, getbrandSlice } from '../../Slices/DropdownSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, Row, Col, Button } from 'react-bootstrap'


function BrandDropdown() {
    const [selectedOption, setSelectedOption] = useState(null);
    const dispatch = useDispatch()
    const brands = useSelector(getbrandSlice);
    console.log("Brands", brands)

    useEffect(() => {
        dispatch(fetchBrand(getbrandSlice))
    }, [dispatch])

    const options = brands.map((value, key) => ({
        value: key,
        label: value.mtr_brand_name,
    }));
    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className='scrollable-container'>
            <Select
                options={options}
                value={selectedOption}
                onChange={handleSelectChange}
                isSearchable={true}
            />
        </div>)
}

export default BrandDropdown