	
<script>
import db from "@/./firebase/init";

var myName = prompt("Enter your name");

	function sendMessage() {
		// get message
		var message = document.getElementById("message").value;

		// save in database
		firebase.database().ref("messages").push().set({
			"sender": myName,
			"message": message
		});

		// prevent form from submitting
		return false;
	}
</script>

<!-- create a form to send message -->
<form onsubmit="return sendMessage();">
	<input id="message" placeholder="Enter message" autocomplete="off">

	<input type="submit">
</form>