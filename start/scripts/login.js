var objPeople = [{
        nazwa: "Dominik",
        hasło: "1234567",
    }
]

function login() {
	var username = document.getElementById('nazwa').value
	var password = document.getElementById('hasło').value

	
	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].nazwa && password == objPeople[i].hasło) {
            console.log(nazwa + ' jest zalogowany!')
            window.location.href = "../start/dif_main.html";
			
			break
		} else {
			
			console.log('błędne hasło')
		}
    }

}
function registerUser() {
    
    var registerUsername = document.getElementById('newUsername').value
    
    var registerPassword = document.getElementById('newPassword').value
    
    var newUser = {
        nazwa: registerUsername,
        hasło: registerPassword
    }
    
    for(var i = 0; i < objPeople.length; i++) {
        
        if(registerUsername == objPeople[i].nazwa) {
            
            alert('Ta nazwa jest już zajęta, wybierz inną');
            
            return;
        
        } else if (registerPassword.length < 6) {
            
            alert('Zbyt krótkie hasło');
            
            return;
        }
    }

    objPeople.push(newUser)

        
    
    


    console.log(objPeople)

    window.location.href = '../start/rejestracja.html';
}


