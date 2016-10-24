var React = require('react');

var ErrorModel = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'  
    }
  },
  componentDidMount : function(){
    var model = new Foundation.Reveal($("#error-model"));
    model.open();
  },
  render : function(){
    return(
        <div id="error-model" className="reveal tiny text-center" data-reveal="">
            <h4>Some Title</h4>
            <p>Our error message.</p>
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
