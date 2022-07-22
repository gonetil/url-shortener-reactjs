import { useState } from "react"

export default function CreateForm({dispatch}) {
   
    const [url,setUrl] = useState('');

    function handleChange(e) {
        const value = e.target.value;
        setUrl(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: 'ADD', data: url});
        setUrl('');
    }

    return (<form onSubmit={handleSubmit}>
            <input value={url} onChange={handleChange} />
            <button type='submit'>Create URL</button>
    </form>)
}