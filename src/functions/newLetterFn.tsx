export const moveNewLetterPage = (type: string) => {
    switch(type){
        case 'header' : return window.location.href="https://bit.ly/3s8LGY6";
        case 'footer' : return window.location.href="http://bit.ly/3sJuMQu";
        case 'popup' : return window.location.href="http://bit.ly/3itz9tX"
        case 'mheader' : return window.location.href="https://bit.ly/2M6UzRK";
        case 'mfooter' : return window.location.href="http://bit.ly/3bRvRQ9";
        case 'tablet' : return window.location.href="https://bit.ly/3oT1DiX";
        default : 
            return window.location.href='https://bit.ly/3s8LGY6';
    }
}