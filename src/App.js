import ToDo from "./components/ToDo";
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import {useState} from "react";
import {v4} from "uuid";


function App() {

    const [editKey,setEditKey] =useState();
    const [listNote, setListNode] = useState([])
    const [nameButton, setNameButton] = useState(['Thêm', true])
    const [inputText, setInputText] = useState("")


    function editItem(key, name) {

        setEditKey(key)
        console.log(editKey)
        setNameButton(['Sửa', false])
        setInputText(name)

    }

    function deleteItem(item) {

        const newArr = listNote.filter((obj, index) => {
            return obj.mykey != item
        })
        setListNode(newArr)
    }

    return (<div className="App">
        <p>quoc khanh dien vao</p>

        <Textfield
            value={inputText}
            onChange={(e) => {
                setInputText(e.currentTarget.value)
            }}
            name={"add-todo"}
            placeholder={"Them danh sach vao ..."}
            elemAfterInput={<Button appearance={'primary'}
                                    onClick={() => {

                                        if (nameButton[1] == true) {

                                            setListNode([{mykey: v4(), name: inputText}, ...listNote])
                                            setInputText('')

                                        } else {

                                            console.log(editKey)
                                            const newArr = listNote.filter((obj, index) => {
                                                return obj.mykey.localeCompare(editKey) != 0
                                            })

                                            setListNode([{mykey: v4(), name: inputText}, ...newArr])
                                            setInputText('')
                                            setNameButton(['Thêm', true])

                                        }
                                    }}
            >
                {nameButton}
            </Button>

            }>
        </Textfield>

        {listNote.map((item) => {

            return <ToDo item={item} key={item.mykey} deleteItem={deleteItem} editItem={editItem}/>
        })}


    </div>);
}

export default App;
