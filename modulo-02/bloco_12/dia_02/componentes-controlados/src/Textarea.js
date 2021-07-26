import React from 'react';

class Textarea extends React.Component{
  render() {
    const { value, handleChange } = this.props;
    return (
      <textarea name="textArea" value={ value } onChange={handleChange}></textarea>
    )
  }
}

export default Textarea;
