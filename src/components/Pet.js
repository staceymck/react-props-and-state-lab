import React from 'react'

class Pet extends React.Component {

  handleAdopt = (id) => {
    this.props.onAdoptPet(id)
  }

  displayAdoptionButton() {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
     return <button className="ui primary button" onClick={e => this.handleAdopt(this.props.pet.id)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male" ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.displayAdoptionButton()}
        </div>
      </div>
    )
  }
}

export default Pet
