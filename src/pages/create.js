import { useEffect } from "react";
import CreateForm from "../components/createForm";
import Item from "../components/item";
import ItemsContainer from "../components/itemsContainer";
import MainContainer from "../components/mainContainer";
import useReducerApp from "../store/store";

export default function Create() {
    const [state,dispatch] = useReducerApp();

    useEffect( () => {
        dispatch({ type: 'LOAD' })
    },[]);
        return <div>
            <MainContainer>
                <CreateForm dispatch={dispatch}></CreateForm>
                <ItemsContainer>
                    {state.items.map((item,key) => <Item key={key} item={item} />)}
                </ItemsContainer>
            </MainContainer>
    </div>;
}