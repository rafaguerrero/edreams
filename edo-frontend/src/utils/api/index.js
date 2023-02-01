
export const apiCall = async (path) => {
    return fetch(`http://${window.location.hostname}:3000/${path}`)
    .then((res) => {
        if (res.ok) return res.json();
        throw new Error('There was an error');
    })
    .catch((e) => {
        console.log("----------------");
        console.log(e);
        console.log("----------------");
    });
};
