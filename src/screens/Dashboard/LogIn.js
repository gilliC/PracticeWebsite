import React, {Component} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {
  MainInput,
  MainButton,
} from '../../components/common_components';
import { Title } from "../../components/texts/Title";
import {Container} from '../../components/Container';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {isClicked: false};
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onClick() {
    if (!this.state.isClicked)
      this.setState(() => {
        return {isClicked: true};
      });
  }
  onSubmit(values) {
    console.log({name: 'onSubmit', val: values, cookies: this.props.cookies});
    this.props.logIn(values);
  }
  validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }
  render() {
    return (
      <div onClick={this.onClick}>
        <Title fontSize="2em">To see and edit tasks you must be an admin</Title>
        {this.state.isClicked && (
          <Container>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={this.onSubmit}
              validate={this.validate}
              render={({
                errors,
                status,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
              }) => (
                <Form>
                  <Field
                    placeholder="Email"
                    type="email"
                    id="email"
                    component={MainInput}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    placeholder="Password"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    component={MainInput}
                  />
                  <ErrorMessage name="password" component="div" />
                  <p>{this.props.errors}</p>
                  <MainButton type="submit">Submit</MainButton>
                </Form>
              )}
            />
          </Container>
        )}
      </div>
    );
  }
}
