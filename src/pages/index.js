import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.png'
import thumb03 from '../assets/images/thumbs/03.png'
import thumb04 from '../assets/images/thumbs/04.png'

const DEFAULT_IMAGES = [
    { id: '1', 
        thumbnail: thumb01, 
        caption: 'Average Site Colour', 
        description: 'Crawls a website for all images and calculates total average color! Uses a Python webcrawler which is called by a Node/Express app. Some animations thrown in for good measure.', 
        uses: '{Node.js, Express, Python, Pillow, Javascript, HTML, CSS}', 
        href: 'https://average-site-color.glitch.me/', 
        github: 'https://github.com/madelinecodes/Average-Site-Color'
    },
    { id: '2', 
        thumbnail: thumb02, 
        caption: 'Speak To My Husband', 
        description: "I wanted to send messages to our home office, at first as a prank but it eventually turned into a fun project! At current, it's deployed on Glitch as a Node app with the Express framework. NES.css is used as the frontend framework. My Raspberry Pi polls the server's message queue and reads them out via pyttsx3 a cross-platform Text-To-Speech library.", 
        uses: '{Node.js, Express, lowdb, NES.css, Javascript, HTML, CSS, Python, pyttsx3}', 
        href: 'https://speak-to-my-husband.glitch.me/',
        github: 'https://github.com/madelinecodes/speak-to-my-husband'
     },
     { id: '3', 
        thumbnail: thumb03, 
        caption: 'Calorie Queen', 
        description: 'Track your calories with this single-page app. No sign-in required just a unique private URL.', 
        uses: '{Node.js, Express, SQLite, Javascript, HTML, CSS}', 
        href: 'https://calorie-queen.glitch.me/',
        github: 'https://github.com/madelinecodes/Calorie-Queen'
     },
     { id: '4', 
        thumbnail: thumb04, 
        caption: 'Portfolio', 
        description: "This is it. You're seein' it buddy.", 
        uses: '{React, Gatsby, Sass, Javascript, HTML, CSS}', 
        href: 'https://madeline.codes/',
        github: 'https://github.com/madelinecodes/Portfolio'
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
                            <p>I'm currently working as a full-stack engineer and not seeking recruitment elsewhere.</p>
                        </div>
                    </section>

                    <section id="two">
                        <h1>Projects</h1>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, thumbnail, caption, description, href, uses, github }) => ({
                            thumbnail,
                            caption,
                            description,
                            href,
                            uses,
                            github
                        }))} />
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex