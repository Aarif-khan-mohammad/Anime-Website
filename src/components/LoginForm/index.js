import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from  'js-cookie'
import './index.css'

class LoginForm extends Component{

    state = {username : "" , password : "" ,
     showError : false , errorMsg: ""}

    onSubmitSuccess = (jwtToken)=>{
        Cookies.set("jwt_token" , jwtToken , {expires : 30})
        const {history} = this.props
        history.replace('/')
    }

    onSubmitFailure = (errorMsg)=> {
        this.setState({showError : true , errorMsg})
    }

    submitForm = async (event) =>{
        event.preventDefault();

        const {username , password} = this.state
        const userDetails = {username , password}
        const url = "https://apis.ccbp.in/login";
        const options = {
            method : "POST" ,
            body : JSON.stringify(userDetails),
        }

        const response = await fetch(url , options)
        const data = await response.json();
        console.log(data)

        if(response.ok === true){
            this.onSubmitSuccess(data.jwt_token)
        }else{
            this.onSubmitFailure(data.error_msg)
        }
    }

    onInputUsername = (event)=>{
        this.setState({ username : event.target.value })
    }

    onInputPassword = (event)=>{
        this.setState({ password : event.target.value })
    }

    onRenderUsername = ()=>{
        const {username} = this.state
        return(
            <>
            <label className='username' htmlFor='username'>Username</label>
            <br/>
            <input
            className='enter'
            type='text'
            id='username'
            value={username} 
            onChange = {this.onInputUsername} />
            </>
        )
    }

    onRenderPassword = ()=>{
        const {password} = this.state
        return(
            <>
            <label className='username' htmlFor='password'>Password</label>
            <br/>
            <input
            className='enter'
            type='password'
            id='password'
            value={password} 
            onChange = {this.onInputPassword} />
            </>
        )
    }


    render(){
        const {errorMsg , showError} = this.state
        const jwtToken = Cookies.get('jwt_token')
        if(jwtToken!==undefined){
            return <Redirect to="/" />
        }
        return(
            <div className='login-page'>
                <form className='login-form' onSubmit={this.submitForm}>
                    <div className='input-container'>{this.onRenderUsername()}</div>
                    <div className='input-container'>{this.onRenderPassword()}</div>
                    <button type='submit' className='login'>LogIn</button>
                    {showError && <p className='error-msg'>{errorMsg}</p>}
                </form>
            </div>
        )
    }
}

export default LoginForm