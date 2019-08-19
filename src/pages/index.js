import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.png'
import thumb03 from '../assets/images/thumbs/03.png'

const DEFAULT_IMAGES = [
    { id: '1', 
        thumbnail: thumb01, 
        caption: 'Average Site Colour', 
        description: 'Crawls a website for all images and calculates total average color! ', 
        uses: '{Python, Javascript, NodeJs, Pillow}', 
        href: 'https://average-site-color.glitch.me/' },
    { id: '2', 
        thumbnail: thumb02, 
        caption: 'Calorie Queen', 
        description: 'Calorie tracking CRUD app! ', 
        uses: '{Javascript, SQLite, Express}', 
        href: 'https://calorie-queen.glitch.me/'
     },
     { id: '3', 
        thumbnail: thumb03, 
        caption: 'Portfolio', 
        description: "This is it. You're seein' it buddy. ", 
        uses: '{React, Gatsby}', 
        href: 'https://madeline.codes/'
     }
];

class HomeIndex extends React.Component {

    constructor() {
        super();
        this.state = {
            currentImage: 0,
        };
    }

    render() {
        const siteTitle = "Madeline Healey"
        const siteDescription = "My portfolio"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="main">
                    <section id="one">
                        {/* <header className="major"></header> */}
                        <div>
                            <p> I'm a self-taught web developer with a B.A. in English and Creative Writing (with First Class Honors). </p>
                            <p> I love building things! If I get to build them with JavaScript or Python then even better! </p>
                            <p> You may have met me at a tech meetup such as:</p>
                            <ul>
                                <li><a href="https://www.womenwhocode.com/">Women Who Code</a></li>
                                <li><a href="https://www.pyladies.com/">Pyladies</a></li>
                                <li><a href="https://www.meetup.com/Edinburgh-Women-in-Technology-Meetup/">Women in Technology</a></li>
                            </ul>
                            <p>I was born in Brooklyn, NY and raised in Dallas, TX. I've been in London for half a decade.</p>
                            <p>I'm currently on the search for a team that has a Madeline-shaped hole!</p>
                        </div>
                    </section>

                    <section id="two">
                        <h1>Projects</h1>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, thumbnail, caption, description, href, uses }) => ({
                            thumbnail,
                            caption,
                            description,
                            href,
                            uses
                        }))} />
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex