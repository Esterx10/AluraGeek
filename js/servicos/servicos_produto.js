// const apiUrl = "http://localhost:3000/produtos";

const apiUrl = "https://alura-geek-seven-wheat.vercel.app/";

const listaProduto = () => {
    return fetch(apiUrl)
        .then((res) => res.json())
        .catch((er) => console.log(er));
};

const criarProduto = (nome, preco, imagem) => {
    return fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, preco, imagem }),
    })
        .then((res) => res.json())
        .catch((er) => console.log(er));
};

const eliminarProduto = (id) => {
    return fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

export const servicosProdutos = {
    listaProduto,
    criarProduto,
    eliminarProduto
};
