document.getElementById('login').addEventListener('click',(e) =>{
    e.preventDefault()
    const id = document.getElementById("email").value
    const pwd = document.getElementById("password").value
    const url = `http://localhost:8081/student/${id}`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText)
            const userDetail = JSON.parse(xhr.responseText)
            window.myObject = userDetail
            if(pwd==userDetail.pwd)
            {
                window.location.replace("./index.html");
            }
        }
        else{
            const output = "Enter valid details."
            document.getElementById("warning").innerHTML= output
        }
    }
    xhr.send()
})