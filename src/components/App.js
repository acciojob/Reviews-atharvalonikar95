import React from 'react'
import Card from './comp/Card'
const App = () => {
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:20}}>
            <section className='review-heading' >
                <h1 style={{fontSize:24,fontWeight:600}} >Our Review </h1>
            </section>
            <Card />
        </div>
    )
}

export default App
