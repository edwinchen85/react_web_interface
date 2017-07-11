var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      title: 'Appointments',
      show: true
    }
  },

  render: function() {
    var showTitle;
    if (this.state.show) {
      showTitle = 'New';
    }

    return (
      <div className="interface">
        <h1>{showTitle} {this.state.title}</h1>
        <ul>
          <li>Buffy 3:30 PM</li>
          <li>Spot 8:30 PM</li>
          <li>Goldie 3:50 PM</li>
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
)
