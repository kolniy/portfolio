import React, { useState } from "react"
import { Card, CardBody, Form, FormGroup, Input, Button } from "reactstrap"
import Alert from "./Alertpop"
// import axios from 'axios'

const SendMailForm = () => {

    const [emailStatus, updateMailStatus] = useState('')

    // const [formData, setFormData] = useState({
    //     email: '',
    //     name: '',
    //     message: ''
    // })

    // const { email, name, message } = formData

    // const updateFormData = (e) => setFormData({...formData, [e.target.name] : e.target.value } )

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
         if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        form.reset();
        updateMailStatus('SUCCESS')
        setTimeout(() => {
            updateMailStatus('')
        }, 2000);
      } else {
        updateMailStatus('ERROR')
        setTimeout(() => {
            updateMailStatus('')
        }, 2000);
      }
    };
    xhr.send(data);
}

        return (
         <Card className="shadow content-align-center">
            <CardBody>
                {emailStatus === 'SUCCESS' && <><Alert message="Mail Sent Successfully!" alertType="success" /></>}
                {emailStatus === 'ERROR' && <><Alert message="Failed To send Mail. Try Later!" alertType="danger" /></>}
            <p className="h6">Send Me a Message.</p>
                <Form
                onSubmit={e => handleFormSubmit(e)} method="POST" 
                action="https://formspree.io/xgepealp"
                >
                <FormGroup>
                    <Input
                    className="form-control-alternative"
                     placeholder="John smith"
                     type="name"
                    //  value={name}
                     name="name"
                     required
                />
                    </FormGroup>
                    <FormGroup>
                    <Input
                    className="form-control-alternative"
                     placeholder="name@example.com"
                     type="email"
                    //  value={email}
                     name="email"
                     required
                />
                    </FormGroup>
            <Input
            className="form-control-alternative"
            placeholder="Your message here ..."
            rows="3"
            type="textarea"
            name="message"
            // value={message}
            required
          />
          <FormGroup>
              <Button className="btn-icon" type="submit" color="primary" size="lg"> Send Message {" "} <i className="fa fa-envelope" aria-hidden="true"></i> </Button>
          </FormGroup>
                </Form>
            </CardBody>
          </Card>
        )
}

export default SendMailForm


// try {
//     const config = {
//         headers : {
//             'Content-Type': 'application/json'
//         }
//     }
//     const body = JSON.stringify(formData)
//     const response = await axios.post('/api/mail', body, config)
//     if(response.status === 200){
//         alert('Message sent succesfully')
//     }
// } catch (error) {
//     alert(error.response.data.msg)
// }
// setFormData({
//     email: '',
//     name: '',
//     message: ''
// })