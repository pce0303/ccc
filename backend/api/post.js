// 게시물 작성
app.post('/new-post', async (req, res) => {
    const { title, detail, author } = req.body;
    const [result] = await post.query(
        'INSERT INTO post_table (title, detail, author) VALUES (?, ?, ?)',
        [title, detail, author]
    );
    res.status(201).json({ id: result.insertId });
});

// 게시물 수정
app.put('/new-post/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { title, detail } = req.body;
    await post.query(
        'UPDATE post_table SET title = ?, detail = ? WHERE id = ?',
        [title, detail, id]
    );
    res.sendStatus(204);
});

// 게시물 삭제
app.delete('/post/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    await post.query('DELETE FROM post_table WHERE id = ?', [id]);
    res.sendStatus(204);
});
