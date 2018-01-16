var React=require('react');

class WhetherForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.submitHandle=this.submitHandle.bind(this);
  }
  submitHandle(e)
  {
    e.preventDefault();
    var location= this.refs.whetherloc.value;
    this.props.callApi(location);
  }
  render()
  {
    return(

        <div>
            <h2 align="center">Get Whether</h2>
            <div align="center">
                <form onSubmit={this.submitHandle}>
                  <table>
                    <tbody>
                      <tr>
                        <td align="center"><input type="text" name="whetherloc" ref="whetherloc"  /></td>
                      </tr>
                      <tr>
                        <td align="center"><button>Submit</button></td>
                      </tr>
                    </tbody>
                  </table>
                </form>
            </div>
        </div>

    );
  }
}
export default WhetherForm;
