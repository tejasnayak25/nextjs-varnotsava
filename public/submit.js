document.getElementById('sendmail').onclick = async () => {
    let formData = {
        "team_name": document.getElementById("team_name").value,
        "email": document.getElementById("email").value,
        "college": document.getElementById("college").value,
        "event": document.getElementById("event").value,
        "team_details": document.getElementById("team_details").value,
    }

    const response = await fetch("/register/submit", {
        method: "POST",                
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),              
    });    
    
    document.getElementById("sentmail").classList.replace("hidden", "flex");
}