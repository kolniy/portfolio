import React, { useState } from "react"
import { Card, CardBody, Form, FormGroup, Input, Button } from "reactstrap"
import axios from 'axios'

const SendMailForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: ''
    })

    const { email, name, message } = formData

    const updateFormData = (e) => setFormData({...formData, [e.target.name] : e.target.value } )

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(formData)
            const response = await axios.post('/api/mail', body, config)
            if(response.status === 200){
                alert('Message sent succesfully')
            }
        } catch (error) {
            alert(error.response.data.msg)
        }
        setFormData({
            email: '',
            name: '',
            message: ''
        })
    }

        return (
         <Card className="shadow content-align-center">
            <CardBody>
            <p className="h6">Send Me a Message.</p>
                <Form onSubmit={e => handleFormSubmit(e)}>
                <FormGroup>
                    <Input
                    className="form-control-alternative"
                     placeholder="John smith"
                     type="name"
                     value={name}
                     onChange={(e) => updateFormData(e)}
                     name="name"
                    //  required
                />
                    </FormGroup>
                    <FormGroup>
                    <Input
                    className="form-control-alternative"
                     placeholder="name@example.com"
                     type="email"
                     value={email}
                     onChange={(e) => updateFormData(e)}
                     name="email"
                    //  required
                />
                    </FormGroup>
            <Input
            className="form-control-alternative"
            placeholder="Your message here ..."
            rows="3"
            type="textarea"
            name="message"
            value={message}
            onChange={e => updateFormData(e)}
            // required
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