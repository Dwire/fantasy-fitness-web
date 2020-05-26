import React from 'react'

class SideNav extends React.Component {
  state = {
    htmlClass: ""
  }

  handleClick = () => {
    if (this.state.htmlClass === "open"){
      this.setState({htmlClass: ''})
    }else{
      this.setState({htmlClass: "open"})
    }
  }

  render(){
    return (
      <div class="wrapper">
      
        <header>
          <p onClick={this.handleClick} className= {"menu collapse " + this.state.htmlClass}><span></span></p>
        </header>
        <aside className={"slidenav " + this.state.htmlClass} >
          <nav>
            <ul>
              <li> Create A League </li>
              <li> League Invitations </li>
              <li> See All Work Out Packs </li>
              <li> Profile </li>
              <li> sign out </li>
            </ul>
          </nav>
        </aside>
        {/* <main class="main-container">
      
        </main> */}
      </div>
  )}
}

export default SideNav