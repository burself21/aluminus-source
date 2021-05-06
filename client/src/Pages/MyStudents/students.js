const students = {

    current: [
        {
            name: "Janne Pierre",
            year: "Junior",
            majors: ["Economics"],
            firstGen: false,
            need: 250,
            support: 20,
            monthsSupported: 2,
            lifetimeSupport: 40
        },
        {
            name: "Cee Bourne",
            year: "Sophomore",
            majors: ["Data Science", "Math"],
            firstGen: true,
            need: 100,
            support: 30,
            monthsSupported: 5,
            lifetimeSupport: 120
        },
        {
            name: "Dough Ghoati",
            year: "Junior",
            majors: ["Computer Science"],
            firstGen: true,
            need: 160,
            support: 10,
            monthsSupported: 4,
            lifetimeSupport: 80
        }
    ],

    former: [
        {
            name: "Barbara Smith",
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
            name: "Chicken Little",
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