const { useState } = require("react");
const supabase = require("../utils/supabase");

function SignUp() {
    
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassw(event.target.value);
    }

    function handleSignIn(event) {
        event.preventDefault();
        supabase.auth.signIn({
            email: email,
            password: passw,
        }).then(function (data) {
            console.log(data);
        })
    }

    function handleSignUp(event) {
        event.preventDefault();
        supabase.auth.signUp({
            email: email,
            password: passw,
        }).then(function (data) {
            console.log(data);
        })
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Email" value={email} onChange={handleEmailChange}/> &nbsp;
                <input type="password" placeholder="Password" value={passw} onChange={handlePasswordChange}/> <br /> <br />
                <input type="submit" value="Login" onClick={handleSignIn} /> &nbsp;
                <input type="submit" value="Signup" onClick={handleSignUp} />
            </form>
        </div>
    );
}


module.exports = SignUp;