const bio1 = "Janne is a first generation college student from Sourthern California. She is involved with the business society at Berkeley \
blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. \
blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. \
blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. "

const bio2 = "Cee is a from Manhatten, New York, and she has been dreaming of being an architect ever since she was a kid. She wants \
blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. \
blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. \
blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. "

const bio3 = "Dough is a porcupine fanatic from Krypton who dreams of nothing more than drinking the blood of those who made fun of him in high school \
blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. \
blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. \
blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. blablablablablablabla. "

const students = {

    current: [
        {
            id: 1,
            name: "Janne Pierre",
            gender: "female",
            year: "Junior",
            majors: ["Economics"],
            firstGen: false,
            need: 250,
            support: 20,
            monthsSupported: 2,
            lifetimeSupport: 40,
            bio: bio1
        },
        {
            id: 2,
            name: "Cee Bourne",
            gender: "female",
            year: "Sophomore",
            majors: ["Data Science", "Math"],
            firstGen: true,
            need: 100,
            support: 30,
            monthsSupported: 5,
            lifetimeSupport: 120,
            bio: bio2
        },
        {
            id: 3,
            name: "Dough Ghoatiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            gender: "male",
            year: "Junior",
            majors: ["Computer Science"],
            firstGen: true,
            need: 160,
            support: 10,
            monthsSupported: 4,
            lifetimeSupport: 80,
            bio: bio3
        }
    ],

    former: [
        {
            id: 4,
            name: "Barbara Smith",
            gender: "female",
            year: "Freshman",
            majors: ["Undeclared"],
            firstGen: false,
            need: 120,
            support: 50,
            monthsSupported: 3,
            lifetimeSupport: 150
        }
    ],

    graduated: [
        {
            id: 5,
            name: "Chicken Little",
            gender: null,
            year: "Graduated",
            majors: [],
            firstGen: false,
            need: null,
            support: null,
            monthsSupported: 10,
            lifetimeSupport: 1000
        }
    ],

}

export default students;