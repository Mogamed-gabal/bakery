let body=document.querySelector("body")
let nav=document.getElementById("nav")
let blog=document.getElementById("blog")
let menue=document.getElementById("drag-menue")
alert("welcome in my bekary")
body.addEventListener("click",()=>
{
    nav.classList.add("position-fixed","w-100",)
    nav.classList.replace("bg-transparent","bg-dark")
})

function controllBlog()
{
    blog.addEventListener("mouseenter",function()
    {
        menue.classList.remove("d-none")
    })
    blog.addEventListener("mouseleave",function()
    {
        menue.classList.add("d-none")
    }
    )
}
controllBlog()