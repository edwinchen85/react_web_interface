var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      myAppointments: [
        {
          "petName": "Buffy",
          "ownerName": "Hassum Harrod",
          "aptDate": "2016-06-20 15:30",
          "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
        },
        {
          "petName": "Spot",
          "ownerName": "Constance Smith",
          "aptDate": "2016-06-24 08:30",
          "aptNotes": "This German Shepherd is having some back pain"
        },
        {
          "petName": "Goldie",
          "ownerName": "Barot Bellingham",
          "aptDate": "2016-06-22 15:50",
          "aptNotes": "This Goldfish has some weird spots in the belly"
        },
        {
          "petName": "Mitten",
          "ownerName": "Hillary Goldwyn",
          "aptDate": "2016-06-21 9:15",
          "aptNotes": "Cat has excessive hairballs"
        }
      ]
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
