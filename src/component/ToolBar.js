function ToolBar(props) {
    return (
        <div className="tool-bar">
            {props.text}
            <i className={props.icon} onClick={props.onClick}></i>
        </div>
    );
}
export default ToolBar;
