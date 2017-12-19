var React=require('react');

class About extends React.Component
{
  render()
  {
    return(
      <div>
      <h3>This is whethar* {this.props.location} && {this.props.temp}</h3>
      </div>
    );
  }
}

export default About;
