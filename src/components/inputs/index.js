export const InputTextLabel = (props) => {
    return(
        <div className="mt-4">
            <label htmlFor="name" className="flex font-medium mb-1">{props.label ?? ''}</label>
            <input type="text" name={props.var} className="rounded-xl p-2 text-black active:ring-red-500" placeholder={props.placeholder ?? ''}></input>
        </div>
    )
}

export const InputPasswordLabel = (props) => {
    return(
        <div className="mt-4">
            <label htmlFor="name" className="flex font-medium mb-1">{props.label ?? ''}</label>
            <input type="password" name={props.var} className="rounded-xl p-2 text-black active:ring-red-500" placeholder={props.placeholder ?? ''}></input>
        </div>
    )
}

