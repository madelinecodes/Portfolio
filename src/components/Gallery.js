import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            currentImage: 0,
        };
    }
    renderGallery() {
        const { images } = this.props;
        let width = window.screen.width;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            const order = [
                <a
                    className="image fit thumb"
                    href= {obj.href}
                >
                    <img src={obj.thumbnail} />
                </a>,
                <div >
                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                    <span className="uses">{obj.uses}</span>
                </div>
            ];
            if (i % 2 !== 0) {
                order.reverse();
            }
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    {order}
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.renderGallery()}
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;