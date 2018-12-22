import "./NewComponent.scss";

export default function NewComponent({ action }: any): JSX.Element {
    return (<div onClick={action} className="NewComponent" > Hello, World! </div >);
}
