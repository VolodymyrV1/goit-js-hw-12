import './css/comon.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";


const form = document.querySelector(".form");
const searchBtn = document.querySelector(".searchBtn");
const moreBtn = document.querySelector(".moreBtn");
let searchResult;

let page;


form.addEventListener("submit", handlerSubmit);
moreBtn.addEventListener("click", onLoadMore);

function handlerSubmit(event) {
    event.preventDefault();
    page = 32;
    searchBtn.disabled = true;
    clearGallery();
    searchResult = event.target.elements['search-text'].value.trim();

    if (searchResult === "") {
        showToast("Sorry, you didn’t enter any value!");
        form.reset();
        return;
    }

    showLoader();
    
    getImagesByQuery(searchResult, page)
        .then((data) => {
           
            if (data.hits.length === 0) {
                showToast("Sorry, there are no images matching your search query. Please try again!");
                return;
            }       
            createGallery(data.hits);
            console.log(data.hits);
            moreBtn.classList.remove("hidden");
            // if(data.totalHits ) {
            //     console.log("hyetaaa");
                
            // }
            
        })
        .catch((error) => {
            showToast(`EROR, ${error}`);
            console.log(error);     
        })
        .finally(() => {            
            hideLoader();
        })
    
        form.reset()   
}

async function onLoadMore() {
    page += 1;
    moreBtn.disabled = true;
    showLoader();

        try {
            const data = await getImagesByQuery(searchResult, page);
            console.log(data);
            console.log(page);
            
            createGallery(data.hits);


        } catch(error) {
            console.log(error);
            
            
        } finally {
            
            moreBtn.disabled = false;
            hideLoader();

        }
    
}





function showToast(message, ) {
    iziToast.error({
        message,
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#ffffff',
    });
}


function totalHits(data) {
    const totalPage = Math.ceil(data.totalHits / data.length)
    console.log(totalPage);
    
    if(page > totalPage ) {
        console.log("HYETAAAAAA");
        moreBtn.classList.add("hidden");
        console.log(totalPage);
        
        
    }
    
}

    
