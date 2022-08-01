import Banner from '../../../../components/Banner';
import PhotoForm from '../../../Photo/component/PhotoForm';
import { addPhoto, updatePhoto } from '../../photoSlice';
import React from 'react';
import Images from '../../../../constants/Images';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { randomNumber } from '../../../../utils/common';
import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useNavigate();
    const { photoId } = useParams();
    const isAddMode = !photoId;

    const editedPhoto = useSelector((state) => {
        const foundPhoto = state.photos.find((x) => x.id === +photoId);
        console.log({ photos: state.photos, photoId, foundPhoto });
        return foundPhoto;
    });
    console.log({ photoId, editedPhoto });

    const initialValues = isAddMode
        ? {
              title: '',
              categoryId: null,
              photo: '',
          }
        : editedPhoto;

    const handleSubmit = (values) => {
        return new Promise((resolve) => {
            console.log('Form submit: ', values);

            setTimeout(() => {
                if (isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999),
                    };
                    const action = addPhoto(newPhoto);
                    console.log({ action });
                    dispatch(action);
                } else {
                    // Do something here
                    const action = updatePhoto(values);
                    dispatch(action);
                }

                history('/photo');
                resolve(true);
            }, 2000);
        });
    };

    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" backgroundUrl={Images.BANNER_BG} />

            <div className="photo-edit__form">
                <PhotoForm isAddMode={isAddMode} initialValues={initialValues} onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default AddEditPage;
