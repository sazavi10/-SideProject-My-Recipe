import React, { Component } from 'react';
import { withRouter } from "react-router-dom"; 

class SearchBox extends Component {
    state = {
        searchKeyWord : ''
    }
    handleChange = (e) => {
        this.setState ({
            searchKeyWord: e.target.value 
        })
    }

    handleClick = () => {
        const { history } = this.props
        this.state.searchKeyWord === '' ? alert('검색어를 입력해주세요!')  : history.push(`/recipelist/?q=${this.state.searchKeyWord}`);
    }

    render() {
        const  { handleChange, handleClick } = this
        return (
          <div>
            <input type="text" name='searchbox' value={this.state.searchKeyWord} placeholder='검색어 입력' onChange={handleChange}/>
            <button onClick={handleClick}><i className="fas fa-search"></i></button>
          </div>
        )
    }

}

export default withRouter(SearchBox);