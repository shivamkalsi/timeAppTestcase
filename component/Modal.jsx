var React=require('react');

class Modal extends React.Component
{
	componentDidMount()
	{
		$(document).foundation();
		//var modal=new Foundation.Reveal($('#errmodal'));
		//modal.open();
		//$('#errmodal').foundation('open');
	}
	
	render()
	{
		return(
		<div className="reveal" id="errmodal" data-reveal>
			<h1>Awesome. I Have It.</h1>
			<p className="lead">Your couch. It is mine.</p>
			<p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
			<button className="close-button" data-close aria-label="Close modal" type="button">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		);
	}
}

export default Modal;