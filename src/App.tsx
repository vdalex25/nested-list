import React, {useState} from 'react';
import NestedList from "./components/nested-list";
import {IItem} from "./types/types";
import {Container, Title} from "./styles/app-styles";


const App = () => {
    const [list, setList] = useState<IItem[]>([{
        id: '1', text: "Branch", level: 1, parentId: "none",
    }]);

    const generateUUID = () => {
        return "xxx-xxx-xxx".replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0, v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    const addItem = (item: IItem, child: boolean) => {
        const newItem: IItem = {
            id: generateUUID(),
            text: "New branch",
            level: child ? item.level + 1 : item.level,
            parentId: child ? item.id : item.parentId
        }

        setList((prevState: IItem[]) => {
            const index: number = prevState.findIndex((element) => {
                return element === item;
            })

            if (newItem.level === 1 || index === prevState.length - 1) {
                return [...prevState, newItem]
            }

            const indexTo = prevState.findIndex((element, key) => {
                return (key > index && element.level <= item.level);
            })
            return [...prevState.slice(0, indexTo), newItem, ...prevState.slice(indexTo)]
        })
    }

    const removeItem = (item: IItem) => {
        setList((prevState: IItem[]) => {
            const index: number = prevState.findIndex((element) => {
                return element === item;
            })
            const nextIndex: number = prevState[index + 1] && prevState[index].level < prevState[index + 1].level ?
                prevState.slice(index + 1).findIndex(element => {
                return element.level <= prevState[index].level;
            }) + index + 1 : index + 1;

            return [...prevState.slice(0, index), ...prevState.slice(nextIndex)]
        })
    }

    return (<Container>
        <Title>Nested List</Title>
        <p>Simple example of nested list</p>
        <hr/>
        <NestedList list={list} addItem={addItem} removeItem={removeItem}/>
    </Container>);
}

export default App;
