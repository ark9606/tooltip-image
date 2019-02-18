import React, {PureComponent} from 'react';
import styles from './image_form.module.scss';

export default class ImageInput extends PureComponent {
  constructor(props) {
    super(props);

    this.imageInput = React.createRef();
    this.fileReader = new FileReader();
  }

  componentDidMount() {
    this.fileReader.onloadend = () => this.props.handleInput({
      src: this.fileReader.result,
      size: this.fileSizeMB
    });
  }

  handleClick = (e) => {
    this.imageInput.current.click();
  }

  handleImageChange = (e) => {
    const file = this.imageInput.current.files[0];
    this.fileSizeMB = file.size / 1024 ** 2;
    // console.log(fileSizeMB);
    
    if (file) {
      this.fileReader.readAsDataURL(file);
    } else {
      this.props.handleInput('image', '')
    }
  }

  render() {
    const { image } = this.props;
    const backgroundImage = `url(${image})`;

    const classes = [styles.input_image, image === '' ? styles.input_image_empty : ''].join(' ');
    return (
      <div  className={classes} 
            onClick={this.handleClick} style={{backgroundImage}}>
        <input  type='file' ref={this.imageInput} accept="image/*"
                onChange={this.handleImageChange} hidden/>        
      </div>
    );
  }
}