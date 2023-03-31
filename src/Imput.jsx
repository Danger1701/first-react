export function Input () {
    return <input onChange={ (e) => {
        return console.log(e.target.value);}}/>
}