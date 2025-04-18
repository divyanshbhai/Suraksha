const mongoose = require('mongoose');
const Incedent = require('../models/incedent.js');

function generateAnonymousIncidentData(count = 10000) {

    const data = [];
    const countries = ["India"];
    const citiesIndia = [
        "Mumbai", "Delhi", "Kolkata", "Chennai", "Bengaluru", "Hyderabad", "Ahmedabad",
        "Pune", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal",
        "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
        "Meerut", "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar",
        "Allahabad", "Ranchi", "Gwalior", "Jabalpur", "Coimbatore", "Vijayawada",
        "Jodhpur", "Madurai", "Raipur", "Chandigarh", "Guwahati", "Kochi", "Bhubaneswar",
        "Salem", "Tiruchirappalli", "Thiruvananthapuram", "Visakhapatnam", "Bhavnagar",
        "Jamnagar", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Bikaner",
        "Udaipur", "Jalandhar", "Nellore", "Mangalore", "Mysuru", "Durgapur", "Asansol",
        "Siliguri", "Solapur", "Hubli-Dharwad", "Bareilly", "Jhansi", "Warangal",
        "Kakinada", "Nanded", "Sangli-Miraj & Kupwad", "Belgaum", "Ambattur", "Tirunelveli",
        "Malegaon", "Gaya", "Jalgaon", "Ujjain", "Maheshtala", "Davanagere", "Kozhikode",
        "Kollam", "Avadi", "Thoothukudi", "Kharagpur", "Tumakuru", "Shivamogga", "Bathinda",
        "Parbhani", "Latur", "Rajamahendravaram", "Dewas", "Ichalkaranji", "Karnal",
        "Satna", "Burhanpur", "Mapusa", "Bhilai", "Shahjahanpur", "Ramagundam", "Panipat",
        "Darbhanga", "Ballia", "Aizawl", "Imphal", "Shillong", "Kohima", "Agartala",
        "Itanagar", "Gangtok", "Dispur", "Port Blair", "Puducherry", "Chandannagar",
        "Dindigul", "Hosur", "Nagercoil", "Tanjore", "Pollachi", "Ooty", "Kodaikanal",
        "Munnar", "Thekkady", "Alleppey", "Varkala", "Bekal", "Hampi", "Badami",
        "Pattadakal", "Aihole", "Khajuraho", "Sanchi", "Bodh Gaya", "Varanasi",
        "Haridwar", "Rishikesh", "Mathura", "Vrindavan", "Pushkar", "Mount Abu",
        "Jaisalmer", "Udaipur", "Jodhpur", "Bikaner", "Jaipur", "Agra", "Fatehpur Sikri",
        "Amritsar", "Shimla", "Manali", "Dharamshala", "Srinagar", "Leh", "Ladakh",
        "Darjeeling", "Kalimpong", "Gangtok", "Shillong", "Cherrapunji", "Guwahati",
        "Kaziranga", "Sundarbans", "Goa", "Kerala Backwaters", "Andaman & Nicobar Islands",
        "Lakshadweep", "Araku Valley", "Chilika Lake", "Konark", "Puri", "Bhubaneswar",
        "Hyderabad", "Charminar", "Golconda Fort", "Warangal Fort", "Vijayawada",
        "Tirupati", "Bengaluru", "Mysore", "Hampi", "Coorg", "Ooty", "Kodaikanal",
        "Chennai", "Mahabalipuram", "Pondicherry", "Madurai", "Kanyakumari", "Kochi",
        "Munnar", "Thekkady", "Alleppey", "Varkala", "Mumbai", "Pune", "Aurangabad",
        "Nashik", "Lonavala", "Khandala", "Malshej Ghat", "Mahabaleshwar", "Panchgani",
        "Nagpur", "Ahmedabad", "Gandhinagar", "Surat", "Vadodara", "Rajkot", "Bhavnagar",
        "Jamnagar", "Dwarka", "Somnath", "Delhi", "Noida", "Gurgaon", "Faridabad",
        "Ghaziabad", "Lucknow", "Kanpur", "Varanasi", "Allahabad", "Agra", "Mathura",
        "Vrindavan", "Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Darjeeling",
        "Shantiniketan", "Patna", "Gaya", "Bodh Gaya", "Ranchi", "Jamshedpur", "Bokaro",
        "Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Khajuraho", "Sanchi",
        "Chandigarh", "Amritsar", "Ludhiana", "Jalandhar", "Srinagar", "Jammu", "Leh",
        "Shimla", "Manali", "Dharamshala", "Dehradun", "Rishikesh", "Haridwar", "Mussoorie",
        "Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar", "Mount Abu", "Ajmer",
        "Guwahati", "Shillong", "Cherrapunji", "Aizawl", "Imphal", "Kohima", "Agartala",
        "Itanagar", "Gangtok", "Port Blair", "Panaji", "Puducherry", "Silvassa",
        "Daman", "Diu", "Kavaratti", "Leh", "Kargil"
    ];
    const forOptions = ["Myself", "Someone else"];
    const genders = ["Male", "Female", "Non-binary", "Other", "Prefer not to say"];
    const whatHappenedOptions = [
        "Verbal harassment", "Physical intimidation", "Unwanted touching",
        "Stalking", "Online harassment", "Sexual assault", "Robbery",
        "Domestic violence", "Other"
    ];
    const reportedOptions = ["Yes I did", "I will, in the future", "I’m not sure if I want to", "No", "I tried"];
    const feelOptions = [
        "My gender", "My sexuality / Perceived sexuality",
        "Because the harasser wanted to intimidate me", "My ethnicity / race / caste",
        "Because the harasser wanted to sexually assault me", "My disability",
        "My level of education", "Minority status", "Climate change", "My religion",
        "My migrant status", "Other", null
    ];
    const typeOptions = [
        "Rape / Sexual Assault", "Chain Snatching / Robbery", "Domestic Violence",
        "Physical Assault", "Stalking", "Ogling / Facial Expressions / Staring",
        "Taking Photos Without Permission", "Indecent Exposure / Masturbation in Public",
        "Touching / Groping", "Showing Pornography Without Consent",
        "Commenting / Sexual Invites", "Online Harassment", "Human Trafficking", "Others"
    ];

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getRandomDate() {
        const start = new Date(2020, 0, 1);
        const end = new Date();
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
    }

    function getRandomTime() {
        const hours = Math.floor(Math.random() * 24).toString().padStart(2, '0');
        const minutes = Math.floor(Math.random() * 60).toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function getRandomCoordinatesInIndia() {
        // Approximate bounding box for India
        const minLat = 6.5;
        const maxLat = 35.5;
        const minLng = 68.0;
        const maxLng = 98.0;

        const latitude = Math.random() * (maxLat - minLat) + minLat;
        const longitude = Math.random() * (maxLng - minLng) + minLng;
        return { lat: latitude, long: longitude };
    }

    for (let i = 0; i < count; i++) {
        const reported = getRandomElement(reportedOptions);
        const feelArray = [];
        if (Math.random() < 0.7) { // 70% chance of having at least one 'feel' factor
        const numFeel = Math.floor(Math.random() * 3) + 1; // Generate 1 to 3 feel factors
        const shuffledFeelOptions = [...feelOptions].sort(() => 0.5 - Math.random());
        for (let j = 0; j < numFeel; j++) {
            const option = shuffledFeelOptions[j];
            if (option) {
            feelArray.push(option);
            }
        }
        }

        const typeArray = [];
        if (Math.random() < 0.6) { // 60% chance of having at least one type
        const numTypes = Math.floor(Math.random() * 2) + 1; // Generate 1 to 2 types
        const shuffledTypeOptions = [...typeOptions].sort(() => 0.5 - Math.random());
        for (let j = 0; j < numTypes; j++) {
            typeArray.push(shuffledTypeOptions[j]);
        }
        }

        data.push({
        Country: getRandomElement(countries),
        City: getRandomElement(citiesIndia),
        For: getRandomElement(forOptions),
        age: Math.floor(Math.random() * 80) + 13, // Assuming age 13+
        gender: getRandomElement(genders),
        what: getRandomElement(whatHappenedOptions),
        when: getRandomDate(),
        Time: getRandomTime(),
        type: typeArray.length > 0 ? typeArray : [],
        reported: reported,
        feel: feelArray.length > 0 ? feelArray : [],
        experience: Math.random() < 0.5 ? "" : `This was a difficult experience... (generated random text)`,
        location: getRandomCoordinatesInIndia(),
        });
    }

    // return JSON.stringify(data, null, 2);
    return data;
    }

let data = generateAnonymousIncidentData(50000);
console.log(data[0]);
main().catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/suraksha');
}

async function initDB(){
    await Incedent.deleteMany({});
    await Incedent.insertMany(data);
    console.log('Data initalized');
}
initDB()