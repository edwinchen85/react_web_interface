var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      myAppointments: []
    }
  },

  render: function() {
    var filteredApts = this.state.myAppointments;
    filteredApts = filteredApts.map(function(item, index) {
      return (
        <li className="pet-item media" key={index}>
          <div className="pet-info-media-body">
            <div className="pet-head">
              <span className="pet-name">{this.state.myAppointments[index].petName}</span>
              <span className="apt-date pull-right">{this.state.myAppointments[index].aptDate}</span>
            </div>
            <div className="owner-name"><span className="label-item">Owner:</span>{this.state.myAppointments[index].ownerName}</div>
            <div className="apt-notes">{this.state.myAppointments[index].aptNotes}</div>
          </div>
        </li>
      );
    }.bind(this));

    return (
      <div className="interface">
        <div className="item-list media-list">
          <ul className="pet-info media-body">
            {filteredApts}
          </ul>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
)
