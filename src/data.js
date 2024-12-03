import r1 from "../src/assets/r1.jpg";
import r2 from "../src/assets/r2.jpg";
import r3 from "../src/assets/r3.jpg";
const data = [
    {
        src: r1,
        title: "Estándar",
        description: "Para 2 personas",
        cat: "room",
        price: 40000,
        stock: 1,
        notAvailablestart: new Date(2024, 30, 11).getTime(),
        notAvailableend: new Date(2024, 30,11).getTime(),
    },
    {
        src: r2,
        title: "Cuádruple",
        description: "Para 4 personas",
        cat: "room",
        price: 60000,
        stock: 1,
        notAvailablestart: new Date(2024, 30, 11).getTime(),
        notAvailableend: new Date(2024, 30,11).getTime(),
    },
    {
        src: r3,
        title: "Familiar",
        description: "Para 6 personas",
        cat: "room",
        price: 70000,
        stock: 1,
        notAvailablestart: new Date(2024, 30, 11).getTime(),
        notAvailableend: new Date(2024, 30,11).getTime(),
    },
]

export default data;