

export default function Button(props){

    const {text, onclick,style} = props;
    
    return (
        <button style={style} onClick = {onclick}>{text}</button>
    )
}