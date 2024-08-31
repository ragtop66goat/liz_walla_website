import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { contactFormSchema, IFormData, IFormDataErrors } from "../../types";
import * as Yup from "yup";

export const ContactForm = () => {
  const [errors, setErrors] = useState<IFormDataErrors>({});
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await contactFormSchema.validate(formData, { abortEarly: false });
    } catch (validationErrors) {
      const newErrors: IFormDataErrors = {};

      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path as keyof IFormDataErrors] = error.message;
          }
        });
      }
      setErrors(newErrors);
    }
  };

  const { name, email, message } = formData;
  return (
    <div className="d-flex justify-content-center align-items-center">
      <h3 className="m-5">Are you ready to start collaborating?<br/>Fill out the form and a representative will contact you.</h3>
      <Form
        style={{
          boxShadow: "0px 2px 4px rgba(149, 53, 118, 0.2)",
          padding: "4rem 8rem"
        }}
        className="m-5"
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label style={{ color: "var(--light-purple-color)" }}>
            Name:
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          {errors.name && <Alert variant="danger">{errors.name}</Alert>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label style={{ color: "var(--light-purple-color)" }}>
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          {errors.email && <Alert variant="danger">{errors.email}</Alert>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="massage">
          <Form.Label style={{ color: "var(--light-purple-color)" }}>
            Message
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          style={{
            backgroundColor: "var(--dark-purple-color)",
            border: "none",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
