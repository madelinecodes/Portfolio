import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'

const DEFAULT_IMAGES = [
    { id: '1', 
        thumbnail: thumb01, 
        caption: 'Average Site Colour', 
        description: 'This crawls all the images on a website and returns the average RGB colour.', 
        uses: '{Python, Javascript, NodeJs, Pillow}', 
        href: 'https://average-site-color.glitch.me/' },
    { id: '2', 
        thumbnail: thumb02, 
        caption: 'Plant Tracker', 
        description: 'Hey this site uses Reactjs to track your watering/fertilizing schedule for your plants. Set reminders and view plant info.', 
        uses: '{Javascript, React}', 
        href: 'https://madeline.codes/' },
    { id: '3', 
        thumbnail: thumb03, 
        caption: 'Calorie Queen', 
        description: 'This puppy right here will keep you slim! Set your own daily calorie goals and record your meals here.', 
        uses: '{Javascript, SQLite, Express}', 
        href: 'https://calorie-queen.glitch.me/' },
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
                        <header className="major">
                            <h2>Oh wow, thanks for visiting!</h2>
                        </header>
                        <div>
                            <p> I'm a self-taught developer with a B.A. in English and Creative Writing (with First Class Honors). </p>
                            <p> I love building things! If I get to build them with JavaScript or Python then even better! </p>
                            <p> You may have met me at local tech meetups such as <a
                                href="https://www.womenwhocode.com/edinburgh">Women Who Code</a>, <a
                                    href="https://www.pyladies.com/">Pyladies</a>, or <a
                                        href="https://www.meetup.com/Edinburgh-Women-in-Technology-Meetup/">Women in Technology</a>.</p>
                            <p>I was born in Brooklyn, New York and raised in Dallas, Texas. I spent half a decade in London and
                            recently moved up to Edinburgh.</p>
                            <p> <strong>I'm currently on the search for a team that has a Madeline-shaped hole!</strong></p>
                        </div>
                    </section>

                    <section id="two">
                        <h1>Recent Work</h1>

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