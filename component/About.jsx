var React=require('react');

class About extends React.Component
{
  render()
  {
    return(
      <div>
      <h3 className="text-center">Temperature of {this.props.location} is {this.props.temp}</h3>
      </div>
    );
  }
}

export default About;
