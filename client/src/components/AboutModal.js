import React, { useState } from "react"
import { Modal, Button } from "reactstrap"

const AboutModal = ({ imgUrl }) => {

 const [modal, setModal] = useState(false)
 const toggleModal = () => setModal(!modal)

    return (
              <>
      <Button
             className="btn-icon mb-3 mb-sm-0"
                        color="primary"
                        onClick={(e) => toggleModal()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-circle-08" />
                        </span>
                        <span className="btn-inner--text">Click here To Learn More</span>
                      </Button>
                      <Modal
                      className="modal-dialog-centered modal-danger"
                      contentClassName="bg-gradient-primary"
                      isOpen={modal}
                      toggle={ toggleModal }
                    >
                      <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-notification">
                         About Me
                        </h6>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={ toggleModal }
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="py-3 text-center">
                          <img src={imgUrl} alt="kolaniyi" className="img-fluid img-thumbnail rounded-circle shadow" style={{width: "150px"} } />
                          <h4 className="heading mt-4">Kolaniyi</h4>
                          <p className="lead modal-about-me">
          kolawole Olaniyi is a passionate full-stack (MERN) developer with approximately 2 years of professional and freelance experience in web development. A deep desire to learn and curiosity for technology-related subjects is a major motivation for kolawole in developing He's skills as a self-taught developer. <br/> Personal qualities such as resilience, patience, diligence and hard work in addition to He's experience while working and learning to be a better developer have helped to shape Him into being a well-rounded software Developer. 
          </p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <Button
                          className="text-white ml-auto"
                          color="link"
                          data-dismiss="modal"
                          type="button"
                          onClick={ toggleModal }
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                    </>
    )
}

export default AboutModal