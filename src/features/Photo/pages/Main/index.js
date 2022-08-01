import Banner from '../../../../components/Banner';
import Images from '../../../../constants/Images';
import ListPhoto from '../../component/ListPhoto';
import { removePhoto } from '../../photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';

MainPage.propTypes = {};

function MainPage(props) {
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);
    const navigate = useNavigate();
    // console.log('List of photos: ', photos);

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `./edit/${photo.id}`;
        navigate(editPhotoUrl);
    };

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    };

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.BANNER_BG} />

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photo/add">Add new photo</Link>
                </div>

                <ListPhoto
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default MainPage;
