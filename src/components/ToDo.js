import React from 'react';
import Button from "@atlaskit/button";
import EditorRemoveIcon from '@atlaskit/icon/glyph/editor/remove'
import EditIcon from '@atlaskit/icon/glyph/edit'


const ToDo = (props) => {

    return (<div><Button


        className={'listButton'}
        shouldFitContainer={true}

        iconAfter={<span className={'icon'}> <span onClick={ ()=>{

            props.editItem(props.item.mykey,props.item.name)

        }
        } className={'iconEdit'} ><EditIcon></EditIcon></span>
            <span className={'iconRemove'} onClick={() => {

            props.deleteItem(props.item.mykey)

        }}><EditorRemoveIcon /> </span></span>}
    >{props.item.name}
    </Button>
    </div>);
};

export default ToDo;