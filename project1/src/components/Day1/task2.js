import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'; 
export default function T() {
    var [show, setshow] = useState(false);
    var [ques, setques] = useState("");
    var [option,setoption] = useState({})
    const handleClose = () => {
        handleclear();
        setshow(false);}
    const handleShow = () => { 
        handleclear();
        setshow(true);
      }
      let addOption = () => {
        setoption([...option, {}])
      }
      var handleclear = () => {
        setques("")
        setoption("")
    
      }
      var handleSave = () => {
      }
      var handelchange = (e,i) => {
        if (i == 'i1') {
          setques(e.target.value)
        }
        else
          setoption(e.target.value)
      }
    
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Add Question
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Question Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question description</Form.Label>
              <Form.Control
                type="ques" name="ques" value={ques} onChange={(e) => handelchange(e, 'i1')}
                placeholder='question'
                autoFocus
              />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question Option</Form.Label>
              <Form.Control
                type="option" name="option" value={option} onChange={(e) => handelchange(e, 'i2')}
               placeholder='option'
                autoFocus
              />
             
            </Form.Group>
            <Button variant="primary" onClick={handleSave}>
        Add option
      </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { handleClose(); }}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleSave() }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
