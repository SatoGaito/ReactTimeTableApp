import React from 'react';


class TimeTable extends React.Component {
  render() {
    const weekDays = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日"];
    const { items, handleEdit } = this.props;
    return (
      <div className="time-table">
        {weekDays.map((weekDay) => (
          <div className="weekdays" key={weekDay.toString()}>
            <p>{weekDay}</p>
            {items.filter((item) => (
              item.day === weekDay
            )).map((item) => (
              <div key={item.id}>
                <p onClick={() => handleEdit(item.id)}>{item.nthPeriod}：{item.subject}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

}

export default TimeTable;