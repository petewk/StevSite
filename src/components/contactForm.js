import React, {Component} from 'react';

export default class ContactForm extends Component{

  state = {
    name: '',
    job: '',
    contact: '',
  }


  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangejob = this.handleChangejob.bind(this);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangecontact = this.handleChangecontact.bind(this);
  }

    handleChangename(event){
      this.setState({name: event.target.value});
    };

    handleChangejob(event){
      this.setState({job: event.target.value});
    };

    handleChangecontact(event){
      this.setState({contact: event.target.value});
    };

    handleClick(event){
      event.preventDefault();
      const templateId = 'template_tSeF7Ip4';
      this.sendFeedback(templateId, {message_html: this.state.job, from_name: this.state.name, reply_to: this.state.contact})
    }

    sendFeedback(templateId, variables) {
      window.emailjs.send(
        'gmail', templateId, variables).then(res => {
        console.log('Email sent successfully')
      })
    }



  render() {

    return (
      <section id="contactForm">
        <form action="">
          <input type="text" name="name" id="name" onChange={this.handleChangename} value={this.state.name} placeholder="Enter your name"/> <br />
          <input type="text" id="contact" name="contact" onChange={this.handleChangecontact} value={this.state.contact} placeholder="Enter your email address or phone number"/><br />
          <textarea type="textarea" name="job" id="job" onChange={this.handleChangejob} value={this.state.job} placeholder="Please write a little about the job you're contacting us about"/><br />
          <button type="submit" id="submit" onClick={this.handleClick}>Click here and we'll get back to you soon!</button>
        </form>
      </section>
    )
  }
}
