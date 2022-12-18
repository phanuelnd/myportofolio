/* 
<template id="blog-template">
    <div class="blog">
        <h2 class="blog-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <h4 class="blog-author">Lorem, ipsum dolor.</h4>
        <p class="blog-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, veniam
            sint similique corrupti aliquam saepe. Dignissimos labore veniam ducimus ex obcaecati.
            Modi odit doloribus fugit magni eius obcaecati accusantium labore!</p>
        <div class="btn-list">
            <button id="blog-delete">Delete</button>
        </div>
    </div>
</template> 
*/

/**@type {Array} */
let blogs = JSON.parse(localStorage.getItem("blogs")) || []

const blogListEl = document.getElementById("blog-list")

/**@type {HTMLTemplateElement} */
const blogTemplate  = document.getElementById("blog-template")

blogListEl.innerHTML = ""

if (blogs.length === 0) {
    blogListEl.innerHTML = `<h4>No Blogs</h4>`;
}

blogs.forEach((blog, index) => {
    const newBlogEl = blogTemplate.content.firstElementChild.cloneNode(true)
    
    newBlogEl.querySelector("#blog-title").innerHTML = blog.title
    newBlogEl.querySelector("#blog-author").innerHTML = blog.author
    newBlogEl.querySelector("#blog-content").innerHTML = blog.content

    const deleteButton = newBlogEl.querySelector("#blog-delete")
    deleteButton.addEventListener("click", e => {
        blogs.splice(index, 1)
        localStorage.setItem("blogs", JSON.stringify(blogs))
        window.location.reload()
    })

    blogListEl.appendChild(newBlogEl)
})



