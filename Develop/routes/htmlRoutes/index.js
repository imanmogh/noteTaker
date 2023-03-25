const path = require(`path`);
const router = require(`router`);

router.get('./notes.html', (res, req) => {
    res.sendFile(path.join(__dirname, `../../public/notes.html`));
})

router.get('*', (res, req) => {
    res.sendFile(path.join(__dirname, `../../public/index.html`));
})