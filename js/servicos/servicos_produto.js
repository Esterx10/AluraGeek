// const apiUrl = "http://localhost:3000/produtos";

const apiUrl = "https://alura-geek-seven-wheat.vercel.app/";

const listaProduto = async () => {
    try {
        const res = await fetch(apiUrl);
        return await res.json();
    } catch (er) {
        return console.log(er);
    }
};

const criarProduto = async (nome, preco, imagem) => {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, preco, imagem }),
        });
        return await res.json();
    } catch (er) {
        return console.log(er);
    }
};

const eliminarProduto = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE"
        });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
};

export const servicosProdutos = {
    listaProduto,
    criarProduto,
    eliminarProduto
};
