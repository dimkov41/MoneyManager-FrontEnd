const getExRate = async(base) => {
    const props = {
        method: 'GET'
    };

    return await fetch("https://api.exchangeratesapi.io/latest?base=" + base)
        .then(response => response.json());
};

export default {
    getExRate
}