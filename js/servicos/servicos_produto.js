
const listaProduto = async () => {
    try {
        const res = await fetch("https://json-test-rosy.vercel.app/produtos");
        return await res.json();
    } catch (er) {
        return console.log(er);
    }
};

const criarProduto = async (nome, preco, imagem) => {
    try {
        const res = await fetch("https://json-test-rosy.vercel.app/produtos", {
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
        const res = await fetch(`${"https://json-test-rosy.vercel.app/produtos"}/${id}`, {
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
