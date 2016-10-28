var React = require('react');

var ErrorModel = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title:React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  componentDidMount : function(){
    var model = new Foundation.Reveal($("#error-model"));
    model.open();
  },
  render : function(){
    var {title, message}=this.props;
    return(
        <div id="error-model" className="reveal tiny text-center" data-reveal="">
            <h4>{title}</h4>
            <p>{message}.</p>
            <p>
              <button className="button hollow" data-close="">
                  Okay
              </button>
            </p>
        </div>
    );
  }
})

  module.exports = ErrorModel;
