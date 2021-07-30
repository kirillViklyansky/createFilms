document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const addNewFilmForm = document.getElementById('add-new');
    const showAddNewFilmBlock = document.getElementById('header-btn');
    const body = document.getElementsByTagName('body');
    console.log(body);

    
    addNewFilmForm.onsubmit = (e) => {
        e.preventDefault();
        
        const div = document.getElementById('div');
        // const createdFilmBlock = document.createElement('div');
        const mainFilmBlock = document.createElement('div');
        mainFilmBlock.className = 'main-film';
        const mainFilmImg = document.createElement('div');
        mainFilmImg.className = 'main-film-img';
        const mainFilmImgImage = document.createElement('img');
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
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const mainFilmContentInfoDiv = document.createElement('div');
        mainFilmContentInfoDiv.className = 'main-film-content-info-div';
        const mainFilmContentInfoDivSpan = document.createElement('span');
        mainFilmContentInfoDivSpan.className = 'main-film-content-info-div_span';
        const mainFilmContentButton = document.createElement('div');
        mainFilmContentButton.className = 'main-film-content-button';
        const mainFilmContentButtonDelete = document.createElement('button');
        mainFilmContentButtonDelete.className = 'main-film-content-button-delete';
        const mainFilmContentButtonEdit = document.createElement('button');
        mainFilmContentButtonEdit.className = 'main-film-content-button-edit';

        



        // createdFilmBlock.innerHTML = 'hui';
        // const dartaFromInp
        // const filmId = nameFromInput.toLowerCase();
        // const films = JSON.parse(localStorage.getItem('films')) || [];
        // const newFilm = {name: 'name', date: 'date'};
        // films.push(newFilm);
        // localStorage.setItem('films', JSON.stringify(films));
        div.append(mainFilmBlock);
        mainFilmBlock.append(mainFilmImg);
        mainFilmImg.append(mainFilmImgImage);
        div.append(mainFilmContent);
        mainFilmContent.append(mainFilmContentH2);
        mainFilmContent.append(mainFilmContentText);
        mainFilmContent.append(mainFilmContentInfo);
        mainFilmContentInfo.append(ul);
        ul.append(li);
        li.append(mainFilmContentInfoDiv);
        mainFilmBlock.append(mainFilmContentButton);
        mainFilmContentButton.append(mainFilmContentButtonDelete);
        mainFilmContentButton.append(mainFilmContentButtonEdit);

    }

    showAddNewFilmBlock.onclick = (e) => {
        const isShowed = addNewFilmForm.style.display !== 'none';

        if (isShowed) {
            addNewFilmForm.style.display = 'none';
        } else {
            addNewFilmForm.style.display = 'block';
        }
    }





















});