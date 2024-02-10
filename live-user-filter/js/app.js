(() => {

    const state = {
        API_URL: '../public/data/users.json',
        USER_DATA: [],
    }

    const userListContainer = document.querySelector('.list-users');
    const inputSearch = document.querySelector('.input-search');

    const loadUserData = async () => {
        showSpinner();
        const result = await fetch(state.API_URL);
        const data = await result.json();
        await hideSpinner();

        const { usuarios } = data;
        state.USER_DATA = usuarios

        filterUsers()
    }

    const filterUsers = (filter = '') => {
        userListContainer.innerHTML = '';
        state.USER_DATA.forEach(user => {
            const lowerCaseName = user.nombre.toLowerCase();

            if (lowerCaseName.includes(filter.toLowerCase())) {

                const cardUser = `
                    <div class="card-user">
                        <img loading="lazy" alt="${user.nombre} profile image" src="${user.foto}">
                        <section class="user-info">
                            <span class="user-name">${user.nombre}</span>
                            <p class="user-location">${user.pais}</p>
                        </section>
                    </div>`;
                userListContainer.insertAdjacentHTML("beforeend", cardUser);
            }
        });
    }

    const showSpinner = () => {
        userListContainer.innerHTML = `
        <div class="spinner">Loading...</div>
        `;
    }

    const hideSpinner = () => {
        userListContainer.innerHTML = ''
    }


    inputSearch.addEventListener('keyup', (event) => {
        filterUsers(event.target.value)
    })


    loadUserData();
})();