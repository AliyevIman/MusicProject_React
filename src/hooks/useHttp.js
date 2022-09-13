const Http = () => {

    const request = async (url, method = "GET", body = null) => {
        const res = await fetch(url);
        const data = await res.json();

        return data.map(getMusicItems);
    }


    return {
        request
    }


    function getMusicItems(obj) {

        const {
            musicUrl,
            name
        } = obj.musics[0].music;

        const nameMusician = obj.name;
        const cover = obj.photo;

        const objSingle = {
            singer: nameMusician,
            cover,
            name,
            musicSrc: musicUrl,
        }
        return objSingle

    }

 


}

export default Http