function logar(e) {
    e.preventDefault();
    alert('Logado com sucesso!');
}

export const ButtonConfirm = (props) => {

    return (
        <div className="mt-6">
            <button type="submit" onClick={logar} className={"p-4 flex mx-auto rounded-xl bg-gray-700 transition hover:bg-gray-800 active:bg-blue-700"}>
                {props.children}
            </button>
        </div>
    )
}