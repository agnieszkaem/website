var objPeople = [{
        nazwa: "Filipo",
        hasło: "1234567",
    }
]

function login() {
	var username = document.getElementById('nazwa').value
	var password = document.getElementById('hasło').value

	
	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].nazwa && password == objPeople[i].hasło) {
            console.log(nazwa + ' is logged in!!!')
            window.location.href = "../start/dif_main.html";
			
			break
		} else {
			
			console.log('incorrect username or password')
		}
    }

}
function registerUser() {
    
    var registerUsername = document.getElementById('newUsername').value
    
    var registerPassword = document.getElementById('newPassword').value
    
    var newUser = {
        nazwa: registerUsername,
        hasło: registerPassword,
    }
    
    for(var i = 0; i < objPeople.length; i++) {
        
        if(registerUser == objPeople[i].nazwa) {
            
            alert('That username is alreat in user, please choose another')
            
            break
        
        } else if (registerPassword.length < 8) {
            
            alert('That is to short, include 8 or more characters')
            
            break
        }
    }
    
    objPeople.push(newUser)

    console.log(objPeople)

        
}


