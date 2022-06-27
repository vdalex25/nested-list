import {FC} from "react";
// @ts-ignore
import {ReactComponent as Trash} from '../assets/images/trash.svg';
// @ts-ignore
import {ReactComponent as Folder} from '../assets/images/folder.svg';
// @ts-ignore
import {ReactComponent as Folders} from '../assets/images/folders.svg';
import {IItem} from "../types/types";
import {
    Branch,
    BranchButtons,
    BranchPath,
    BranchText,
    Button,
    ItemContent,
    ListItem
} from "../styles/nested-list-styles";


interface NestedListItemProps {
    item: IItem;
    branch: number;
    id: number;
    addItem: (item: IItem, child: boolean) => void;
    removeItem: (item: IItem) => void;
}

const NestedListItem: FC<NestedListItemProps> = ({item, branch, id, addItem, removeItem}) => {
    return (
        <ListItem margin={item.level - 1}>
            <ItemContent>
                {
                    item.level > 1 ? <BranchPath height={branch}></BranchPath> : null
                }
                <Branch>
                    <BranchText>
                        {
                            `${item.level}.${id} ${item.text}`
                        }
                    </BranchText>
                    <BranchButtons>

                        <Button onClick={() => {
                            addItem(item, false);
                        }}><Folder/></Button>

                        <Button onClick={() => {
                            addItem(item, true);
                        }}><Folders/></Button>

                        {
                            item.level > 1 ?
                                <Button onClick={() => {
                                    removeItem(item);
                                }}><Trash/></Button> : null
                        }

                    </BranchButtons>
                </Branch>
            </ItemContent>
        </ListItem>
    )
}

export default NestedListItem