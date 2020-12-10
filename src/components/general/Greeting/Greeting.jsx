import './greeting.css'
const Greeting = (props) => {

    return ( 
        <div className="container-fluid greeting-container">
            <h2 className="text-center greetingMsg">{props.greeting}</h2>
        </div>
     );
}
 
export default Greeting;