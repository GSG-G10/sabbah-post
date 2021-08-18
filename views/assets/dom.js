const createEle = (tag, className, parent, text) => {
    const element = document.createElement(tag)
    element.classList.add(className)
    parent.appendChild(element)
    if (tag === 'img'){
        element.src = tag
    }else{

        element.textContent = text;
    }
    return element
}
const postsSecion = document.querySelector('.posts-present');
const appenData = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        const name = arr[i].user_name;
        const postText = arr[i].post_text;
        const imgUrl = arr[i].link_img;
        const container = createEle('div', 'post-container', postsSecion, '');
        createEle('h2', 'h2', container, name)
        createEle('p', 'p', container, postText)
        createEle('div', 'img-cont', container, '')
        createEle('img', 'img', container, imgUrl)

    }
}