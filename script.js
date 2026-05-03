function search(){

    var username = document.getElementById("inputUser").value;
    var url = `https://api.github.com/users/${username}`;
    

    $.getJSON(url, (user) => {
        document.getElementById("name").innetHTML = user.name;
        document.getElementById("url").innerHTML = user.html_url;
        document.getElementById("company").innerHTML = user.company;
        document.getElementById("avatar_url").innerHTML = `<img src=${user.avatar_url} alt="" id="avatar_url" width="250" height="250" class="shadow rounded"></img>`

        

    })

}
