import nutritionplanner from './images/explain.mp4';
import jabe from './images/jabe_small.png';
import poilei from './images/poilei_small.png';
import glowingkids from './images/glowingkids_small.png';
import pscore_abuse from './images/pscore_abuse.png';
import pscore_digital from './images/pscore_digital.png';
import pscore_seminar from './images/pscore_seminar.png';
import pscore_workshop from './images/pscore_workshop.png';
import pscoreedu from './images/pscoreedu_small.png';
import munscr from './images/munscr_small.png';
import twotickets from './images/twotickets_small.png';
import './App.css';
import React from 'react'
import PropTypes from "prop-types";
import {Button, Modal, Card, Container, Image, Jumbotron} from 'react-bootstrap';
import me3 from "./images/me.png";



const data = {
        nutritionplanner: {
            vid: nutritionplanner,
            cardTitle: "Meal Plan Generator",
            cardText: "The goal of this project was to create an algorithm to generate personalised meal plans, " +
                "based on the users' input and to output them in a calendar overview. These meal plans support typical " +
                "diets and eating habits  and provide a suitable nutrition intake. To create the meal plans and to " +
                "choose the right  foods in a healthy measurement, an optimization problem was set up and solved by " +
                "linear programming. The focus was more set on the logic instead on the design, which is why the " +
                "page has only minimal styling to make it usable. Besides Django (Python) jQuery, CSS and Bootstrap " +
                "were used to  implement this website."

        },
        jabe: {
            img: jabe,
            cardTitle: "JABE",
            cardText: "The JABE is a Japanese restaurant I created the website for and maintained for some time. " +
                "This eight month project is a static and plain HTML, CSS and jQuery website. It is solely used to " +
                "present the restaurant, therefore the whole ordering process is outsourced. Besides I integrated " +
                "the Facebook tracking pixel for marketing services.",
        },
        poilei: {
                img: poilei,
                cardTitle: "Poilei",
                cardText: "Poilei is an Italian shoe shop using Shopify. Since I only maintain the page I mostly fix " +
                    "minor errors in the front-end and edit the layout for the pages as well as integrate tracking " +
                    "pixels like like the ones from Google or Facebook and added a cookies banner.",
                buttonWebsite: 'https://poilei.com',
                buttonCode: ''
            },
        glowingkids: {
                img: glowingkids,
                cardTitle: "GlowingKids",
                cardText: "GlowingKids is a Shopify online shop selling children clothing. I maintain the front-end and " +
                    "adjust layouts of the pages. Besides I wrote a Python script to update the product database " +
                    "entries in terms of SEO matters.",
                buttonWebsite: 'https://glowingkids.de',
                buttonCode: ''
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
                img: pscoreedu,
                cardTitle: "PSCORE EDU",
                cardText: "A WordPress website to provide tutoring classes for North Korean defectors (maintaining).",
                buttonWebsite: 'http://edu.pscore.org/en/',
                buttonCode: ''
            },
    munscr: {
            img: munscr,
            cardTitle: "MUNSCR",
            cardText: "MUNSCR stands for Model United Nations for Succesful Corean Reunification. It is the newest " +
                "project between PSCORE and me. It is a WordPress website that I designed and developed from scratch. " +
                "The website is under development and is set to be finished around end of January.",
            buttonWebsite: 'http://munscr.com',
            buttonCode: ''

        },
    twotickets: {
        img: twotickets,
        cardTitle: "TwoTickets.de",
        cardText: "A Django website, that sells memberships to its users. Members can win " +
            "a pair of tickets for various events (maintaining).",
        buttonWebsite: 'https://twotickets.de',
        buttonCode: ''
    }
};



class Lightbox extends React.Component{
    constructor(props) {
        super(props);
        this.show = props.show;
        this.src = props.src;
        this.state = {
            show: props.show,
            src: props.src
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose(){
        this.setState({ show: false });
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ show: nextProps.show, src: nextProps.src });
    }
    render() {
        return(
        <Modal show={this.state.show} onHide={this.handleClose} className="lightbox">
            <Modal.Header closeButton>
                {/*<Modal.Title>Modal heading</Modal.Title>*/}
            </Modal.Header>
            <Modal.Body><Image src={this.state.src}/></Modal.Body>
        </Modal>)
    }
}
Lightbox.propTypes = {
    show: PropTypes.bool,
    src: PropTypes.string
};

Lightbox.defaultProps = {
    show: false,
    src: ''
};

class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.show = props.show;
        this.card = props.card;
        this.state = {
            show: false,
            showLightBox: false,
            imgSrc: ''
        }
        this.handleClose = this.handleClose.bind(this);
        this.viewLightbox = this.viewLightbox.bind(this);
    }
    handleClose(){
        this.setState({ show: false });
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ show: nextProps.show });
    }
    viewLightbox(source){
        this.setState({showLightBox: true,
        imgSrc: source})
    }

    render() {
        let media;
        if(data[this.card]['img']){
            media = <Image src={data[this.card].img}/>;
        }
        else if (data[this.card]['vid']){
            media = <video controls><source src={data[this.card].vid} type="video/mp4" />Your browser does not support the video tag.</video>;
        }
        else{
            media = 'imgs'
        }
        return (
            <Modal show={this.state.show} onHide={this.handleClose} className="modal-page">
                <div className="text-right">
                    <Button variant="back" onClick={this.handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                             className="bi bi-chevron-double-left" viewBox="0 0 18 18">
                            <path fillRule="evenodd"
                                  d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            <path fillRule="evenodd"
                                  d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </Button>
                </div>
                <Jumbotron className="img-container2 bg-beige">
                  <h1>{data[this.card].cardTitle}</h1>
                <Container
                    className="d-flex flex-lg-row flex-column justify-content-lg-start align-items-lg-center justify-content-center align-items-start aboutme">
                        {media !== 'imgs'? <div className="me-image">{media}</div> :
                            <div className="image-box">
                                {data[this.card].imgs.map((s, i) =>
                                    <div className="me-image" onClick={() => this.viewLightbox(s)}>
                                        <Image src={s} key={i}/>
                                        <div className="overlay-text"><span>Click to enlarge</span></div>
                                    </div>
                                )}
                            </div>
                        }

                    <div className="about">
                        <p>{data[this.card].cardText}
                        </p>
                    </div>
                </Container>
            </Jumbotron>
                <Lightbox show={this.state.showLightBox} src={this.state.imgSrc}/>
                {/*<Modal.Header closeButton>*/}
                {/*  <Card.Title>{data[this.card].cardTitle}</Card.Title>*/}
                {/*</Modal.Header>*/}
                {/*<Card.Img variant="top" src={data[this.card].img}/>*/}
                {/*<Card.Body>*/}
                {/*    <Card.Text>{data[this.card].cardText}</Card.Text>*/}
                {/*</Card.Body>*/}
                {/*<Modal.Footer>*/}
                {/*  <Button variant="secondary" onClick={this.handleClose}>*/}
                {/*    Close*/}
                {/*  </Button>*/}
                {/*</Modal.Footer>*/}
              </Modal>
        )
    }
}

ProjectDetail.propTypes = {
    show: PropTypes.bool,
    card: PropTypes.string
};

ProjectDetail.defaultProps = {
    show: false,
    card: 'nutritionplanner'
};
export default ProjectDetail;