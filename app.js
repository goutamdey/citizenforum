/*-----------------------------------Sidebar-----------------------------------------*/


let sidebar_btn = document.querySelector(".btn");
let sidebar = document.querySelector(".sidebar");
setInterval(()=>{
    sidebar.style.height = document.body.scrollHeight + 'px';
}, 1000)

sidebar_btn.onclick = function(){
    this.classList.toggle("click");
    sidebar.classList.toggle("show");
};

let study_material_btn = document.querySelector(".stdy-mtrl-btn");
study_material_btn.onclick = function(){
    document.querySelector("nav ul .material-show").classList.toggle("show");
    document.querySelector("nav ul .first").classList.toggle("rotate");
};

/*let activeElem = document.querySelector("nav ul li");
 active.onclick = function(){
    this.classList.add("active");
    let parentElem = this.parentNode;
    console.log(parentElem);
};
*/
/*X-----------------------------------Sidebar-----------------------------------------X*/

/*-------------------------------------Modal-------------------------------------------*/

// Modal Element Creation
const modalContainer = document.createElement("div");
const modalHeader = document.createElement("div");
const modalTitle = document.createElement("div");
const modalCloseButton = document.createElement("button");
const modalIframe = document.createElement("iframe");
const overlay = document.createElement("div");
const downloadButton = document.createElement("button");

modalContainer.classList.add("modal");
modalContainer.id = "modal";

modalHeader.classList.add("modal-header");
modalTitle.classList.add("title");

modalCloseButton.classList.add("close-button");
modalCloseButton.innerHTML = "&times;"

modalIframe.classList.add("modal-body");
modalIframe.setAttribute("allowfullscreen", "true");
overlay.id = "overlay";

downloadButton.innerText = "Download";
downloadButton.id = "dwnld-btn";

// Attach Element
modalHeader.appendChild(modalTitle);
modalHeader.appendChild(downloadButton);
modalHeader.appendChild(modalCloseButton);

modalContainer.appendChild(modalHeader);
modalContainer.appendChild(modalIframe);

document.body.appendChild(overlay);


document.body.addEventListener("click", function(e){
    if(e.target.hasAttribute("data-doc-id")){
        modalTitle.textContent = e.target.innerText;
        modalIframe.src = `https://drive.google.com/file/d/${e.target.getAttribute("data-doc-id")}/preview`;
    
        downloadButton.onclick = function(){
            window.location = `https://drive.google.com/uc?export=download&id=${e.target.getAttribute("data-doc-id")}`;
        };
        overlay.classList.add("active");
        document.body.appendChild(modalContainer);
        
    } else if(e.target.hasAttribute("data-mega-id")) {
        modalTitle.textContent = e.target.innerText;
        modalIframe.src = `https://mega.nz/embed/${e.target.getAttribute("data-mega-id")}`;
        downloadButton.style.display = "none";
        overlay.classList.add("active");
        document.body.appendChild(modalContainer);
    } else return;
});

modalCloseButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal(e){
    document.body.removeChild(modalContainer);
    overlay.classList.remove('active');
}

/*X-------------------------------------Modal-------------------------------------------X*/