import React from 'react'

import Footer from './Footer'
import avatar01 from '../assets/images/avatars/avatar01.jpg'
import avatar02 from '../assets/images/avatars/avatar02.jpg'
import avatar03 from '../assets/images/avatars/avatar03.jpg'
import avatar04 from '../assets/images/avatars/avatar04.jpg'
import avatar05 from '../assets/images/avatars/avatar05.jpg'
import avatar06 from '../assets/images/avatars/avatar06.jpg'
import avatar07 from '../assets/images/avatars/avatar07.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatars: [avatar01, avatar02, avatar03, avatar04,
                avatar05, avatar06, avatar07],
            curAvatar: 0
        }
    }

    scrollImage() {
        this.setState({
            curAvatar: (this.state.curAvatar + 1) % this.state.avatars.length
        })
    }

    componentDidMount() {
        this._timer = setInterval(this.scrollImage.bind(this), 3000);
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    render() {
        const { avatars, curAvatar } = this.state;
        const avatar = avatars[curAvatar];

        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>Hey, I'm <strong>Madeline</strong>, welcome. <br />
                        Have a browse and <br />
                        get in <a href="madelinemhealey@gmail.com">touch</a>.</h1>
                </div>
                <Footer />
                <div id="bgLocation">
                <p className="icon fas fa-map-marker"> Forest in Kent's Knole Park</p> 
                </div>
            </header>
        )
    }
}
export default Header
