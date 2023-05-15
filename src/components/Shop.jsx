import { useEffect, useState } from "react"
import { API_URL, API_KEY } from "../config";
import {Preloader} from './Preloader';
import { GoodsList } from "./GoodsList";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setIsLoading(false);
            });
    }, []);

    return (
        <main className="content container">
            {isLoading ? <Preloader /> : <GoodsList goods={goods}/>}
        </main> );
}

export { Shop }