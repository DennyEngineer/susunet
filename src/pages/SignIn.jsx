import SignInForm from '../components/SignInForm';
import '../styles/signIn.css'

function SignIn() {
    return ( 
        <div className='container'>
            <div className='left-div'>
                <div className='inner-div'>
                <p>Welcome to,</p>
                <h1>SUSUNET</h1>
                <p>Micro-Savings Collector Manager is a lightweight web application designed to help traditional savings collectors (also known as susu collectors) manage their daily operations more efficiently.</p>
                </div>
            </div>
            <div className='right-div'></div>
            <SignInForm />
        </div>
    );
}

export default SignIn;