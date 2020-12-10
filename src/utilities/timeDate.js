const date = new Date();
const timeDate = {
    greeting: () => {
        const time = date.getHours();
        let greeting; 
        if(time<=5 || time>=20){
            greeting = '¡Bienvenid@, buenas noches!';
        } else if(time>5 && time<12){
            greeting = '¡Bienvenid@, buenos días!';
        }else{
            greeting = '¡Bienvenid@, buenas tardes!'
        }
        
        return greeting;
    }
}

export default timeDate;
