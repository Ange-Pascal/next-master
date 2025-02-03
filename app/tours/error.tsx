'use client'

function error({error}: {error: Error}){ 
    console.log(error)
    return(
        <span>Was an error...</span>
    )
}

export default error