let sampleListings = [
    {
        title: "Seaside Sanctuary",
        description: "Find peace and tranquility at this seaside sanctuary. Escape the hustle and bustle and reconnect with nature.",
        image: {filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww"},
        price: 1300,
        location: "Byron Bay",
        country: "Australia"
    },
    {
        title: "Beachfront Hideaway",
        description: "Discover your own private paradise at this beachfront hideaway. Relax on the beach and soak up the sun.",
        image: {filename: "listingimage", url: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fHww"},
        price: 1700,
        location: "Fiji",
        country: "Fiji"
    },
    {
        title: "Luxury Ocean Villa",
        description: "Indulge in luxury at this oceanfront villa. Enjoy breathtaking views, private pool, and world-class amenities.",
        image: {filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1682889762731-375a6b22d794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8fDA%3D"},
        price: 4000,
        location: "Amalfi Coast",
        country: "Italy"
    },
    {
        title: "Coastal Cottage Escape",
        description: "Escape to this cozy coastal cottage for a relaxing getaway. Enjoy ocean views and serene surroundings.",
        image: {filename: "ok", url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D"},
        price: 1400,
        location: "Cornwall",
        country: "United Kingdom"
    },
    {
        title: "Secluded Beachfront Villa",
        description: "Experience luxury and privacy at this secluded beachfront villa. Relax in style and enjoy stunning ocean views.",
        image: {filename: "ok", url: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGF8ZW58MHx8MHx8fDA%3D"},
        price: 2800,
        location: "Seychelles",
        country: "Seychelles"
    },
    {
        title: "Ocean View Retreat",
        description: "Relax and rejuvenate at this ocean view retreat. Enjoy peaceful surroundings and stunning views of the ocean.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%3D"},
        price: 1600,
        location: "Big Sur",
        country: "United States"
    },
    {
        title: "Beachfront Paradise",
        description: "Experience paradise at this beautiful beachfront property. Relax on the beach and enjoy the sound of the waves.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fHww"},
        price: 1900,
        location: "Barbados",
        country: "Barbados"
    },
    {
        title: "Tropical Island Retreat",
        description: "Escape to a tropical island paradise at this luxurious retreat. Enjoy pristine beaches and crystal-clear waters.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhfGVufDB8fDB8fHww"},
        price: 3000,
        location: "Bora Bora",
        country: "French Polynesia"
    },
    {
        title: "Beachfront Luxury Villa",
        description: "Indulge in luxury at this beachfront villa. Enjoy stunning views, private beach access, and world-class amenities.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww"},
        price: 3500,
        location: "Maui",
        country: "United States"
    },
    {
        title: "Seaside Dream House",
        description: "Live the dream at this seaside dream house. Relax on the beach, swim in the ocean, and enjoy the coastal lifestyle.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"},
        price: 2200,
        location: "Sydney",
        country: "Australia"
    },
    {
        title: "Beachfront Bliss",
        description: "Experience bliss at this beachfront property. Relax in luxury and enjoy stunning ocean views.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
        price: 2000,
        location: "The Hamptons",
        country: "United States"
    },
    {
        title: "Coastal Chic Villa",
        description: "Stay in style at this coastal chic villa. Enjoy modern amenities and breathtaking ocean views.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
        price: 1800,
        location: "Marbella",
        country: "Spain"
    },
    {
        title: "Seaside Luxury Retreat",
        description: "Escape to this luxury retreat by the sea. Enjoy exclusive amenities and personalized service.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
        price: 3000,
        location: "Phuket",
        country: "Thailand"
    },
    {
        title: "Oceanfront Getaway",
        description: "Get away from it all at this oceanfront property. Relax on the beach and enjoy stunning sunsets.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww"},
        price: 1600,
        location: "Cancun",
        country: "Mexico"
    },
    {
        title: "Secluded Coastal Retreat",
        description: "Find peace and serenity at this secluded coastal retreat. Enjoy nature walks and stunning ocean views.",
        image: {filename: "ok", url:"https://images.unsplash.com/photo-1682685797140-c17807f8f217?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        price: 1400,
        location: "Big Island",
        country: "United States"
    }
];

module.exports = { data: sampleListings };
