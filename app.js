const express = require('express');
const app = express();
var cors = require('cors');
 
app.use(cors());
app.use(express.json());

let posts = []; // 포스트 데이터를 저장할 배열
let currentId = 1; // 현재 id 값

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === Number(id));

    if (post) {
        res.send(post);
    } else {
        res.sendStatus(404);
    }
});

app.post('/posts', (req, res) => {
  const postData = req.body;
  postData.id = currentId++;
  posts.push(postData); // 포스트 데이터를 배열에 추가

  console.log(posts); // 콘솔에 현재 포스트 데이터 출력
  res.sendStatus(200); // 성공 응답
});

app.patch('/posts/:id', (req, res) => {
    const id = req.params.id;
    const { title, body, publish, newCreateAt } = req.body;
  
    const post = posts.find(post => post.id === Number(id));
  
    if (post) {
      post.title = title;
      post.body = body;
      post.publish = publish;
      post.newCreateAt = newCreateAt;
  
      res.send(post);
    } else {
      res.sendStatus(404);
    }
  });

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id

    posts = posts.filter(post => post.id !== Number(id))
    res.send(posts)
})

app.listen(3100, () => {
    console.log("Server is running!");
})
