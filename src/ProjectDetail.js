import nutritionplanner from './images/explain.mp4';
import jabe from './images/jabe.png';
import poilei from './images/poilei_small.png';
import poilei_cookies from './images/poilei_cookies.png';
import glowingkids from './images/glowingkids.png';
import pscore_abuse from './images/pscore_abuse.png';
import pscore_digital from './images/pscore_digital.png';
import pscore_seminar from './images/pscore_seminar.png';
import pscore_workshop from './images/pscore_workshop.png';
import pscoreedu from './images/pscoreedu.png';
import pscoreedu_register from './images/pscoreedu_register.png';
import pscoreedu_1 from './images/pscoreedu_1.png';
import pscoreedu_2 from './images/pscoreedu_2.png';
import munscr from './images/munscr.png';
import twotickets from './images/twotickets_small.png';
import twotickets_redesign from './images/twotickets_redesign.png';
import twotickets_filter from './images/twotickets_filter.png';
import twotickets_vattenfall_4 from './images/twotickets_vattenfall_4.png';
import './App.css';
import React from 'react'
import PropTypes from "prop-types";
import {Button, Modal, Card, Container, Image, Jumbotron, ButtonGroup} from 'react-bootstrap';
import me3 from "./images/me.png";
import ReactDOM from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const data = {
    nutritionplanner: {
        vid: nutritionplanner,
        cardTitle: "Meal Plan Generator",
        cardText: "The goal of this project was to create an algorithm to generate personalised meal plans, " +
            "based on the users' input and to output them in a calendar overview as well as export them in a pdf " +
            "file. These meal plans support typical diets and eating habits  and provide a suitable nutrition " +
            "intake. To create the meal plans and to choose the right  foods in a healthy measurement, an " +
            "optimization problem was set up and solved by linear programming. The focus was more set on the " +
            "logic instead on the design, which is why the page has only minimal styling to make it usable. " +
            "Besides Django (Python) jQuery, CSS and Bootstrap  were used to  implement this website."
    },
    jabe: {
        imgs: [jabe],
        cardTitle: "JABE",
        cardText: "The JABE is a Japanese restaurant I created the website for and maintained for some time. " +
            "This eight month project is a static and plain HTML, CSS and jQuery website. It is solely used to " +
            "present the restaurant, therefore the whole ordering process is outsourced. Besides I integrated " +
            "the Facebook tracking pixel for marketing services.",
    },
    poilei: {
        imgs: [poilei_cookies],
        cardTitle: "Poilei",
        cardText: "Poilei is an Italian shoe shop using Shopify. Since I maintain the page I mostly fix " +
            "minor errors in the front-end and edit the layout for the pages as well as integrate tracking " +
            "pixels like like the ones from Google or Facebook and added a cookies banner.",
        buttonWebsite: 'https://poilei.com',
        buttonCode: ''
    },
    glowingkids: {
        imgs: [glowingkids],
        cardTitle: "GlowingKids",
        cardText: "GlowingKids is a Shopify online shop selling children clothing. I maintain the front-end and " +
            "adjust layouts of the pages. Besides I wrote a Python script to update the product database " +
            "entries in terms of SEO matters.",
        buttonWebsite: 'https://glowingkids.de',
        buttonCode: 'https://github.com/priska96/glowingkids/blob/master/main.py'
    },
    pscore: {
        imgs: [pscore_abuse, pscore_digital, pscore_workshop, pscore_seminar],
        cardTitle: "PSCORE",
        cardText: "PSCORE stands for People for Successful Corean REunification and is an NGO that fights for " +
            "human rights in North Korea and helps North Korean defectors. I adjust the pages, ensure " +
            "the usability and fix errors as well as design and add new pages. The content pages that I created " +
            "are 'Child Abuse', 'Digital Life & Digital Rights', 'Online Seminar' and 'Online Workshop'.",
        buttonWebsite: 'http://pscore.org/home',
        buttonCode: ''
    },
    pscoreedu: {
        imgs: [pscoreedu_1, pscoreedu_2, pscoreedu_register],
        cardTitle: "PSCORE EDU",
        cardText: "The education page from PSCORE is a WordPress website to provide tutoring classes for " +
            "North Korean defectors. Students and tutors register on the page and are matched. I mostly update " +
            "the 'Successful Tutoring Experiences' section. Besides, I added a PHP script to add the registration" +
            "date to the database and make it visible in the WordPress admin overview.",
        buttonCode: 'https://github.com/priska96/pscore/blob/master/member_registration_date.php'
    },
    munscr: {
        imgs: [munscr],
        cardTitle: "MUNSCR",
        cardText: "MUNSCR stands for Model United Nations for Succesful Corean Reunification. It is the newest " +
            "project between PSCORE and me. It is a WordPress website that I designed and developed from scratch. " +
            "The design was iteratively created and underwent some changes. The website is under development " +
            "and is set to be finished around end of January.",
        buttonWebsite: 'http://munscr.com',
        buttonCode: ''

    },
    twotickets: {
        imgs: [twotickets_redesign, twotickets_filter, twotickets_vattenfall_4],
        cardTitle: "TwoTickets.de",
        cardText: "TwoTickets.de sells memberships to its users. Registered members can win a pair of tickets for any " +
            "event, whose organizer collaborates with TwoTickets.de. I maintain the back- and the front-end in terms " +
            "of bug fixing and adding new features. My main projects were a redesign of landing and event pages, " +
            "optimizing the filter and search functions, a redesign of the iFrame version for an affiliate " +
            "company (Vattenfall) and a current tech-stack update project. " +
            "This website is build with Django in the back-end and Sass and jQuery in the front-end." ,
        buttonAffiliate: 'https://vattenfall.de/freikarten',
    }
};


class LightboxWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.card = props.card;
        this.closeAction = props.closeAction;
        this.state = {
            srcIndex: props.srcIndex,
            isOpen: props.isOpen,
            card: props.card,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isOpen: nextProps.isOpen, srcIndex: nextProps.srcIndex, card: nextProps.card});
    }

    render() {
        const {srcIndex, isOpen} = this.state;
        if(!('imgs' in data[this.card])){
            return false;
        }
        const images = data[this.card].imgs;
        let next;
        let prev;

        if(images.length > 1){
            next = images[(srcIndex + 1) % images.length]
            prev = images[(srcIndex + images.length - 1) % images.length]
        }
        return (
            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[srcIndex]}
                        nextSrc={next}
                        prevSrc={prev}
                        onCloseRequest={() => this.props.closeAction()}
                        onMovePrevRequest={() =>
                            this.setState({
                                srcIndex: (srcIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                srcIndex: (srcIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

LightboxWrapper.propTypes = {
    isOpen: PropTypes.bool,
    srcIndex: PropTypes.number,
    card: PropTypes.string,
    closeAction: PropTypes.func
};

LightboxWrapper.defaultProps = {
    isOpen: false,
    srcIndex: 0,
    card: ''
};

class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.show = props.show;
        this.card = props.card;
        this.closeAction = props.closeAction;
        this.state = {
            show: props.show,
            card: props.card,
            showLightBox: false,
            srcIndex: 0
        }
        this.handleClose = this.handleClose.bind(this);
        this.viewLightbox = this.viewLightbox.bind(this);
    }

    handleClose() {
        this.setState({showLightBox: false});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({show: nextProps.show, card: nextProps.card});
    }

    viewLightbox(srcIndex) {
        this.setState({
            showLightBox: true,
            srcIndex: srcIndex
        })
    }

    render() {
        if (!(this.state.card in data)) {
            return null
        }
        return (
            <React.Fragment>
                <Modal show={this.state.show} onHide={this.handleClose} className="modal-page">

                    <div className="text-right pr-3">
                        <Button variant="back" onClick={this.props.closeAction}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-chevron-double-left" viewBox="0 0 30 30">
                                <path fillRule="evenodd"
                                      d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                <path fillRule="evenodd"
                                      d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Back
                        </Button>
                    </div>
                    <Jumbotron className="img-container2 bg-transparent">
                        <h1>{data[this.state.card].cardTitle}</h1>
                        <Container
                            className="d-flex flex-lg-row flex-column flex-wrap justify-content-lg-start align-items-lg-center justify-content-center align-items-start aboutme">
                            {'vid' in data[this.state.card] ?
                                <video className="project-video" controls>
                                    <source src={data[this.state.card].vid} type="video/mp4"/>Your browser does not support the video tag.
                                </video> :
                                <div className="image-box">
                                    {data[this.state.card].imgs.map((s, i) =>
                                        <div className="project-img" onClick={() => this.viewLightbox(i)}>
                                            <div className="overlay-text"><span>Click to enlarge</span></div>
                                            <Image src={s} key={i}/>
                                        </div>
                                    )}
                                </div>
                            }

                            <div className="project-desc">
                                <p>{data[this.state.card].cardText}
                                </p>
                            </div>
                            {data[this.state.card].buttonCode ?
                                <ButtonGroup className="justify-content-between"><Button variant="loading"
                                                                                         href={data[this.state.card].buttonCode}
                                                                                         target="_blank">View
                                    Code</Button></ButtonGroup> : null}
                            {data[this.state.card].buttonAffiliate ?
                                <ButtonGroup className="justify-content-between"><Button variant="loading"
                                                                                         href={data[this.state.card].buttonAffiliate}
                                                                                         target="_blank">View Affiliate
                                    Website</Button></ButtonGroup> : null}
                        </Container>
                    </Jumbotron>
                    <LightboxWrapper isOpen={this.state.showLightBox} srcIndex={this.state.srcIndex}
                                     card={this.state.card} closeAction={this.handleClose}/>
                </Modal>
            </React.Fragment>
        )
    }
}

ProjectDetail.propTypes = {
    show: PropTypes.bool,
    card: PropTypes.string,
    closeAction: PropTypes.func
};

ProjectDetail.defaultProps = {
    show: false,
    card: 'nutritionplanner'
};
export default ProjectDetail;