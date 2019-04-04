import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RightSide extends Component {

    state = { visible: false }    
    
    onToggle = () => {
        this.setState ({
            visible: !this.state.visible
        })
    }

    render(){
        const { logged } = this.props;
        const { visible } = this.state;

        return(
          <div>
            { logged ? 
                <div className='myprofil' onMouseEnter={this.onToggle} onMouseLeave={this.onToggle}>
                    <div>
                        <img src="https://placeimg.com/32/32/any" alt='mypicture'/>
                        <i className="fas fa-caret-down"></i>
                    </div>
                    {
                    <ul className={(visible===true? 'active' : '' )}>
                        <li><Link to="/recipelist/">마이페이지</Link></li>
                        <li><Link to="/recipelist/">로그아웃</Link></li>
                    </ul>
                    }
                </div>
                :
                <ul>
                    <li><Link to="/recipelist/">로그인</Link></li>
                    <li><Link to="/recipelist/">회원가입</Link></li>
                </ul>
            }
          </div>  
        );
    };
}

export default RightSide;