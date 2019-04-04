import React, { Component } from 'react';
import styles from './ImageSlider.scss';
import classNames from 'classnames/bind';
import Slide from './Slide';
import Arrows from './Arrows';

const cx = classNames.bind(styles);

class ImageSlider extends Component {

  state = {
    images: [
      'https://placeimg.com/1400/560/0001',
      'https://placeimg.com/1400/560/0002',
      'https://placeimg.com/1400/560/0003',
      'https://placeimg.com/1400/560/0004',
      'https://placeimg.com/1400/560/0005',
      'https://placeimg.com/1400/560/0006',
      'https://placeimg.com/1400/560/0007'
    ],
    currentIndex: 0,
    translateValue: 0,
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex <= 1 ) {
      return this.setState({ 
        currentIndex : this.state.images.length-1,
        translateValue: -(this.slideWidth()) * (this.state.images.length-1)
      })
    }
    this.setState(nextState => ({
      currentIndex: nextState.currentIndex - 1,
      translateValue: nextState.translateValue + (this.slideWidth())
    }));
  }
  
  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
 }

  render() {
    return (
      <div className={cx('image_slider')}>
        <div className={cx('slider')}
                style={{
                  transform: `translateX(${this.state.translateValue}px)`,
                  transition: 'transform ease-out 0.45s',
                }}
        >
        {
          this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))
        }
        </div>
        <Arrows goToPrevSlide={this.goToPrevSlide} goToNextSlide={this.goToNextSlide}/>

      </div>
    );
  }
}

export default ImageSlider;