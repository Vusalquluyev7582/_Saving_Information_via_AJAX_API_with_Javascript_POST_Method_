document.querySelector("#getOne").addEventListener("click", getOne)

document.querySelector("#getAll").addEventListener("click", getAll)

document.querySelector("#postData").addEventListener("click", postData)

function getOne() {

}

function getAll() {

}

function postData() {
    const data = {
        userId: 1,
        title: "new title",
        body: "new body"
    }
    let json = JSON.stringify(data)
    let url = "https://jsonplaceholder.typicode.com/posts"
    let xhr = new XMLHttpRequest()
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
    xhr.onload = function () {
        if (xhr.status === 201 && xhr.readyState === 4) {
            let post = xhr.responseText
            document.querySelector("#melumatlar").innerHTML += post
        }
    }
    xhr.send(json)
}