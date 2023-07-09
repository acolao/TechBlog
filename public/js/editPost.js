document.getElementById('editPost').addEventListener('click', async event => {
    event.preventDefault()

    const post = {
        title: document.getElementById('title').value, 
        body: document.getElementById('body').value 
    }

    const res = await fetch(`/api/posts/${event.target.dataset.id}`, {
        method: 'PUT',
        body: JSON.stringify('post'),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    location.reload()
})

document.getElementById('deletePost').addEventListener('click', async event => {
    await fetch(`/api/posts/${event.target.id}`, {
        method: 'DELETE'
    })

    document.location.replace('/')
})

