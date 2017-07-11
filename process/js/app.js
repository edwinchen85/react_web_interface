var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var AptList = require('./AptList');
var AddAppointment = require('./AddAppointment');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      myAppointments: []
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempApts = result;
      this.setState({
        myAppointments: tempApts
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  deleteMessage: function(item) {
    var allApts = this.state.myAppointments;
    var newApts = _.without(allApts, item);
    this.setState({
      myAppointments: newApts
    });
  },

  render: function() {
    var filteredApts = this.state.myAppointments;
    filteredApts = filteredApts.map(function(item, index) {
      return (
        <AptList
          key = {index}
          singleItem = {item}
          whichItem = {item}
          onDelete = {this.deleteMessage} />
      );
    }.bind(this));

    return (
      <div className="interface">
        <div className="item-list media-list">
          <AddAppointment />
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
