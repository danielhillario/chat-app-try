const { useEffect, useState } = require("react");
const supabase = require("../utils/supabase");

function Chat() {
    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState("");

    let msgMarker = messages.map(function (message) {
        return (
            <div>
                <p>{message.content}</p>
                <p>Written by {message.email}</p>
            </div>
        );
    });

    function getAllMsg() {
        // Load all the messages in the database!
        supabase.from("messages").select("*").order("id", {ascending: false})
            .then(function (data) {
                setMessages(data.body);
            });
    }

    useEffect(function () {
        getAllMsg();
        setInterval(function () {
            getAllMsg();
        }, 1000);
    }, []);

    function handleSubmitMsg(event) {
        event.preventDefault();
        // Save the message to the db
        supabase.from("messages").insert({ content, email: "temporary" })
            .then(function (data) {
                console.log(data);
        })
        console.log("The message submitted!");
    }
    
    function handleMessage(event) {
        setContent(event.target.value);
    }
    

    return (
        <div>
            <form>
                <input type="text" placeholder="New Message" value={content} onChange={handleMessage}/> <br /> <br />
                <input type="submit" value="Send" onClick={handleSubmitMsg}/>
            </form>
            <h3>Chat Messages Go Here!</h3>
            {msgMarker}
        </div>
    );
}

module.exports = Chat;