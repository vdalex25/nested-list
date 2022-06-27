import {FC} from "react";
import {IItem, IObject} from "../types/types";
import NestedListItem from "./nested-list-item";
import {List} from "../styles/nested-list-styles";

interface NestedListPrpps {
    list: IItem[];
    addItem: (item: IItem, child: boolean) => void;
    removeItem: (item: IItem) => void
}

const NestedList: FC<NestedListPrpps> = ({list, addItem, removeItem}) => {

    const itemNumerator: IObject = {};
    return (<List>
        {list.map((item, key) => {

            const branch = (item.level > 0 && key > 0 && item.level < list[key - 1].level) ? list.slice(0, key).reverse().findIndex((element) => {
                return element.level === item.level
            }) + 1 : 1;
            const id = itemNumerator[item.parentId] ? itemNumerator[item.parentId] = (itemNumerator[item.parentId] + 1) : itemNumerator[item.parentId] = 1;

            return (<NestedListItem key={item.id} item={item} id={id} branch={branch} addItem={addItem}
                                    removeItem={removeItem}/>)
        })}
    </List>)
}

export default NestedList