const getUserApi = (page = 1, pageSize = 100, keyword = '') => {

    let url = new URL("https://avl-frontend-exam.herokuapp.com/api/users/all")
    url.search = new URLSearchParams({ page, pageSize, keyword }).toString()
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
}

export default getUserApi