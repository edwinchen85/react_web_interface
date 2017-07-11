var React = require('react');
var ReactDOM = require('react-dom');
var AptList = require('./AptList');

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

  render: function() {
    var filteredApts = this.state.myAppointments;
    filteredApts = filteredApts.map(function(item, index) {
      return (
        <AptList
          key = {index}
          singleItem = {item} />
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
