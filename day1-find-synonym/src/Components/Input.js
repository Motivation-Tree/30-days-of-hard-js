
const Input = (props)=>{
    const {searchWord, onChangeWord, onFindClick, onClearClick} = props;
    return (

        <div style={{}}>
            <input type="text" value={searchWord} onChange={onChangeWord}></input>
            <button onClick={onFindClick}> Find</button>
            <button onClick={onClearClick}> Clear</button>
        </div>
    );

}

export default Input;