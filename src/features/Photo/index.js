import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEdit from './pages/AddEdit';
import MainPage from './pages/Main';

Photo.propTypes = {};

function Photo(props) {
    return (
        <Routes>
            <Route exact path={`/`} element={<MainPage></MainPage>} />

            <Route exact path={`/add`} element={<AddEdit></AddEdit>} />
            <Route path={`/edit/:photoId`} element={<AddEdit></AddEdit>} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Photo;
