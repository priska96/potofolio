import React from 'react'
import {Button, Modal, Container, Image, ButtonGroup} from 'react-bootstrap';
import { Jumbotron } from '../../components/Jumbotron';
import parse from 'html-react-parser';
import LightBoxWrapper from "../../components/light-box/LightBoxWrapper";
import '../../App.css';
import {data} from "./project-data";

export default function  ProjectDetail(props){
    const [show, setShow] = React.useState(props.show || false);
    const [card, setCard] = React.useState(props.card);
    const [showLightBox, setShowLightBox] = React.useState(false);
    const [srcIndex, setSrcIndex] = React.useState(0);

    React.useEffect(()=>{
        if(props.show !== show) setShow(props.show);
        if(props.card !== card) setCard(props.card);
    },[props])

    const handleClose = () => {
        setShowLightBox(false);
    }

    const viewLightbox = (srcIndex) => {
        console.log(srcIndex, 'true')
        setShowLightBox(true);
        setSrcIndex(srcIndex)
    }

    if (!(card in data)) {
        return null
    }

    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} className="modal-page">
                <div className="text-right pr-3">
                    <Button variant="back" onClick={props.closeAction}>
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
                    <h1>{data[card].cardTitle}</h1>
                    <Container
                        className="d-flex flex-lg-row flex-column flex-wrap justify-content-lg-start align-items-lg-center justify-content-center align-items-start aboutme">
                        <div className="project-media">
                            {'vids' in data[card] ?
                                <div className="video-box" >
                                    {data[card].vids.map((src, idx) =>
                                        <div key={idx} className="project-video">
                                            <div className="overlay-text"><span>{data[card].vidTitle[idx]}</span></div>
                                            <video poster={data[card].poster[idx]} controls>
                                                <source src={src} type="video/mp4"/>Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    )}
                                </div>
                            : ''
                            }
                            {'imgs' in data[card] ?
                                <div className="image-box">
                                    {data[card].imgs.map((src, idx) =>
                                        <div key={idx} className="project-img" onClick={() => viewLightbox(idx)}>
                                            <div className="overlay-text"><span>Click to enlarge</span></div>
                                            <Image src={src} key={idx}/>
                                        </div>
                                    )}
                                </div>
                                : ''
                            }
                             {'mobileVids' in data[card] ?
                                <div className="video-box mobile" >
                                    {data[card].mobileVids.map((src, idx) =>
                                        <div key={idx} className="project-video">
                                            <div className="overlay-text"><span>{data[card].vidTitle[idx]}</span></div>
                                            <video poster={data[card].poster[idx]} controls>
                                                <source src={src} type="video/mp4"/>Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    )}
                                </div>
                            : ''
                            }
                        </div>
                        <div className="project-desc">
                            <p>{parse(data[card].cardText)}</p>
                        </div>
                        {data[card].buttonCode ?
                            <ButtonGroup className="justify-content-between">
                                <Button
                                    variant="loading"
                                    href={data[card].buttonCode}
                                    target="_blank"
                                >
                                    View Code
                                </Button>
                            </ButtonGroup>
                            :
                            null
                        }
                        {data[card].buttonAffiliate ?
                            <ButtonGroup className="justify-content-between">
                                <Button
                                    variant="loading"
                                    href={data[card].buttonAffiliate}
                                    target="_blank"
                                >
                                    View Affiliate Website
                                </Button>
                            </ButtonGroup>
                            :
                            null
                        }
                    </Container>
                </Jumbotron>
               { showLightBox ? <LightBoxWrapper
                    isOpen={showLightBox}
                    srcIndex={srcIndex}
                    card={data[card]}
                    handleClose={handleClose}
                />  : null }
            </Modal>
        </React.Fragment>
    )
}