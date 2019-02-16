import {connect} from 'react-redux';
import ImageList from '../presentational/ImageList';

// convert object of images to array
const mapImageObjectToArray = obj => Object.keys(obj).map(key => ({ key, ...obj[key]}));

const mapStateToProps = ({images}) => ({images: mapImageObjectToArray(images)});

const SavedImageList = connect(mapStateToProps)(ImageList);

export default SavedImageList;
