const posts = {
    "id": 1,
    "title": 'post title',
    "body": "body",
}

for(let post in posts) {
    console.log("properties -",post) 
    console.log("values -", posts[post])
}