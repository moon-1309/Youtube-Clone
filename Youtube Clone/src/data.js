export const API_KEY = 'AIzaSyC7Gdd8PpS3ZN_3aHgUTMEOkDJdWDqKIrA';


export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}

// console.log(video.id);