document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const addNewFilmForm = document.getElementById('add-new');
    // const mainFormButtonsAdd = document.getElementById('main-form-buttons_add');
    const showAddNewFilmBlock = document.getElementById('header-btn');
    const formTitle = document.getElementById('title');
    const formYear = document.getElementById('year');
    const formCountry = document.getElementById('country');
    const formGener = document.getElementById('gener');
    const formPoster = document.getElementById('poster');
    const formDescription = document.getElementById('description');
    
    const clean = addNewFilmForm.reset = (e) =>{
        formTitle.value = '';
        formYear.value = '';
        formCountry.value = '';
        formGener.value = '';
        formPoster.value = '';
        formDescription.value = '';
    }

    addNewFilmForm.onsubmit = (e) => {
        e.preventDefault();
        
        const div = document.getElementById('div');
        const mainFilmBlock = document.createElement('div');
        mainFilmBlock.className = 'main-film';
        const mainFilmImg = document.createElement('div');
        mainFilmImg.className = 'main-film-img';
        const mainFilmImgImage = document.createElement('img');
        mainFilmImgImage.alt = 'picture';
        mainFilmImgImage.src = 'https://www.film.ru/sites/default/files/images/1(70).jpg';
        mainFilmImgImage.className = 'main-film-img_image';
        const mainFilmContent = document.createElement('div');
        mainFilmContent.className = 'main-film-content';
        const mainFilmContentH2 = document.createElement('h2');
        mainFilmContentH2.className = 'main-film-content_h2';
        const mainFilmContentText = document.createElement('div');
        mainFilmContentText.className = 'main-film-content_text';
        const mainFilmContentInfo = document.createElement('div');
        mainFilmContentInfo.className = 'main-film-content-info';
        const mainFilmContentButton = document.createElement('div');
        mainFilmContentButton.className = 'main-film-content-button';
        const mainFilmContentButtonDelete = document.createElement('button');
        mainFilmContentButtonDelete.className = 'main-film-content-button-delete';
        const mainFilmContentButtonEdit = document.createElement('button');
        mainFilmContentButtonEdit.className = 'main-film-content-button-edit';
        const ul = document.createElement('ul');
        
        for (let i = 0; i <= 3; i++){
            const li = document.createElement('li');
            const mainFilmContentInfoDiv = document.createElement('div');
            mainFilmContentInfoDiv.className = 'main-film-content-info-div';
            const mainFilmContentInfoDivSpan = document.createElement('span');
            mainFilmContentInfoDivSpan.className = 'main-film-content-info-div_span';
            mainFilmContentInfoDiv.id = '_' + i;
            if(mainFilmContentInfoDiv.id == '_0'){
                mainFilmContentInfoDiv.textContent = 'COUNRTY:';
                mainFilmContentInfoDivSpan.textContent = formCountry.value;
                mainFilmContentInfoDiv.id = Math.random()*10 + i;
            }else if (mainFilmContentInfoDiv.id == '_1'){
                mainFilmContentInfoDiv.textContent = 'Year:';
                mainFilmContentInfoDivSpan.textContent = formYear.value;
                mainFilmContentInfoDiv.id = Math.random()*10 + i;
            }else if(mainFilmContentInfoDiv.id == '_2'){
                mainFilmContentInfoDiv.textContent = 'GENER:';
                mainFilmContentInfoDivSpan.textContent = formGener.value;
                mainFilmContentInfoDiv.id = Math.random()*10 + i;
            }else if(mainFilmContentInfoDiv.id == '_3'){
                mainFilmContentInfoDiv.textContent = 'ACTORS:';
                mainFilmContentInfoDivSpan.textContent = formPoster.value;
                mainFilmContentInfoDiv.id = Math.random()*10 + i;
            }
            ul.append(li);
            li.append(mainFilmContentInfoDiv);
            mainFilmContentInfoDiv.append(mainFilmContentInfoDivSpan);
        }
        mainFilmContentH2.textContent = formTitle.value;
        mainFilmContentText.textContent = formDescription.value;

        div.append(mainFilmBlock);
        mainFilmBlock.append(mainFilmImg);
        mainFilmImg.append(mainFilmImgImage);
        mainFilmBlock.append(mainFilmContent);
        mainFilmContent.append(mainFilmContentH2);
        mainFilmContent.append(mainFilmContentText);
        mainFilmContent.append(mainFilmContentInfo);
        mainFilmContentInfo.append(ul);
        mainFilmContent.append(mainFilmContentButton);
        mainFilmContentButton.append(mainFilmContentButtonDelete);
        mainFilmContentButton.append(mainFilmContentButtonEdit);






        clean();
    }
    
    showAddNewFilmBlock.onclick = (e) => {
        const isShowed = addNewFilmForm.style.display !== 'none';
        
        if (isShowed) {
            addNewFilmForm.style.display = 'none';
        } else {
            addNewFilmForm.style.display = 'block';
        }
    }
    
    
    
    
    
    
    
    
    // createdFilmBlock.innerHTML = 'hui';
    // const dataFromInp
    // const filmId = nameFromInput.toLowerCase();
    // const films = JSON.parse(localStorage.getItem('films')) || [];
    // const newFilm = {name: 'name', date: 'date'};
    // films.push(newFilm);
    // localStorage.setItem('films', JSON.stringify(films));
    











});