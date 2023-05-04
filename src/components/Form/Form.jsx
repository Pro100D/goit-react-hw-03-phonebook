import { Component } from 'react';

import {
  FormPhonebook,
  FormInput,
  FormLeable,
  FormButtonSubmit,
} from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  // Ввод значений в инпутах
  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };
  // Сабмит формы
  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormPhonebook autoComplete="off" onSubmit={this.handleSubmit}>
        <FormLeable htmlFor="name">Name</FormLeable>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          id="name"
        />

        <FormLeable htmlFor="number">Number</FormLeable>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          id="number"
        />

        <FormButtonSubmit type="submit">Add concact</FormButtonSubmit>
      </FormPhonebook>
    );
  }
}

export default Form;
