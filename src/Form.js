import React from 'react';

class Form extends React.Component {

  render() {

    const { subject, day, nthPeriod, handleChange, handleSubmit, handleChangeDays, handleChangeNthPeriod, handleDelete } = this.props;

    return (
      <form>

        <select value={day} onChange={handleChangeDays}>
          <option value="">---</option>
          <option value="月曜日">月曜日</option>
          <option value="火曜日">火曜日</option>
          <option value="水曜日">水曜日</option>
          <option value="木曜日">木曜日</option>
          <option value="金曜日">金曜日</option>
        </select>

        <select value={nthPeriod} onChange={handleChangeNthPeriod}>
          <option value="">---</option>
          <option value="1限">1限</option>
          <option value="2限">2限</option>
          <option value="3限">3限</option>
          <option value="4限">4限</option>
          <option value="5限">5限</option>
        </select>

        <input type="text" value={subject} onChange={handleChange}/>
        <button onClick={handleSubmit}>保存</button>
        <button onClick={handleDelete}>削除</button>

      </form>
    );
  }
}


export default Form;