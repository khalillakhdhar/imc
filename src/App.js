import React, { Component } from 'react';
class App extends React.Component {
constructor(props) {
  
super(props);
this.state = {
  taille: '',
  poid: '',
  indice: '',
  remarque:''

};
this.onChange = this.onChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.reset=this.reset.bind(this);
}
onChange = e => { // arrow function
  this.setState({ [e.target.name]: e.target.value });
  };

handleSubmit(event) {
  
let poid=this.state.poid;
let taille=this.state.taille;

if(this.state.poid!='' && this.state.taille!='')
{
  let indice=Math.round(poid/Math.pow(taille,2));
  const imcval= <span>votre imc est {indice}</span>;

this.setState({indice:imcval})

if(indice<20)
{
  const rmq= <span className='alert alert-warning'>vous êtes maigre</span>;

this.setState({remarque:rmq})
}
else if(indice<=25)
{
  const rmq= <span className='alert alert-success'>vous êtes idéal</span>;

  this.setState({remarque:rmq})
}
else
{
  const rmq= <span className='alert alert-danger'>vous êtes en surpoids</span>;

  this.setState({remarque:rmq})
}
}
else
{
  const rmq= <span className='alert alert-danger'>remplissez votre poids et taille</span>;

  this.setState({remarque:rmq})
}

event.preventDefault();

}
reset()
{
  this.setState({
    taille: '',
    poid: '',
    indice: '',
    remarque:''

  })


}
render() {
  return (
    <div className="container">
  <div className="row">
    <div className="col">
      
    </div>
    <div className="col">
    <form onSubmit={this.handleSubmit} >
  <h1 className="text-center">Calcule d'IMC</h1>
  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">poid</label>
  <input type="text" name="poid" pattern='[0-9.]{2,6}' value={this.state.poid} onChange={this.onChange} className="form-control"  placeholder="Votre poids ici" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">taille</label>
  <input type="text" name="taille" pattern='[0-9.]{2,6}' value={this.state.taille} onChange={this.onChange} className="form-control"  placeholder="Votre taille ici" />
  
</div>

<div className="mb-3 text-center">
<input type="submit" className="btn btn-primary" value="Submit" />&nbsp;&nbsp;
<input type="reset" onClick={this.reset} className="btn btn-warning" value="vider" />
<div className='text-center'>{this.state.indice}</div>
<br></br><br></br><br></br><div className='text-center'>{this.state.remarque}</div>

</div>
  
  </form>
    </div>
    <div className="col">
      
    </div>
  </div>
</div>
  
  );
  }
  }
  export default App;