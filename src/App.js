import React, { Component } from 'react';
import './App.css';
import {
  searchUser,
  getUser
} from './api/requests'
import User from './ui/User'
import UserRepos from './ui/UserRepos'

class App extends Component {
  state = {
    searchedString: '',
    usersList: [],
    userRepos: {},
    screensActive: {
      usersList: true,
      userRepos: false
    },
  }

  onChange = event => {
    const value = event.target.value
    if ( 
      value.length > 2 &&
      this.state.searchedString !== value
    ) {
      searchUser(value).then(
        usersData => {
          const users = usersData.data.data.search.nodes

          this.setState({
            searchedString: value,
            usersList: this.prepareUsers(users)
          })
        }
      ).catch(
        err => new Error(err)
      )
    }
  };

  onUserClick = (event, login) => {
    getUser(login).then(
      user => {

        let {name, bio, repositories } = user.data.data.repositoryOwner
        repositories = repositories.nodes

        const state = Object.assign({}, this.state, {
          userRepos: {
            name,
            bio, 
            repositories
          }
        })
        this.setState(state, () => this.showScreen('userRepos'))
      }
    ).catch( err => new Error(err) )
  }

  prepareUsers = users => users.map(
    user => <User {...user} onClick={this.onUserClick} key={user.login}/>
  )
  
  showScreen = screenName => {
    let screens = Object.assign({}, this.state.screensActive)
    for (let screen in screens) {
      (screen === screenName) ? (
        screens[screen] = true 
      ) : (
        screens[screen] = false
      )
    }

    this.setState({
      screensActive: screens
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Github repos explorer:</h1>
          <input onChange={this.onChange} placeholder="Search for user"></input>
        </header>
        <div className={`users-list${!this.state.screensActive.usersList ? ' swipe-out' : ''}`}>
          {this.state.usersList}
        </div>
        <div className={`repos-view${!this.state.screensActive.userRepos ? ' swipe-out' : ''}`}>
          {this.state.screensActive.userRepos ? (
            <UserRepos 
              {...this.state.userRepos}
              hideScreen={()=> this.showScreen('usersList')}  
            />
          ) : ''}
        </div>

        <style jsx>{`
          .App {
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-rows: auto auto;
            grid-template-areas: 
              "header secret"
              "users-list repos-view";
            min-height: 100vh;
            background-color: #282c34;
            color: whitesmoke;
          }
          .header {
            grid-area: header;
            font-size: calc(10px + .5vmin);
          }
          .users-list {
            grid-area: users-list;
          }
          .users-list.swipe-out {
            /* transform: translateX(-100%); */
            position: relative;
            opacity: .2;
          }
          .users-list.swipe-out:before {
              position: absolute;
              content: '';
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
          }
          .repos-view {
            grid-area: repos-view;
          }
          
        `}</style>
      </div>
    );
  }
}

export default App;
