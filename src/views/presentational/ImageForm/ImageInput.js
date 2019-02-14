import React, {Component} from 'react';
import styles from './image_form.module.scss';

export default class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    };
    this.imageInput = React.createRef();
    this.fileReader = new FileReader();
  }

  componentDidMount() {
    this.fileReader.onloadend = () => this.setState({src: this.fileReader.result});
  }

  handleClick = (e) => {
    this.imageInput.current.click();
  }

  handleImageChange = (e) => {
    const file = this.imageInput.current.files[0];
    if (file) {
      this.fileReader.readAsDataURL(file);
    } else {
      this.setState({src: ''});
    }
  }

  render() {
    const { src } = this.state;
    const backgroundImage = `url(${src})`;

    const classes = [styles.input_image, src === '' ? styles.input_image_empty : ''].join(' ');
    return (
      <div  className={classes} 
            onClick={this.handleClick} style={{backgroundImage}}>
        <input  type='file' ref={this.imageInput} accept="image/*"
                onChange={this.handleImageChange} hidden/>        
      </div>
    );
  }
}