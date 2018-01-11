var React=require("react");


class ErrorMotal extends React.Component
{
    
    componentDidMount()
    {
        var modal= new Foundation.Reveal($('#errorMotal'));
        modal.open();
        alert('test');
    }
    render()
    {
        return(
            <div className="reveal tiny" id="errorMotal" data-reveal>
                <h4>Awesome. I Have It.</h4>
                <p className="lead">Your couch. It is mine.</p>
                <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
                <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            );
    }
}

 export default ErrorMotal;