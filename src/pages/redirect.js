import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import useReducerApp from "../store/store";

export default function Redirect() {

    const params = useParams();

    const [state,dispatch] = useReducerApp();
    const [item,setItem] = useState(null);

    useEffect(() => {
        const urls = localStorage.getItem('urls');
        if (urls) {
            const temp = JSON.parse(urls);
            const id = params.id;
            
            const itemUrl = temp.find(i => i.shortUrl === id);
            if (itemUrl) {
                setItem(itemUrl);
                dispatch({type: 'ADD_VIEW', data: id });
                setTimeout( () => { window.location.href = itemUrl.url;}, 2000);
                
            } else {
                setItem(undefined);
            }

        }
    },[]);
    return <Loader item={item} id={params.id}/>
}