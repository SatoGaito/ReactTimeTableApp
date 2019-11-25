import React from 'react';
import uuid from 'uuid';


import Form from './Form';
import TimeTable from './TimeTable';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuid(),
      subject: "",
      day: "",
      nthPeriod: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      subject: e.target.value
    });
  }

  handleChangeDays = (e) => {
    this.setState({
      day: e.target.value
    });
  }

  handleChangeNthPeriod = (e) => {
    this.setState({
      nthPeriod: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.subject) return;
    const newItem = {
      id: this.state.id,
      subject: this.state.subject,
      day: this.state.day,
      nthPeriod: this.state.nthPeriod
    };
    const newItems = [...this.state.items.filter(item => (item.id !== this.state.id)), newItem];
    const sortedItems = newItems.sort((a, b) => {
      if (a.nthPeriod < b.nthPeriod) return -1;
      if (a.nthPeriod > b.nthPeriod) return 1;
      return 0;
    });
    this.setState({
      items: sortedItems,
      subject: "",
      day: "",
      nthPeriod: "",
      id: uuid()
    });
  }

  handleEdit = id => {
    const selectedItem = this.state.items.find(item => (item.id === id));
    this.setState({
      subject: selectedItem.subject,
      day: selectedItem.day,
      nthPeriod: selectedItem.nthPeriod,
      id: id
    });
  }

  handleDelete = (e) => {
    e.preventDefault();
    const filteredItems = this.state.items.filter(item => (item.id !== this.state.id));
    this.setState({
      items: filteredItems,
      subject: "",
      day: "",
      nthPeriod: ""
    })
  }

  render() {
    return (
      <div className="container">

        <h1>時間割</h1>

        <Form
          subject={this.state.subject}
          day={this.state.day}
          nthPeriod={this.state.nthPeriod}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleChangeDays={this.handleChangeDays}
          handleChangeNthPeriod={this.handleChangeNthPeriod}
          handleDelete={this.handleDelete}
        />

        <TimeTable
          items={this.state.items}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
