import {useState} from 'react';
import { Button } from 'antd';

export default function ItemListContainer(props){

    const {stop, initial} = props;

    const [value , setValue] = useState(parseInt(initial));
    


    return (
        <div>
            <input type="text" value={value} />
            <Button type="primary" shape="circle" disabled={value ===parseInt(stop) ? 'disabled' :null} onClick={() =>setValue(value+1)}>
            +
            </Button>
            <Button type="primary" shape="circle" disabled={value ===parseInt(initial) ? 'disabled' :null} onClick={() =>setValue(value-1)}>
            -
            </Button>
        
      </div>
      );

}


    

