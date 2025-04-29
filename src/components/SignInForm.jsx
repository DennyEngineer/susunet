import '../styles/index.css'
import '../styles/signInForm.css'

function SignInForm() {
    return (
        <form action='#'>
            <div className="input-container">
                <label htmlFor="idNumber">Email Address</label>
                <input id='idNumber' type='email'/>
            </div>
            <div className="input-container">
                <label htmlFor="idNumber">Password</label>
                <input id='idNumber' type='password'/>
            </div>
            <button type='submit'>Sign In</button>
        </form>
    );
}

export default SignInForm;