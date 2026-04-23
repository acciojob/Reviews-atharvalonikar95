'use client'
import React from 'react'
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];
const Review = () => {
    const [index, setIndex] = React.useState(0)
    const handlePrev = () => {
        setIndex((prev) => {
            if (prev === 0) {
                return reviews.length - 1
            } else {
                return prev - 1
            }
        })
    }
    const handleNext = () => {
        setIndex((prev) => {
            if (prev === reviews.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        })
    }
    const handleRandom = () => {
        let randomIndex = Math.floor(Math.random() * reviews.length)
        setIndex(randomIndex)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, marginTop: 20,width:"30%" }}>
            <div key={reviews[index].id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, marginBottom: 20 }}>
                <img className='person-img' src={reviews[index].image} alt='img' style={{ height: 100, width: 100, borderRadius: "50%" }} />
                <div style={{textAlign:"center",}}>
                    <h2 className='author'>{reviews[index].name}</h2>
                    <h4 className="job">{reviews[index].job}</h4>
                    <p className="info">{reviews[index].text}</p>
                </div>
            </div>
            <div style={{display: "flex",  alignItems: "center", gap: 20,}}>
                <button className='prev-btn' onClick={handlePrev} style={{ padding: "5px 10px", backgroundColor: "black", color: "white", border: "none", borderRadius: 5, cursor: "pointer" }}>prev </button>
                <button className='next-btn' style={{ padding: "5px 10px", backgroundColor: "black", color: "white", border: "none", borderRadius: 5, cursor: "pointer" }}>Next </button>
                <button className='random-btn' onClick={handleRandom} style={{ padding: "5px 10px", backgroundColor: "black", color: "white", border: "none", borderRadius: 5, cursor: "pointer" }}>Surprise Me </button>
            </div>
        </div>
    )
}

export default Review
