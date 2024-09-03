import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { contactFormSchema, IFormData, IFormDataErrors } from "../../types";
import * as Yup from "yup";
import { useAxios } from "../../hooks/useAxios";

export const ContactForm = () => {
  const [errors, setErrors] = useState<IFormDataErrors>({});
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  const {
    loading,
    error,
    apiCall: sendEmail,
  } = useAxios({
    url: "https://formsubmit.co/774cc67dac88d67231648fde006c0395",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }),
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
      sendEmail();
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
    <div className="container p-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h3>
            Are you ready to start collaborating?
            <br />
            Fill out the form and a representative will contact you.
          </h3>
          {loading && <h3>Loading</h3>}
          {error && <h3>{error}</h3>}
        </div>
        <div className="col-12 col-md-6">
          <Form
            style={{
              boxShadow: "0px 2px 4px rgba(44, 105, 141, 0.2)",
              padding: "2rem",
            }}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="name">
              <Form.Label style={{ color: "var(--dark-purple-color)" }}>
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
              <Form.Label style={{ color: "var(--dark-purple-color)" }}>
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
            <Form.Group className="mb-3" controlId="message">
              <Form.Label style={{ color: "var(--dark-purple-color)" }}>
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
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
