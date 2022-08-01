import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCart';

ListPhoto.propTypes = {
    photoList: PropTypes.array,
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func,
};

ListPhoto.defaultProps = {
    photoList: [],
    onPhotoEditClick: null,
    onPhotoRemoveClick: null,
};

function ListPhoto(props) {
    const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

    return (
        <Row>
            {photoList.map((photo) => (
                <Col key={photo.title} xs="12" md="6" lg="3">
                    <PhotoCard photo={photo} onEditClick={onPhotoEditClick} onRemoveClick={onPhotoRemoveClick} />
                </Col>
            ))}
        </Row>
    );
}

export default ListPhoto;
