import "./main.less";

fetch('http://localhost:8080/hello')
    .then(res => console.log(res.body));
