import { FC, useContext } from "react";
import { AppContext } from "../../context/appContext";



export const  Questions: FC = ()=> {
    const {name} = useContext(AppContext);
    return (<div> name: { name}
    </div>)
} 